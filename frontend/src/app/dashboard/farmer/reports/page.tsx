'use client';
import { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const monthlyData = [
  { month: 'Jan', revenue: 4500, production: 2400 },
  { month: 'Feb', revenue: 4200, production: 2210 },
  { month: 'Mar', revenue: 4800, production: 2290 },
  { month: 'Apr', revenue: 4000, production: 2000 },
  { month: 'May', revenue: 4900, production: 2181 },
  { month: 'Jun', revenue: 5200, production: 2500 },
];

export default function ReportsPage() {
  const [reportType, setReportType] = useState('monthly');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        >
          <option value="monthly">Monthly Report</option>
          <option value="quarterly">Quarterly Report</option>
          <option value="yearly">Yearly Report</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Revenue Overview</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#16a34a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Production Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Production</span>
              <span className="font-semibold">13,581 L</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Quality Grade</span>
              <span className="font-semibold">A</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Revenue</span>
              <span className="font-semibold">₱27,600</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Growth Rate</span>
              <span className="text-green-600 font-semibold">+15.3%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 