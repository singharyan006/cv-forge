// ...existing code...
import { useState } from 'react'
import './App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  return (
    <div className="app">
      <header>
        <h1>CV Forge</h1>
        <p>Build your professional CV with ease</p>
      </header>
      
      <main>
        <div className="form-section">
          <h2>Personal Information</h2>
          <form>
            <input 
              type="text" 
              placeholder="Full Name"
              value={personalInfo.name}
              onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
            />
            <input 
              type="email" 
              placeholder="Email"
              value={personalInfo.email}
              onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
            />
            <input 
              type="tel" 
              placeholder="Phone"
              value={personalInfo.phone}
              onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Address"
              value={personalInfo.address}
              onChange={(e) => setPersonalInfo({...personalInfo, address: e.target.value})}
            />
          </form>
        </div>

        <div className="preview-section">
          <h2>CV Preview</h2>
          <div className="cv-preview">
            <h3>{personalInfo.name || 'Your Name'}</h3>
            <p>{personalInfo.email || 'your.email@example.com'}</p>
            <p>{personalInfo.phone || 'Your Phone'}</p>
            <p>{personalInfo.address || 'Your Address'}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App