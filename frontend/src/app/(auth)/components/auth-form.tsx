'use client';
import { useState } from 'react';
import { Github, Wallet, Mail, ArrowRight, UserCircle, TractorIcon } from 'lucide-react';
import { UserType } from '../../../types/auth';

interface AuthFormProps {
  setShowAuth: (show: boolean) => void;
  onAuthenticate: (authenticated: boolean, userType: UserType) => void;
}

export const AuthForm = ({ setShowAuth, onAuthenticate }: AuthFormProps) => {
  const [isLogin, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedUserType, setSelectedUserType] = useState<UserType>(null);

  const handleUserTypeSelect = (type: UserType) => {
    setSelectedUserType(type);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && selectedUserType) {
      onAuthenticate(true, selectedUserType);
      setShowAuth(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-500">Welcome to MilkNet</h2>
          <p className="text-gray-600 mt-2">
            {isLogin ? 'Sign in to continue' : 'Create your account'}
          </p>
        </div>

        <button 
          onClick={() => setShowAuth(false)}
          className="w-full bg-gray-700 hover:bg-gray-500 text-white px-4 py-2 mb-6 rounded-lg transition-all"
        >
          Back to Home
        </button>

        {!isLogin && (
          <div className="space-y-4 mb-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-green-500">Select Your Role</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleUserTypeSelect('consumer')}
                className={`flex flex-col items-center p-4 rounded-lg transition-all ${
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
                <TractorIcon className="w-10 h-10 mb-2" />
                Farmer
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p className="text-center mt-4">
          <button
            onClick={() => setLogin(!isLogin)}
            className="text-green-500 hover:text-green-600"
          >
            {isLogin ? 'Need an account?' : 'Already have an account?'}
          </button>
        </p>
      </div>
    </div>
  );
};
    