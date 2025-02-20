'use client';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, FileText, Coffee } from 'lucide-react';

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-lg text-gray-600">
            We're here to help you with any questions or issues you may have
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <HelpCircle className="w-8 h-8 text-green-600 mr-4" />
                <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b pb-4">
                    <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Support Channels */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <MessageCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Chat with our support team in real-time
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                Start Chat
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <FileText className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Submit Ticket</h3>
              <p className="text-gray-600 mb-4">
                Create a support ticket for detailed assistance
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                Create Ticket
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <Coffee className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600 mb-4">
                Join our community forum for discussions
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                Join Forum
              </button>
            </div>
          </motion.section>

          {/* Support Hours */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Support Hours</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-4">Technical Support</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">Emergency Support</h3>
                  <p className="text-gray-600">Available 24/7 for critical issues</p>
                  <p className="text-gray-600">Contact: +254 700 000000</p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}

const faqs = [
  {
    question: "How do I get started with MilkNet?",
    answer: "To get started, create an account, complete verification, and connect your digital wallet. Our quick start guide provides detailed steps."
  },
  {
    question: "What blockchain network does MilkNet use?",
    answer: "MilkNet operates on the Ethereum network, specifically the Sepolia testnet for testing and the mainnet for production."
  },
  {
    question: "How are transactions verified?",
    answer: "Transactions are verified through smart contracts on the blockchain, ensuring transparency and immutability of all records."
  },
  {
    question: "What types of wallets are supported?",
    answer: "We support MetaMask, WalletConnect, and other Ethereum-compatible wallets for connecting to the platform."
  }
]; 