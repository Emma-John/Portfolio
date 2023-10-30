
import React from 'react'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function MyPdfViewer() {
  return (
    <>
    <Document file="./JohnsonResume.pdf">
      <Page></Page>
    </Document>
    </>
  );
}

export default MyPdfViewer;
