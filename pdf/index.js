const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('output.pdf'));

// Render text using the default font
doc
  .fontSize(25)
  .text('Some text with the default font!', 100, 100);

// Finalize the PDF
doc.end();
