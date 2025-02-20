'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-500 via-green-700 to-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">MilkNet</h3>
            <p className="text-sm text-gray-200">
              Revolutionizing the dairy industry through blockchain technology and supply chain innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/milknet" className="hover:text-green-300">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com/milknet" className="hover:text-green-300">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com/company/milknet" className="hover:text-green-300">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-green-300">About Us</Link></li>
              <li><Link href="/features" className="hover:text-green-300">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-green-300">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-green-300">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-green-300">Blog</Link></li>
              <li><Link href="/documentation" className="hover:text-green-300">Documentation</Link></li>
              <li><Link href="/support" className="hover:text-green-300">Support</Link></li>
              <li><Link href="/faq" className="hover:text-green-300">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-green-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MilkNet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 