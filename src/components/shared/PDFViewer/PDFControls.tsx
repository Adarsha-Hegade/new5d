import React from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

interface PDFControlsProps {
  pageNumber: number;
  numPages: number | null;
  onPageChange: (page: number) => void;
  onRotate: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export default function PDFControls({
  pageNumber,
  numPages,
  onPageChange,
  onRotate,
  onZoomIn,
  onZoomOut,
}: PDFControlsProps) {
  return (
    <div className="flex items-center justify-between p-2 border-b bg-white">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(Math.max(pageNumber - 1, 1))}
          disabled={pageNumber <= 1}
          className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
          title="Previous page"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-sm">
          Page {pageNumber} of {numPages || '--'}
        </span>
        <button
          onClick={() => onPageChange(Math.min(pageNumber + 1, numPages || pageNumber))}
          disabled={pageNumber >= (numPages || 1)}
          className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
          title="Next page"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onZoomOut}
          className="p-1 rounded hover:bg-gray-100"
          title="Zoom out"
        >
          <ZoomOut size={20} />
        </button>
        <button
          onClick={onZoomIn}
          className="p-1 rounded hover:bg-gray-100"
          title="Zoom in"
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={onRotate}
          className="p-1 rounded hover:bg-gray-100"
          title="Rotate"
        >
          <RotateCw size={20} />
        </button>
      </div>
    </div>
  );
}