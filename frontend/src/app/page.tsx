'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, LineChart, Wallet } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Define types for MetaMask ethereum provider
interface EthereumProvider {
  request: (args: { method: string; params?: any[] }) => Promise<any>;
  on: (eventName: string, handler: (...args: any[]) => void) => void;
  removeListener: (eventName: string, handler: (...args: any[]) => void) => void;
  isMetaMask?: boolean;
}

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

export default function HomePage() {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const connectWallet = async () => {
    setError('');
    setIsConnecting(true);

    try {
      // Check if MetaMask is installed
      if (!window.ethereum || !window.ethereum.isMetaMask) {
        throw new Error('MetaMask is not installed. Please install MetaMask to continue.');
      }

      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      // Check if we got any accounts
      if (accounts && accounts.length > 0) {
        const address = accounts[0];
        setWalletAddress(address);

        // Check if user exists in your system
        try {
          const response = await fetch(`/api/users/wallet/${address}`);
          if (response.ok) {
            // User exists, redirect to dashboard
            router.push('/dashboard');
          } else if (response.status === 404) {
            // User doesn't exist, redirect to register page with wallet address
            router.push(`/register?wallet=${address}`);
          } else {
            throw new Error('Failed to check user status');
          }
        } catch (error) {
          console.error('Error checking user status:', error);
          setError('Failed to verify user status. Please try again.');
        }

        // Add Sepolia network if not already added
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xaa36a7' }], // Sepolia chainId
          });
        } catch (switchError: any) {
          // This error code indicates that the chain has not been added to MetaMask
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0xaa36a7',
                  chainName: 'Sepolia',
                  nativeCurrency: {
                    name: 'ETH',
                    symbol: 'ETH',
                    decimals: 18
                  },
                  rpcUrls: ['https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID'],
                  blockExplorerUrls: ['https://sepolia.etherscan.io']
                }]
              });
            } catch (addError) {
              throw new Error('Failed to add Sepolia network.');
            }
          } else {
            throw new Error('Failed to switch to Sepolia network.');
          }
        }
      }
    } catch (error: any) {
      console.error('Wallet connection error:', error);
      setError(error.message || 'Failed to connect wallet. Please try again.');
      setWalletAddress('');
    } finally {
      setIsConnecting(false);
    }
  };

  // Listen for account changes
  useEffect(() => {
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        // User disconnected their wallet
        setWalletAddress('');
        setError('Wallet disconnected');
      } else {
        setWalletAddress(accounts[0]);
        setError('');
      }
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      
      // Check if already connected
      window.ethereum.request({ method: 'eth_accounts' })
        .then(handleAccountsChanged)
        .catch(console.error);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to MilkNet
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Revolutionizing the dairy industry through blockchain technology
            </p>
            
            {/* Wallet Connection Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg max-w-md mx-auto">
                {error}
                {error.includes('MetaMask is not installed') && (
                  <a
                    href="https://metamask.io/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 text-blue-600 hover:underline"
                  >
                    Install MetaMask
                  </a>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link 
                href="/register"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button
                onClick={connectWallet}
                disabled={isConnecting}
                className={`flex items-center px-8 py-3 rounded-lg transition-colors
                  ${walletAddress 
                    ? 'bg-green-100 text-green-800'
                    : isConnecting
                      ? 'bg-gray-100 text-gray-600 cursor-not-allowed'
                      : 'border-2 border-green-600 text-green-600 hover:bg-green-50'
                  }`}
              >
                <Wallet className="mr-2 w-5 h-5" />
                {isConnecting ? 'Connecting...' : 
                 walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 
                 'Connect Wallet'}
              </button>
            </div>
            {!walletAddress && (
              <p className="text-sm text-gray-500">
                Connect your wallet to access all features
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose MilkNet?
            </h2>
            <p className="text-xl text-gray-600">
              Empowering the dairy supply chain with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <feature.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Dairy Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the revolution in dairy supply chain management today.
            </p>
            <Link 
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: Shield,
    title: "Secure & Transparent",
    description: "Blockchain-powered traceability ensures complete transparency and security in the supply chain."
  },
  {
    icon: Zap,
    title: "Efficient Operations",
    description: "Streamline your operations with automated smart contracts and real-time tracking."
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Make informed decisions with advanced analytics and market insights."
  }
]; 