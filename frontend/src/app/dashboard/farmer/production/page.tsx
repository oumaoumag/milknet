'use client';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const productionData = [
  { date: '2024-01', amount: 1200 },
  { date: '2024-02', amount: 1400 },
  { date: '2024-03', amount: 1300 },
  { date: '2024-04', amount: 1600 },
  { date: '2024-05', amount: 1500 },
];

export default function ProductionPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Production Overview</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Add Production
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Production Trends</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={productionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#16a34a" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 