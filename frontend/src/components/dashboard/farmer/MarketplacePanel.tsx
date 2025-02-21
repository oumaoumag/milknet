'use client';
import ActiveListings from '@/components/dashboard/farmer/ActiveListings';
import PendingOrders from '@/components/dashboard/farmer/PendingOrders';

export default function MarketplacePanel() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Marketplace</h2>
      <div className="space-y-6">
        <ActiveListings />
        <PendingOrders />
        <MarketTrends />
      </div>
    </div>
  );
} 