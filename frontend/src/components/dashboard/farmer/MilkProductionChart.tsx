'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-01', production: 2400 },
  { date: '2024-02', production: 2210 },
  { date: '2024-03', production: 2290 },
  { date: '2024-04', production: 2000 },
  { date: '2024-05', production: 2181 },
  { date: '2024-06', production: 2500 },
  { date: '2024-07', production: 2100 },
];

export default function MilkProductionChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Milk Production Trend</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="production" 
              stroke="#16a34a" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 