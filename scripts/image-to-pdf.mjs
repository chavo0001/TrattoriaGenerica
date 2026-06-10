import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const [inputPath, outputPath] = process.argv.slice(2);

if (!inputPath || !outputPath) {
  throw new Error("Usage: node scripts/image-to-pdf.mjs <input-image> <output-pdf>");
}

const image = await sharp(inputPath).jpeg({ quality: 94, mozjpeg: true }).toBuffer();
const metadata = await sharp(image).metadata();
const width = metadata.width;
const height = metadata.height;

if (!width || !height) {
  throw new Error(`Unable to read image dimensions: ${inputPath}`);
}

const objects = [];
const addObject = (value) => {
  objects.push(value);
  return objects.length;
};

const catalogId = addObject("pending");
const pagesId = addObject("pending");
const imageId = addObject({
  dictionary:
    `<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} ` +
    `/ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.length} >>`,
  stream: image,
});
const content = Buffer.from(`q\n${width} 0 0 ${height} 0 0 cm\n/Im0 Do\nQ\n`);
const contentId = addObject({
  dictionary: `<< /Length ${content.length} >>`,
  stream: content,
});
const pageId = addObject("pending");

objects[catalogId - 1] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;
objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageId} 0 R] /Count 1 >>`;
objects[pageId - 1] =
  `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${width} ${height}] ` +
  `/Resources << /XObject << /Im0 ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>`;

const chunks = [];
const offsets = [0];
const add = (value) => chunks.push(Buffer.isBuffer(value) ? value : Buffer.from(value, "binary"));

add("%PDF-1.4\n");
objects.forEach((object, index) => {
  offsets[index + 1] = Buffer.concat(chunks).length;
  add(`${index + 1} 0 obj\n`);
  if (typeof object === "string") {
    add(`${object}\n`);
  } else {
    add(`${object.dictionary}\nstream\n`);
    add(object.stream);
    add("\nendstream\n");
  }
  add("endobj\n");
});

const xrefOffset = Buffer.concat(chunks).length;
add(`xref\n0 ${objects.length + 1}\n`);
add("0000000000 65535 f \n");
for (let index = 1; index <= objects.length; index += 1) {
  add(`${String(offsets[index]).padStart(10, "0")} 00000 n \n`);
}
add(
  `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\n` +
    `startxref\n${xrefOffset}\n%%EOF\n`,
);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, Buffer.concat(chunks));
