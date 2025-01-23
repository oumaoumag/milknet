'use client';
import Image from 'next/image';
import { useState } from 'react';
import Footer from '../components/footer';

function Waitlist() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'farmer',
    organization: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="text-center text-white p-8 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
          <p className="text-xl">We'll notify you when MilkNet launches.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-white mb-16 animate-fadeDown">
          <h1 className="text-5xl font-bold mb-6">
          MILKNET<br/>
            The Future of Dairy Supply Chain
          </h1>
          <p className="text-xl mb-8">
            Join the revolution in transparent and efficient dairy farming
          </p>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Transparent</h3>
              <p>Track your dairy products from farm to table</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Secure</h3>
              <p>Blockchain-powered transactions and data</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Efficient</h3>
              <p>Streamlined supply chain management</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Organization (Optional)"
                className="w-full px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.organization}
                onChange={(e) => setFormData({...formData, organization: e.target.value})}
              />
            </div>
            <div>
              <select
                className="w-full px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              >
                <option value="farmer">Dairy Farmer</option>
                <option value="consumer">Consumer</option>
                <option value="distributor">Distributor</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 rounded-lg text-white font-semibold transition-all
                ${isLoading 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600 hover:scale-105'}`}
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        </div>
      </div>
      < Footer />
    </div>
  );
}

export default Waitlist;