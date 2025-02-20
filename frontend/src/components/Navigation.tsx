'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  FileText, 
  HelpCircle, 
  Mail,
  BarChart3,
  Box,
  Truck,
  ShoppingCart,
  Settings
} from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();

  // Define routes based on user role and authentication status
  const getNavLinks = () => {
    const publicLinks = [
      { href: '/', label: 'Home', icon: Home },
      { href: '/about', label: 'About', icon: FileText },
      { href: '/documentation', label: 'Documentation', icon: FileText },
      { href: '/contact', label: 'Contact', icon: Mail },
      { href: '/support', label: 'Support', icon: HelpCircle },
    ];

    if (!isAuthenticated) {
      return publicLinks;
    }

    const roleSpecificLinks = {
      farmer: [
        { href: '/dashboard/farmer', label: 'Dashboard', icon: BarChart3 },
        { href: '/dashboard/farmer/products', label: 'My Products', icon: Box },
        { href: '/dashboard/farmer/analytics', label: 'Analytics', icon: BarChart3 },
      ],
      distributor: [
        { href: '/dashboard/distributor', label: 'Dashboard', icon: BarChart3 },
        { href: '/dashboard/distributor/logistics', label: 'Logistics', icon: Truck },
        { href: '/dashboard/distributor/inventory', label: 'Inventory', icon: Box },
      ],
      retailer: [
        { href: '/dashboard/retailer', label: 'Dashboard', icon: BarChart3 },
        { href: '/dashboard/retailer/orders', label: 'Orders', icon: ShoppingCart },
        { href: '/dashboard/retailer/inventory', label: 'Inventory', icon: Box },
      ],
      consumer: [
        { href: '/dashboard/consumer', label: 'Dashboard', icon: BarChart3 },
        { href: '/dashboard/consumer/orders', label: 'My Orders', icon: ShoppingCart },
        { href: '/dashboard/consumer/tracking', label: 'Track Orders', icon: Truck },
      ],
    };

    return [
      ...roleSpecificLinks[user?.role as keyof typeof roleSpecificLinks] || [],
      { href: '/profile', label: 'Profile', icon: User },
      { href: '/settings', label: 'Settings', icon: Settings },
    ];
  };

  const navLinks = getNavLinks();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-green-600">MilkNet</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                  ${pathname === link.href
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
              >
                <link.icon className="w-4 h-4 mr-2" />
                {link.label}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Logout
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-50"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium
                  ${pathname === link.href
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="w-4 h-4 mr-2" />
                {link.label}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Logout
              </button>
            ) : (
              <div className="space-y-2 px-3">
                <Link
                  href="/login"
                  className="block px-4 py-2 text-sm font-medium text-center text-green-600 border border-green-600 rounded-md hover:bg-green-50"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-4 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-md hover:bg-green-700"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
} 