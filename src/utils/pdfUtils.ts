import { pdfjs } from 'react-pdf';

export const initializePDFJS = () => {
  try {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  } catch (error) {
    console.error('Error initializing PDF.js:', error);
  }
};

export const validatePDFUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const contentType = response.headers.get('content-type');
    return response.ok && contentType?.includes('pdf');
  } catch (error) {
    console.error('Error validating PDF URL:', error);
    return false;
  }
};
