// const fs = require('fs')
// const {PDFDocument} = require('pdfjs-dist')

// module.exports = async function pdfToByteArray(filePath) {
//     try {
//       const pdfBuffer = fs.readFileSync(filePath);
//       const pdf = await PDFDocument.load(pdfBuffer);
//       const bytes = pdf.save();
  
//       return bytes.buffer;
//     } catch (error) {
//       console.error('Error while converting PDF to byte array:', error);
//       return null;
//     }
//   }