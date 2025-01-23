import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-300 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300 transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-blue-300 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>Blockchain Technology</li>
              <li>Supply Chain Tracking</li>
              <li>Smart Contracts</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: info@milknet.com</li>
              <li>Phone: +1 (234) 567-8900</li>
              <li>Address: Tech Hub, Innovation Street</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:scale-110 transition-transform">
                <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Image src="/github.svg" alt="GitHub" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} MilkNet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}