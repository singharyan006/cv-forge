// Custom hook for managing CV data
import { useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage';

const STORAGE_KEY = 'cvForge:data';

export const useCVData = () => {
  // Initialize all data sections together in one object
  const [data, setData] = useState(() => {
    // Try to load from localStorage first
    const saved = loadFromLocalStorage(STORAGE_KEY);
    
    // Default initial state if nothing in localStorage
    return saved || {
      personal: {
        fullName: '',
        title: ''
      },
      contacts: {
        email: '',
        phone: '',
        location: ''
      },
      links: [],
      education: [],
      experience: [],
      skills: [],
      achievements: []
    };
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
  
  // Clear all data
  const resetData = () => {
    setData({
      personal: { fullName: '', title: '' },
      contacts: { email: '', phone: '', location: '' },
      links: [],
      education: [],
      experience: [],
      skills: [],
      achievements: []
    });
  };
  
  return {
    data,
    updateSection,
    resetData
  };
};
