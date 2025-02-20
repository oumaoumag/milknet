'use client';
import { DashboardHeader } from '../../../components/dashboard/header';
import { DashboardStats } from '../../../components/dashboard/stats';
import { OrderChart } from '../../../components/dashboard/order-chart';
import { RecentOrders } from '../../../components/dashboard/recent-orders';
import { orderData } from '../../../lib/constants/mock-data';

export default function ConsumerDashboard() {
  return (
    <>
      <DashboardHeader title="Consumer Dashboard" />
      <DashboardStats />
      
      {/* Order History Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Order History</h3>
        <div className="h-[300px]">
          <OrderChart data={orderData} />
        </div>
      </div>
      
      {/* Recent Orders */}
      <RecentOrders />
    </>
  );
} 