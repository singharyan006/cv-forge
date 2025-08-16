import { sampleData } from '../data/sampleData';
import { saveToLocalStorage } from './localStorage';

const STORAGE_KEY = 'cvForge:data';

// Reset to sample data
export const resetToSampleData = () => {
  saveToLocalStorage(STORAGE_KEY, sampleData);
  return sampleData;
};

// Clear all data and set to empty state
export const clearAllData = () => {
  const emptyData = {
    personal: { fullName: '', title: '' },
    contacts: { email: '', phone: '', location: '' },
    links: [],
    education: [],
    experience: [],
    skills: [],
    achievements: []
  };
  
  saveToLocalStorage(STORAGE_KEY, emptyData);
  return emptyData;
};
