'use client';
import { useState } from 'react';
import Image from 'next/image';
import { CheckIcon, ChevronRightIcon, InfoIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Seamless Connections',
    description: 'Direct farmer-to-supplier connections',
    icon: 'https://via.placeholder.com/40',
    color: 'bg-green-50',
    textColor: 'text-green-600'
  },
  {
    title: 'Secure Transactions',
    description: 'Transparent blockchain payments',
    icon: 'https://via.placeholder.com/40',
    color: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    title: 'Advanced Tracking',
    description: 'Cutting-edge logistics tools',
    icon: 'https://via.placeholder.com/40',
    color: 'bg-purple-50',
    textColor: 'text-purple-600'
  },
  {
    title: 'Eco-Friendly',
    description: 'Sustainability insights',
    icon: 'https://via.placeholder.com/40',
    color: 'bg-emerald-50',
    textColor: 'text-emerald-600'
  }
];

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'farmer'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false
  });

  const validateForm = () => {
    const errors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !formData.email.includes('@')
    };
    setFormErrors(errors);
    return !Object.values(errors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100"
      >
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-center p-12 bg-white rounded-2xl shadow-2xl"
        >
          <CheckIcon className="mx-auto mb-6 text-green-500" size={72} />
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Thank You!</h2>
          <p className="text-xl text-gray-600">You're on the MilkNet early access list.</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <img 
            src="https://via.placeholder.com/140x50" 
            alt="MilkNet Logo" 
            width={140} 
            height={50} 
            className="h-12"
          />
          <div className="space-x-4">
            <a 
              href="#features" 
              className="text-black hover:text-green-600 transition"
            >
              Features
            </a>
            <a 
              href="#waitlist" 
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              Join Waitlist
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Transform Your Dairy Supply Chain
            </h1>
            <p className="text-xl text-black mb-8">
              MilkNet leverages blockchain to connect farmers, suppliers, and consumers seamlessly.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-lg ${feature.color} flex items-center`}
                >
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    width={40} 
                    height={40} 
                    className="w-10 h-10"
                  />
                  <div className="ml-3">
                    <h3 className={`font-semibold ${feature.textColor}`}>
                      {feature.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.form 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-2xl space-y-4"
          >
            <h2 className="text-2xl font-bold text-center text-black mb-6">
              Get Early Access
            </h2>
            
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full p-3 border rounded-lg ${
                  formErrors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full p-3 border rounded-lg ${
                  formErrors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter a valid email
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Role
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="farmer">Farmer</option>
                <option value="supplier">Supplier</option>
                <option value="logistics">Logistics Partner</option>
                <option value="customer">Customer</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center"
            >
              {isLoading ? (
                <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent" />
              ) : (
                <>
                  Get Early Access
                  <ChevronRightIcon className="ml-2" size={20} />
                </>
              )}
            </button>

            <p className="text-xs text-blue-800 text-center flex items-center justify-center">
              <InfoIcon size={12} className="mr-1" />
              Your data is safe and will never be shared
            </p>
          </motion.form>
        </section>
      </main>
    </div>
  );
}

export default Waitlist;