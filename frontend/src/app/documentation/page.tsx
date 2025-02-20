'use client';
import { motion } from 'framer-motion';
import { Book, Code, Server, Shield } from 'lucide-react';

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
          <p className="text-lg text-gray-600">
            Comprehensive guides and documentation for the MilkNet platform
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Quick Start Guide */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Book className="w-8 h-8 text-green-600 mr-4" />
                <h2 className="text-2xl font-semibold">Quick Start Guide</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Getting Started</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Create an account on MilkNet</li>
                  <li>Complete your profile verification</li>
                  <li>Connect your digital wallet</li>
                  <li>Explore the dashboard features</li>
                </ol>
              </div>
            </div>
          </motion.section>

          {/* API Documentation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Code className="w-8 h-8 text-green-600 mr-4" />
                <h2 className="text-2xl font-semibold">API Reference</h2>
              </div>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium mb-2">Authentication</h3>
                  <pre className="bg-gray-100 p-4 rounded-md">
                    <code>POST /api/auth/login</code>
                  </pre>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium mb-2">Products</h3>
                  <pre className="bg-gray-100 p-4 rounded-md">
                    <code>GET /api/products</code>
                  </pre>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Orders</h3>
                  <pre className="bg-gray-100 p-4 rounded-md">
                    <code>POST /api/orders</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Smart Contracts */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Server className="w-8 h-8 text-green-600 mr-4" />
                <h2 className="text-2xl font-semibold">Smart Contracts</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Contract Addresses</h3>
                <div className="space-y-2">
                  <p><strong>MilkNet Core:</strong> 0x...</p>
                  <p><strong>Product Registry:</strong> 0x...</p>
                  <p><strong>Supply Chain:</strong> 0x...</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Security */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-green-600 mr-4" />
                <h2 className="text-2xl font-semibold">Security</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Best Practices</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Always keep your private keys secure</li>
                  <li>Enable two-factor authentication</li>
                  <li>Regularly update your password</li>
                  <li>Monitor your account activity</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
} 