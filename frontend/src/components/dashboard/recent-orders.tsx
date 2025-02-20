'use client';
import { recentOrders } from '../../lib/constants/mock-data';

export function RecentOrders() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
      <div className="space-y-4">
        {recentOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium">{order.product}</h4>
              <p className="text-sm text-gray-500">Quantity: {order.quantity}</p>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600">
                {order.status}
              </span>
              <p className="text-sm text-gray-500 mt-1">ETA: {order.eta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 