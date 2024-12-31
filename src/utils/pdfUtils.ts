import { pdfjs } from 'react-pdf';

export const initializePDFJS = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
};

export const validatePDFUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { 
      method: 'HEAD',
      mode: 'cors',
      credentials: 'omit'
    });
    const contentType = response.headers.get('content-type');
    return response.ok && (contentType?.includes('pdf') || url.toLowerCase().endsWith('.pdf'));
  } catch (error) {
    console.error('Error validating PDF URL:', error);
    return true; // Return true on error to allow PDF.js to attempt loading
  }
};