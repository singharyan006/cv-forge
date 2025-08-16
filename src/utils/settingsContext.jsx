import React, { createContext, useContext, useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';

const SETTINGS_STORAGE_KEY = 'cvForge:settings';

// Default settings
const defaultSettings = {
  font: 'Roboto, sans-serif',
  primaryColor: '#2e5cb8',
  secondaryColor: '#4a4a4a',
  paperSize: 'a4',
  margin: 'normal'
};

// Available fonts
export const availableFonts = [
  { name: 'Roboto', value: 'Roboto, sans-serif' },
  { name: 'Open Sans', value: 'Open Sans, sans-serif' },
  { name: 'Montserrat', value: 'Montserrat, sans-serif' },
  { name: 'Raleway', value: 'Raleway, sans-serif' },
  { name: 'Lato', value: 'Lato, sans-serif' },
  { name: 'Poppins', value: 'Poppins, sans-serif' },
  { name: 'Merriweather', value: 'Merriweather, serif' },
  { name: 'Playfair Display', value: 'Playfair Display, serif' }
];

// Available color schemes
export const availableColorSchemes = [
  { name: 'Professional Blue', primary: '#2e5cb8', secondary: '#4a4a4a' },
  { name: 'Elegant Green', primary: '#2e8b57', secondary: '#333333' },
  { name: 'Modern Purple', primary: '#673ab7', secondary: '#455a64' },
  { name: 'Bold Red', primary: '#c62828', secondary: '#37474f' },
  { name: 'Minimalist Grey', primary: '#546e7a', secondary: '#263238' },
  { name: 'Creative Orange', primary: '#ed6c02', secondary: '#424242' }
];

// Create context
const CVSettingsContext = createContext();

// Provider component
export const CVSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const savedSettings = loadFromLocalStorage(SETTINGS_STORAGE_KEY);
    return savedSettings || defaultSettings;
  });

  // Save settings to localStorage when they change
  useEffect(() => {
    saveToLocalStorage(SETTINGS_STORAGE_KEY, settings);
  }, [settings]);

  // Update a single setting
  const updateSetting = (key, value) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: value
    }));
  };

  // Reset to default settings
  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  // Apply color scheme from the presets
  const applyColorScheme = (primary, secondary) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      primaryColor: primary,
      secondaryColor: secondary
    }));
  };

  return (
    <CVSettingsContext.Provider value={{ 
      settings, 
      updateSetting, 
      resetSettings, 
      applyColorScheme 
    }}>
      {children}
    </CVSettingsContext.Provider>
  );
};

// Custom hook to use settings
export const useCVSettings = () => {
  const context = useContext(CVSettingsContext);
  if (!context) {
    throw new Error('useCVSettings must be used within a CVSettingsProvider');
  }
  return context;
};
