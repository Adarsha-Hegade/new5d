import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ZoomIn as ZoomInIcon, ZoomOut as ZoomOutIcon, RotateCw, ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import PDFControls from './PDFViewer/PDFControls';

// 1. Worker Initialization (Improved):  Ensure workerSrc is set correctly and only once.
pdfjs.GlobalWorkerOptions.workerSrc = pdfjs.GlobalWorkerOptions.workerSrc || new URL(
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pdfReady, setPdfReady] = useState(false); // Track PDF loading status
  const documentRef = useRef<any>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setPageNumber(1);
    setPdfReady(false); // Reset PDF ready state on URL change
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPdfReady(true); 
    setLoading(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error);
    setError('Failed to load PDF. Please check the URL.'); // 3. Error Handling
    setLoading(false);
  };

  const LoadingSpinner = () => (
    <div className="h-full flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <div className="h-full flex flex-col">
      <PDFControls
        pageNumber={pageNumber}
        numPages={numPages}
        onPageChange={setPageNumber}
        onRotate={() => setRotation((prev) => (prev + 90) % 360)}
      />
      <div className="flex-1 overflow-auto bg-gray-100">
        {loading ? (
          <LoadingSpinner /> // 2. Loading Feedback
        ) : error ? (
          <div className="h-full flex items-center justify-center bg-red-50 text-red-600 p-4">
            {error}
          </div>
        ) : (
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            className="min-h-full w-full flex justify-center p-4"
          >
            {pdfReady && ( 
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
                    scale={1}
                  />
                </TransformComponent>
              </TransformWrapper>
            )}
          </Document>
        )}
      </div>
    </div>
  );
}
