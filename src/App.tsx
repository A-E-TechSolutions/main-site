import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import EmailSuccess from './components/EmailSuccess';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [showSuccess, setShowSuccess] = React.useState(false);

  if (showSuccess) {
    return (
      <LanguageProvider>
        <EmailSuccess />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Contact onEmailSent={() => setShowSuccess(true)} />
        </main>
        <footer className="bg-slate-900 text-gray-300 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>© 2024 AE Tech Solutions. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;