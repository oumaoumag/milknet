'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';
import Logo from '@/components/ui/Logo';

export default function Sidebar() {
  const { user, logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname?.startsWith(path);

  const navItems = [
    {
      name: 'Dashboard',
      href: '/dashboard/farmer',
      icon: HomeIcon,
    },
    {
      name: 'Production',
      href: '/dashboard/farmer/production',
      icon: ChartBarIcon,
    },
    {
      name: 'Orders',
      href: '/dashboard/farmer/orders',
      icon: ShoppingCartIcon,
    },
    {
      name: 'Transactions',
      href: '/dashboard/farmer/transactions',
      icon: ClipboardDocumentListIcon,
    },
    {
      name: 'Reports',
      href: '/dashboard/farmer/reports',
      icon: DocumentTextIcon,
    },
    {
      name: 'Settings',
      href: '/dashboard/farmer/settings',
      icon: Cog6ToothIcon,
    },
  ];

  return (
    <div 
      className={`fixed top-0 left-0 h-full z-40 transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-16' : 'w-64'}`}
    >
      <div className="flex h-full flex-col bg-green-800">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-9 bg-green-800 rounded-full p-1 text-white hover:bg-green-700 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRightIcon className="h-4 w-4" />
          ) : (
            <ChevronLeftIcon className="h-4 w-4" />
          )}
        </button>

        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <Logo />
          </div>

          <nav className="mt-8 flex-1 space-y-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors
                  ${isActive(item.href)
                    ? 'bg-green-700 text-white'
                    : 'text-green-100 hover:bg-green-700'}
                `}
              >
                <item.icon
                  className={`mr-3 h-6 w-6 flex-shrink-0 ${
                    isActive(item.href) ? 'text-white' : 'text-green-200'
                  }`}
                  aria-hidden="true"
                />
                <span className={`${isCollapsed ? 'hidden' : 'block'}`}>
                  {item.name}
                </span>
                {isCollapsed && (
                  <div className="absolute left-12 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.name}
                  </div>
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-shrink-0 bg-green-700 p-4">
          <button
            onClick={logout}
            className="group block w-full flex items-center text-green-100 hover:text-white"
          >
            <ArrowLeftOnRectangleIcon className="mr-3 h-5 w-5 text-green-200 group-hover:text-white" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
} 