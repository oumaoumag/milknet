'use client';
import { Bell, Search } from 'lucide-react';

interface DashboardHeaderProps {
  title: string;
  notificationCount?: number;
  onSearch?: (query: string) => void;
}

export function DashboardHeader({ 
  title, 
  notificationCount = 0,
  onSearch 
}: DashboardHeaderProps) {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <div className="flex items-center gap-4">
        <button 
          className="p-2 relative rounded-full bg-white shadow hover:bg-gray-50"
          aria-label="Notifications"
        >
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notificationCount}
            </span>
          )}
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-64 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => onSearch?.(e.target.value)}
            aria-label="Search products"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5 pointer-events-none" />
        </div>
      </div>
    </header>
  );
}