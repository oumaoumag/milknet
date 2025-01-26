import React from "react"

function Header() {
    return (
        <header className="shadow-sm bg-gradient-to-br from-green-500 via-green-700 to-green-900  text-white ">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
          <a href="/"><div className="text-2xl font-bold text-black text-bold ">MilkNet</div> </a>
            <div className="space-x-6">
              <a href="/home" className="text-black hover:text-blue-900">Home</a>
              <a href="/about" className="text-black hover:text-blue-900">About</a>
              <a href="/contact" className="text-black hover:text-blue-900">Contact</a>
            </div>
          </nav>
        </div>
      </header> 
      
    );
}

export default Header;