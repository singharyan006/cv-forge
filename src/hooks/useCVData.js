// Custom hook for managing CV data
import { useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage';
import { sampleData } from '../data/sampleData';

const STORAGE_KEY = 'cvForge:data';

export const useCVData = () => {
  // Initialize all data sections together in one object
  const [data, setData] = useState(() => {
    // Try to load from localStorage first
    const saved = loadFromLocalStorage(STORAGE_KEY);
    
    // Use sample data if nothing in localStorage
    return saved || sampleData;
  });
  
  // Save to localStorage whenever data changes
  useEffect(() => {
    saveToLocalStorage(STORAGE_KEY, data);
  }, [data]);
  
  // Helper to update specific sections
  const updateSection = (section, newData) => {
    setData(prevData => ({
      ...prevData,
      [section]: newData
    }));
  };
  
  // Reset to sample data
  const resetData = () => {
    setData(sampleData);
  };
  
  return {
    data,
    updateSection,
    resetData
  };
};
