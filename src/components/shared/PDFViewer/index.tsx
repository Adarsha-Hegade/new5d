import React, { useState, useEffect } from 'react';
import { pdfjs } from 'react-pdf';
import PDFControls from './PDFControls';
import PDFContent from './PDFContent';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Initialize PDF.js with the worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).href;

interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    setPageNumber(1);
    setRotation(0);
  }, [pdfUrl]);

  const handleLoadError = (error: Error) => {
    console.error('Error loading PDF:', error);
    setError('Failed to load PDF. Please check if the URL is correct and accessible.');
  };

  if (error) {
    return (
      <div className="h-full flex items-center justify-center bg-red-50 text-red-600 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <PDFControls
        pageNumber={pageNumber}
        numPages={numPages}
        onPageChange={setPageNumber}
        onRotate={() => setRotation(prev => (prev + 90) % 360)}
      />
      <div className="flex-1 overflow-auto bg-gray-100">
        <PDFContent
          pdfUrl={pdfUrl}
          pageNumber={pageNumber}
          rotation={rotation}
          onDocumentLoadSuccess={setNumPages}
          onDocumentLoadError={handleLoadError}
        />
      </div>
    </div>
  );
}
