import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ZoomIn as ZoomInIcon, ZoomOut as ZoomOutIcon, RotateCw, ChevronLeft, ChevronRight } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [rotation, setRotation] = useState(0);
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

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-2 border-b bg-white">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
            className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm">
            Page {pageNumber} of {numPages || '--'}
          </span>
          <button
            onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages || prev))}
            disabled={pageNumber >= (numPages || 1)}
            className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setRotation(prev => (prev + 90) % 360)}
            className="p-1 rounded hover:bg-gray-100"
          >
            <RotateCw size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-gray-100">
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

        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={<LoadingSpinner />}
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
                className="shadow-lg"
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading={<LoadingSpinner />}
              />
            </TransformComponent>
          </TransformWrapper>
        </Document>
      </div>
    </div>
  );
}