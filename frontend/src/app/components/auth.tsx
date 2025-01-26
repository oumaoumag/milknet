import React, { useState } from 'react';
import { Github, Wallet, Mail, ArrowRight, UserCircle, TractorIcon } from 'lucide-react';

type UserType = 'consumer' | 'farmer' | null;

interface AuthProps {
  setShowAuth: (show: boolean) => void;
  onAuthenticate: (authenticated: boolean, userType: UserType) => void;
}

const Auth: React.FC<AuthProps> = ({ setShowAuth, onAuthenticate }) => {
    const [isLogin, setLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedUserType, setSelectedUserType] = useState<UserType>(null)

    const handleUserTypeSelect = (type: UserType) => {
      setSelectedUserType(type);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (email && password && selectedUserType) {
        console.log('Form submitted:', { email, password, UserType: selectedUserType});
        onAuthenticate(true, selectedUserType);
        setShowAuth(false);
        }
    };

    // // User Type Selection Component
    const UserTypeSelection = () => (
      <div className='space-y-4 mb-6'>
        <div className='text-center mb-4'>
          <h3 className="text-xl font-semibold text-green-500">Select Your Role</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
          onClick={() => handleUserTypeSelect('consumer')}
          className={`flex flex-col items-center p-4 rouded-lg transition-all ${
            selectedUserType === 'consumer'
            ? 'bg-blue-600 text-white'
            : 'bg-white/10 hover:bg-white/20 text-black'
          }`}
          >
             <UserCircle className="w-10 h-10 mb-2" />
        Consumer
      </button>
      <button
        onClick={() => handleUserTypeSelect('farmer')}
        className={`flex flex-col items-center p-4 rounded-lg transition-all ${
          selectedUserType === 'farmer'
            ? 'bg-blue-600 text-white'
            : 'bg-white/10 hover:bg-white/20 text-black'
        }`}
      >
            <TractorIcon className='w-10 h-10 mb-2' />
            Farmer
            </button>
        </div>
      </div>
    );
  
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center px-4">
          <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-500">Welcome to MilkNet</h2>
              <p className="text-gray-600 mt-2">
                {isLogin ? 'Sign in to continue to the platform' 
                : 'Create your account to get started'}
              </p>
            </div>

            <button 
            onClick={() => setShowAuth(false)}
            className='w-full bg-gray-700 hover:bg-gray-500 text-white px-4 py-2 mb-6 rounded-lg transition-all'>
              Back to Home
            </button>

          {!isLogin && !selectedUserType && <UserTypeSelection />}

            {/* Auth Options */}
            <div className="space-y-4 mb-8 bg-gray-500 rounded-lg ">
              <button className="w-full bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-3 group">
                <Github className="w-5 h-5" />
                Continue with GitHub
                <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </button>
              <button className="w-full bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-3 group">
                <Wallet className="w-5 h-5" />
                Continue with Wallet
                <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </button>
            </div>
    
            {/* Divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-900 text-gray-400">Or continue with email</span>
              </div>
            </div>
    
            {/* Email Form */}
            {(isLogin || selectedUserType) && ( <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
           
    
            {/* Toggle Auth Mode */}
            <p className="mt-8 text-center text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setLogin(!isLogin)}
                className="ml-2 text-blue-800 hover:text-blue-600 transition-colors"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      );
    };
    
    export default Auth;

