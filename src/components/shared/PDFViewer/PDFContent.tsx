import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import LoadingSpinner from '../LoadingSpinner';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFContentProps {
  pdfUrl: string;
  pageNumber: number;
  rotation: number;
  onDocumentLoadSuccess: (numPages: number) => void;
  onDocumentLoadError: (error: Error) => void;
}

export default function PDFContent({
  pdfUrl,
  pageNumber,
  rotation,
  onDocumentLoadSuccess,
  onDocumentLoadError,
}: PDFContentProps) {
  return (
    <div className="min-h-full w-full flex justify-center p-4 bg-gray-100">
      <Document
        file={pdfUrl}
        onLoadSuccess={({ numPages }) => onDocumentLoadSuccess(numPages)}
        onLoadError={onDocumentLoadError}
        className="min-h-full w-full flex justify-center p-4"
      >
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={3}
          centerOnInit={true}
        >
          <TransformComponent>
            <Page
              key={`page_${pageNumber}_${rotation}`}
              pageNumber={pageNumber}
              rotate={rotation}
              renderTextLayer={false} // For performance optimization
              renderAnnotationLayer={false} // For performance optimization
            />
          </TransformComponent>
        </TransformWrapper>
      </Document>
    </div>
  );
}
