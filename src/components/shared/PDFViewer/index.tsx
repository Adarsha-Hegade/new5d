import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';
import PDFControls from './PDFControls';
import PDFContent from './PDFContent';
import LoadingSpinner from '../LoadingSpinner';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error);
    setError('Failed to load PDF document');
    setLoading(false);
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };

  const handlePageChange = (newPage: number) => {
    if (numPages && newPage >= 1 && newPage <= numPages) {
      setPageNumber(newPage);
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-100">
      <PDFControls
        pageNumber={pageNumber}
        numPages={numPages}
        onPageChange={handlePageChange}
        onRotate={() => setRotation(prev => (prev + 90) % 360)}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
      />

      <div className="flex-1 overflow-hidden">
        {loading && (
          <div className="h-full flex items-center justify-center">
            <LoadingSpinner />
          </div>
        )}
        
        {error && (
          <div className="h-full flex items-center justify-center text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && (
          <PDFContent
            pdfUrl={pdfUrl}
            pageNumber={pageNumber}
            rotation={rotation}
            onDocumentLoadSuccess={onDocumentLoadSuccess}
            onDocumentLoadError={onDocumentLoadError}
            scale={scale}
          />
        )}
      </div>
    </div>
  );
}