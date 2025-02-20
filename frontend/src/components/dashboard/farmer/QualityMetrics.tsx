'use client';

const metrics = [
  { name: 'Fat Content', value: '3.8%', target: '3.5%', status: 'above' },
  { name: 'Protein', value: '3.2%', target: '3.3%', status: 'below' },
  { name: 'Bacteria Count', value: '80,000', target: '100,000', status: 'good' },
  { name: 'Somatic Cell Count', value: '150,000', target: '200,000', status: 'good' },
];

export default function QualityMetrics() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Quality Metrics</h3>
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{metric.name}</p>
              <p className="text-lg font-semibold text-gray-900">{metric.value}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Target: {metric.target}</p>
              <p className={`text-sm font-medium ${
                metric.status === 'above' ? 'text-green-600' :
                metric.status === 'below' ? 'text-red-600' :
                'text-green-600'
              }`}>
                {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 