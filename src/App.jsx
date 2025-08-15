import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 Vite React Template</h1>
        <p className="subtitle">by singharyan006</p>
      </header>
      
      <main className="app-main">
        <div className="welcome-card">
          <h2>Welcome to Your New Project!</h2>
          <p>This template includes:</p>
          <ul className="features-list">
            <li>⚡ Vite for lightning-fast development</li>
            <li>⚛️ React 19 with modern features</li>
            <li>🔧 ESLint for code quality</li>
            <li>📦 SWC for super-fast compilation</li>
          </ul>
        </div>
        
        <div className="getting-started">
          <h3>Ready to start building?</h3>
          <p>Edit <code>src/App.jsx</code> and save to see changes instantly!</p>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Happy coding! 🎉</p>
      </footer>
    </div>
  )
}

export default App
