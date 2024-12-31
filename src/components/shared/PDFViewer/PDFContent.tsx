import React from 'react';
import { Document, Page } from 'react-pdf';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import LoadingSpinner from '../LoadingSpinner';

interface PDFContentProps {
  pdfUrl: string;
  pageNumber: number;
  rotation: number;
  onDocumentLoadSuccess: ({ numPages }: { numPages: number }) => void;
  onDocumentLoadError: (error: Error) => void;
  scale: number;
}

export default function PDFContent({
  pdfUrl,
  pageNumber,
  rotation,
  onDocumentLoadSuccess,
  onDocumentLoadError,
  scale,
}: PDFContentProps) {
  return (
    <div className="h-full w-full overflow-auto">
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<LoadingSpinner />}
        className="flex flex-col items-center p-4"
      >
        <TransformWrapper
          initialScale={scale}
          minScale={0.5}
          maxScale={3}
          centerOnInit={true}
          panning={{ 
            activationKeys: ["Space"],
            lockAxisY: false
          }}
          wheel={{ step: 0.1 }}
        >
          {({ zoomIn, zoomOut }) => (
            <>
              <style>
                {`
                  .react-transform-wrapper {
                    cursor: default !important;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                  }
                  .react-transform-wrapper.grabbed,
                  .react-transform-wrapper:active {
                    cursor: grabbing !important;
                  }
                  .react-transform-component {
                    width: auto !important;
                  }
                `}
              </style>
              <TransformComponent
                wrapperClass="react-transform-wrapper"
                contentClass="react-transform-content"
              >
                <div className="relative">
                  <Page
                    key={`page_${pageNumber}_${rotation}_${scale}`}
                    pageNumber={pageNumber}
                    rotate={rotation}
                    className="shadow-lg bg-white"
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    loading={<LoadingSpinner />}
                    scale={scale}
                  />
                  <div className="absolute inset-0 pointer-events-none select-none" />
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </Document>
    </div>
  );
}