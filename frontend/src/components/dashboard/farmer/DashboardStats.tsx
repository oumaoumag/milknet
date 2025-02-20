'use client';

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid';
import { CurrencyDollarIcon, BeakerIcon, ShoppingCartIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    name: 'Total Revenue',
    value: '₱45,231.89',
    change: '+20.1%',
    changeType: 'positive',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Production Output',
    value: '2,345 L',
    change: '+15.5%',
    changeType: 'positive',
    icon: BeakerIcon,
  },
  {
    name: 'Active Orders',
    value: '12',
    change: '-3.2%',
    changeType: 'negative',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Quality Score',
    value: '98.5%',
    change: '+4.1%',
    changeType: 'positive',
    icon: ChartBarIcon,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.name}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex flex-row items-center justify-between pb-2">
            <div className="rounded-full bg-green-100 p-2">
              <item.icon className="h-5 w-5 text-green-600" aria-hidden="true" />
            </div>
          </div>
          <div className="pt-2">
            <p className="text-sm font-medium text-gray-600">
              {item.name}
            </p>
            <div className="text-2xl font-bold text-gray-900">{item.value}</div>
            <p className={`mt-2 flex items-center text-sm ${
              item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {item.changeType === 'positive' ? (
                <ArrowUpIcon className="mr-1 h-4 w-4" />
              ) : (
                <ArrowDownIcon className="mr-1 h-4 w-4" />
              )}
              {item.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 