'use client';
import { useState } from 'react';
import { LogOut, Menu, ChevronLeft } from 'lucide-react';
import { navItems } from '../../lib/constants/navigation';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${
        isSidebarCollapsed ? 'w-16' : 'w-64'
      }`}>
        <div className="p-4 border-b flex items-center justify-between">
          {!isSidebarCollapsed && <h2 className="font-bold text-xl text-green-600">MilkNet</h2>}
          <button 
            onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-100"
          >
            {isSidebarCollapsed ? <Menu className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`/dashboard/${item.id}`}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                activeTab === item.id 
                  ? 'bg-green-50 text-green-600' 
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {!isSidebarCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 w-full px-4">
          <button className={`w-full flex items-center gap-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors ${
            isSidebarCollapsed ? 'justify-center' : ''
          }`}>
            <LogOut className="w-5 h-5" />
            {!isSidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
} 