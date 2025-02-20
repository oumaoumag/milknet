'use client';
import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  ShoppingCartIcon, 
  ArchiveBoxIcon, 
  CurrencyDollarIcon,
  BeakerIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

const supplyData = [
  { date: '2024-01', received: 12000, processed: 11500 },
  { date: '2024-02', received: 13500, processed: 13000 },
  { date: '2024-03', received: 11800, processed: 11500 },
  { date: '2024-04', received: 14200, processed: 13800 },
  { date: '2024-05', received: 13800, processed: 13500 },
  { date: '2024-06', received: 15000, processed: 14500 },
];

const recentDeliveries = [
  { id: 'DEL001', farmer: 'John Dairy Farm', quantity: '500L', status: 'received', time: '2 hours ago' },
  { id: 'DEL002', farmer: 'Green Meadows', quantity: '750L', status: 'in transit', time: '30 mins ago' },
  { id: 'DEL003', farmer: 'Sunshine Farms', quantity: '1000L', status: 'scheduled', time: 'Today 2PM' },
];

export default function ProcessorDashboard() {
  const [timeframe, setTimeframe] = useState('daily');

  return (
    <div className="space-y-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
            Procurement Dashboard
          </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
          >
            <option value="daily">Today's View</option>
            <option value="weekly">This Week</option>
            <option value="monthly">This Month</option>
          </select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ShoppingCartIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500">Pending Orders</dt>
                  <dd className="text-lg font-medium text-gray-900">8</dd>
                  <dd className="text-sm text-gray-600">3,500L total volume</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ArchiveBoxIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500">Current Inventory</dt>
                  <dd className="text-lg font-medium text-gray-900">5,200L</dd>
                  <dd className="text-sm text-gray-600">72% capacity</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TruckIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500">Expected Deliveries</dt>
                  <dd className="text-lg font-medium text-gray-900">5</dd>
                  <dd className="text-sm text-gray-600">Today</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CurrencyDollarIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500">Today's Procurement</dt>
                  <dd className="text-lg font-medium text-gray-900">₱125,000</dd>
                  <dd className="text-sm text-gray-600">2,500L @ ₱50/L</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Incoming Deliveries */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent & Upcoming Deliveries</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Delivery ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Farmer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentDeliveries.map((delivery) => (
                <tr key={delivery.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{delivery.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{delivery.farmer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{delivery.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${delivery.status === 'received' ? 'bg-green-100 text-green-800' : 
                        delivery.status === 'in transit' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-blue-100 text-blue-800'}`}>
                      {delivery.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{delivery.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Supply Trends */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Supply Overview</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={supplyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="received" fill="#059669" name="Milk Received (L)" />
              <Bar dataKey="processed" fill="#10B981" name="Milk Processed (L)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 