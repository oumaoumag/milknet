'use client';
import { useState } from 'react';

export default function AddMilkProduction() {
  const [formData, setFormData] = useState({
    quantity: '',
    date: new Date().toISOString().split('T')[0],
    quality: 'A',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Add Production</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity (Liters)
          </label>
          <input
            type="number"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quality Grade
          </label>
          <select
            value={formData.quality}
            onChange={(e) => setFormData({ ...formData, quality: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          >
            <option value="A">Grade A</option>
            <option value="B">Grade B</option>
            <option value="C">Grade C</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Add Production
        </button>
      </form>
    </div>
  );
} 