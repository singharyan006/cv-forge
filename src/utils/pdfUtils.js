// PDF generation utilities
import html2pdf from 'html2pdf.js';

// Default PDF options
const defaultOptions = {
  margin: 10,
  filename: 'my-cv.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2, useCORS: true, logging: false },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
};

/**
 * Generate a PDF from the CV Preview element
 * @param {HTMLElement} element - The DOM element to convert to PDF
 * @param {Object} customOptions - Optional custom PDF options
 * @param {string} filename - Optional filename (default: my-cv.pdf)
 * @returns {Promise} - Promise resolving when PDF generation is complete
 */
export const generatePDF = (element, customOptions = {}, filename = 'my-cv.pdf') => {
  // Clone the element to avoid modifying the original
  const clonedElement = element.cloneNode(true);
  
  // Merge default options with custom options
  const options = { 
    ...defaultOptions,
    ...customOptions,
    filename: filename
  };

  // Remove any buttons or unwanted elements from the PDF
  const buttonsToRemove = clonedElement.querySelectorAll('button, .no-print');
  buttonsToRemove.forEach(button => button.remove());

  // Convert to PDF
  return html2pdf().set(options).from(clonedElement).save();
};

/**
 * Generate PDF with specific paper size
 * @param {HTMLElement} element - The DOM element to convert
 * @param {string} paperSize - 'a4', 'letter', etc.
 * @param {string} filename - Optional filename
 */
export const generatePDFWithSize = (element, paperSize, filename = 'my-cv.pdf') => {
  const options = {
    ...defaultOptions,
    jsPDF: { ...defaultOptions.jsPDF, format: paperSize }
  };
  return generatePDF(element, options, filename);
};

/**
 * Generate PDF with custom margins
 * @param {HTMLElement} element - The DOM element to convert
 * @param {number} margin - Margin size in mm
 * @param {string} filename - Optional filename
 */
export const generatePDFWithMargins = (element, margin, filename = 'my-cv.pdf') => {
  const options = {
    ...defaultOptions,
    margin: margin
  };
  return generatePDF(element, options, filename);
};
