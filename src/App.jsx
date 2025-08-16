import { useState } from 'react';
import { useCVData } from './hooks/useCVData';

// Import form components
import PersonalDetails from './components/forms/PersonalDetails';
import Contacts from './components/forms/Contacts';
import Links from './components/forms/Links';
import Education from './components/forms/Education';
import Experience from './components/forms/Experience';
import Skills from './components/forms/Skills';
import Achievements from './components/forms/Achievements';

// Import preview component
import CVPreview from './components/preview/CVPreview';

// Import styles
import './styles/forms.css';
import './styles/preview.css';
import './App.css';

function App() {
  // Use our custom hook for state management
  const { data, updateSection, resetData } = useCVData();
  const [activeSection, setActiveSection] = useState('personal');

  // Handle form section navigation
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <header>
        <h1>CV Forge</h1>
        <p>Build your professional CV with ease</p>
      </header>
      
      <main>
        <div className="form-container">
          <nav className="form-nav">
            <button 
              className={activeSection === 'personal' ? 'active' : ''}
              onClick={() => handleSectionChange('personal')}
            >
              Personal
            </button>
            <button 
              className={activeSection === 'contacts' ? 'active' : ''}
              onClick={() => handleSectionChange('contacts')}
            >
              Contacts
            </button>
            <button 
              className={activeSection === 'links' ? 'active' : ''}
              onClick={() => handleSectionChange('links')}
            >
              Links
            </button>
            <button 
              className={activeSection === 'education' ? 'active' : ''}
              onClick={() => handleSectionChange('education')}
            >
              Education
            </button>
            <button 
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={() => handleSectionChange('experience')}
            >
              Experience
            </button>
            <button 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={() => handleSectionChange('skills')}
            >
              Skills
            </button>
            <button 
              className={activeSection === 'achievements' ? 'active' : ''}
              onClick={() => handleSectionChange('achievements')}
            >
              Achievements
            </button>
          </nav>
          
          <div className="form-sections">
            {activeSection === 'personal' && (
              <PersonalDetails 
                data={data.personal} 
                onChange={(newData) => updateSection('personal', newData)} 
              />
            )}
            
            {activeSection === 'contacts' && (
              <Contacts 
                data={data.contacts} 
                onChange={(newData) => updateSection('contacts', newData)} 
              />
            )}
            
            {activeSection === 'links' && (
              <Links 
                data={data.links} 
                onChange={(newData) => updateSection('links', newData)} 
              />
            )}
            
            {activeSection === 'education' && (
              <Education 
                data={data.education} 
                onChange={(newData) => updateSection('education', newData)} 
              />
            )}
            
            {activeSection === 'experience' && (
              <Experience 
                data={data.experience} 
                onChange={(newData) => updateSection('experience', newData)} 
              />
            )}
            
            {activeSection === 'skills' && (
              <Skills 
                data={data.skills} 
                onChange={(newData) => updateSection('skills', newData)} 
              />
            )}
            
            {activeSection === 'achievements' && (
              <Achievements 
                data={data.achievements} 
                onChange={(newData) => updateSection('achievements', newData)} 
              />
            )}
            
            <div className="action-buttons">
              <button 
                className="reset-btn"
                onClick={resetData}
                title="Clear all CV data"
              >
                Reset CV
              </button>
            </div>
          </div>
        </div>

        <div className="preview-container">
          <CVPreview data={data} />
        </div>
      </main>
    </div>
  )
}

export default App