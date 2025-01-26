import React, { useState } from "react"
import Auth from './auth'

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePhase, setActivePhase] = useState(1);
  const [showAuth, setShowAuth] = useState(false); // New state variable

  if (showAuth) {
    return <Auth setShowAuth={setShowAuth} />; // Pass setShowAuth as a prop
  }
    return (
        <header className="shadow-sm bg-gradient-to-br from-green-500 via-green-700 to-green-900  text-white ">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
          <a href="/"><div className="text-2xl font-bold text-black text-bold ">MilkNet</div> </a>
            <div className="space-x-6">
              <a href="/home" className="text-black hover:text-blue-900">Home</a>
              <a href="/about" className="text-black hover:text-blue-900">About</a>
              <a href="/contact" className="text-black hover:text-blue-900">Contact</a>
              <button 
              onClick={() => setShowAuth(true)} // onCLick handler
              className="bg-blue500/10 hover:bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg transition-all">
                Sign In
              </button>
            </div>
          </nav>
        </div>
      </header> 
      
    );
}

export default Header;