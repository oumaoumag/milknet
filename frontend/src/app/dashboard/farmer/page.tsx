'use client';
import { useAuth } from '@/contexts/AuthContext';
import DashboardStats from '@/components/dashboard/farmer/DashboardStats';
import MilkProductionChart from '@/components/dashboard/farmer/MilkProductionChart';
import RecentTransactions from '@/components/dashboard/farmer/RecentTransactions';
import QualityMetrics from '@/components/dashboard/farmer/QualityMetrics';
import AddMilkProduction from '@/components/dashboard/farmer/AddMilkProduction';

export default function FarmerDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-900">
        Welcome back, {user?.name}
      </h1>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MilkProductionChart />
        <QualityMetrics />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <RecentTransactions />
        </div>
        <div>
          <AddMilkProduction />
        </div>
      </div>
    </div>
  );
} 