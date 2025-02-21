'use client';
import LivestockAlerts from '@/components/dashboard/farmer/LivestockAlerts';
import ProductionSummary from '@/components/dashboard/farmer/ProductionSummary';

export default function OperationalPanel() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Operations</h2>
      <div className="space-y-6">
        <LivestockAlerts />
        <ProductionSummary />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <IoTMetrics />
          <QualityAnalytics />
        </div>
      </div>
    </div>
  );
} 