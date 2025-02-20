'use client';
import Sidebar from '@/components/dashboard/Sidebar';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { 
  HomeIcon,
  ShoppingCartIcon,
  ArchiveBoxIcon,
  ChartBarIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const processorNavItems = [
  { 
    name: 'Dashboard', 
    href: '/dashboard/processor', 
    icon: HomeIcon 
  },
  { 
    name: 'Orders', 
    href: '/dashboard/processor/orders', 
    icon: ShoppingCartIcon 
  },
  { 
    name: 'Inventory', 
    href: '/dashboard/processor/inventory', 
    icon: ArchiveBoxIcon 
  },
  { 
    name: 'Reports', 
    href: '/dashboard/processor/reports', 
    icon: ChartBarIcon 
  },
  { 
    name: 'Settings', 
    href: '/dashboard/processor/settings', 
    icon: Cog6ToothIcon 
  },
];

export default function ProcessorDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'processor')) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar navItems={processorNavItems} userType="processor" />
      <main className="lg:pl-72">
        <div className="px-4 py-8 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
} 