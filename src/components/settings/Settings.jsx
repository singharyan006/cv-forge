import React, { useRef } from 'react';
import { useCVSettings, availableFonts, availableColorSchemes } from '../../utils/settingsContext.jsx';
import { generatePDF, generatePDFWithSize, generatePDFWithMargins } from '../../utils/pdfUtils';
import '../../styles/settings.css';

const Settings = ({ previewRef }) => {
  const { settings, updateSetting, resetSettings, applyColorScheme } = useCVSettings();
  const fileInputRef = useRef(null);
  
  const handleFontChange = (e) => {
    updateSetting('font', e.target.value);
  };
  
  const handleColorSchemeChange = (e) => {
    const selectedSchemeIndex = e.target.value;
    const scheme = availableColorSchemes[selectedSchemeIndex];
    applyColorScheme(scheme.primary, scheme.secondary);
  };
  
  const handlePaperSizeChange = (e) => {
    updateSetting('paperSize', e.target.value);
  };
  
  const handleMarginChange = (e) => {
    updateSetting('margin', e.target.value);
  };
  
  const handleCustomPrimaryColorChange = (e) => {
    updateSetting('primaryColor', e.target.value);
  };
  
  const handleCustomSecondaryColorChange = (e) => {
    updateSetting('secondaryColor', e.target.value);
  };
  
  const handleDownloadPDF = () => {
    if (previewRef.current) {
      // Get margin value based on setting
      const marginValues = {
        none: 0,
        small: 5,
        normal: 10,
        large: 20
      };
      
      const margin = marginValues[settings.margin];
      
      // Generate PDF with current settings
      generatePDFWithSize(
        previewRef.current,
        settings.paperSize,
        'my-cv.pdf'
      ).then(() => {
        console.log('PDF generated successfully');
      }).catch(err => {
        console.error('Error generating PDF:', err);
      });
    } else {
      console.error('Preview element not found');
    }
  };

  return (
    <div className="settings-container">
      <h3>CV Settings</h3>
      
      <div className="settings-section">
        <h4>Typography</h4>
        <div className="form-group">
          <label htmlFor="font-selector">Font Family</label>
          <select 
            id="font-selector" 
            value={settings.font} 
            onChange={handleFontChange}
          >
            {availableFonts.map((font, index) => (
              <option key={index} value={font.value}>{font.name}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="settings-section">
        <h4>Colors</h4>
        <div className="form-group">
          <label htmlFor="color-scheme">Color Scheme</label>
          <select 
            id="color-scheme" 
            onChange={handleColorSchemeChange}
          >
            <option value="">Select a color scheme</option>
            {availableColorSchemes.map((scheme, index) => (
              <option key={index} value={index}>{scheme.name}</option>
            ))}
          </select>
        </div>
        
        <div className="color-pickers">
          <div className="form-group">
            <label htmlFor="primary-color">Primary Color</label>
            <input
              type="color"
              id="primary-color"
              value={settings.primaryColor}
              onChange={handleCustomPrimaryColorChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="secondary-color">Secondary Color</label>
            <input
              type="color"
              id="secondary-color"
              value={settings.secondaryColor}
              onChange={handleCustomSecondaryColorChange}
            />
          </div>
        </div>
      </div>
      
      <div className="settings-section">
        <h4>PDF Export Settings</h4>
        <div className="form-group">
          <label htmlFor="paper-size">Paper Size</label>
          <select 
            id="paper-size" 
            value={settings.paperSize}
            onChange={handlePaperSizeChange}
          >
            <option value="a4">A4</option>
            <option value="letter">Letter</option>
            <option value="legal">Legal</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="margin-size">Margins</label>
          <select 
            id="margin-size" 
            value={settings.margin}
            onChange={handleMarginChange}
          >
            <option value="none">None</option>
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
      
      <div className="settings-actions">
        <button 
          className="download-btn"
          onClick={handleDownloadPDF}
        >
          Download PDF
        </button>
        
        <button 
          className="reset-btn"
          onClick={resetSettings}
        >
          Reset Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
