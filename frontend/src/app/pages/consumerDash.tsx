import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Package, 
  Truck, 
  Calendar, 
  Bell, 
  Search, 
  ShoppingCart, 
  Clock, 
  MapPin,
  Home,
  History,
  Store,
  Settings,
  LogOut,
  ChevronLeft,
  Menu
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ConsumerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const orderData = [
    { month: 'Jan', orders: 4 },
    { month: 'Feb', orders: 6 },
    { month: 'Mar', orders: 5 },
    { month: 'Apr', orders: 8 },
    { month: 'May', orders: 7 },
    { month: 'Jun', orders: 9 }
  ];

  const recentOrders = [
    { id: '1', product: 'Fresh Milk', quantity: '2L', status: 'In Transit', eta: '2 hours' },
    { id: '2', product: 'Yogurt Pack', quantity: '500g', status: 'Delivered', eta: '-' },
    { id: '3', product: 'Cheese', quantity: '250g', status: 'Processing', eta: '1 day' }
  ];

  const navItems = [
    { icon: Home, label: 'Dashboard', id: 'overview' },
    { icon: History, label: 'Order History', id: 'history' },
    { icon: Store, label: 'Marketplace', id: 'marketplace' },
    { icon: MapPin, label: 'Track Orders', id: 'tracking' },
    { icon: Settings, label: 'Settings', id: 'settings' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${
        isSidebarCollapsed ? 'w-16' : 'w-64'
      }`}>
        <div className="p-4 border-b flex items-center justify-between">
          {!isSidebarCollapsed && <h2 className="font-bold text-xl text-green-600">MilkNet</h2>}
          <button 
            onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-100"
          >
            {isSidebarCollapsed ? <Menu className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                activeTab === item.id 
                  ? 'bg-green-50 text-green-600' 
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {!isSidebarCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 w-full px-4">
          <button className={`w-full flex items-center gap-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors ${
            isSidebarCollapsed ? 'justify-center' : ''
          }`}>
            <LogOut className="w-5 h-5" />
            {!isSidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Consumer Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full bg-white shadow hover:bg-gray-50">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Orders</CardTitle>
                <ShoppingCart className="w-4 h-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">39</div>
                <p className="text-xs text-green-500">+12% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Active Orders</CardTitle>
                <Clock className="w-4 h-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-blue-500">2 in transit</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Favorite Farms</CardTitle>
                <MapPin className="w-4 h-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-purple-500">3 new products available</p>
              </CardContent>
            </Card>
          </div>

          {/* Order History Chart */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={orderData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="orders" stroke="#22c55e" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {recentOrders.map((order) => (
                  <div key={order.id} className="py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Package className="w-8 h-8 text-gray-400" />
                      <div>
                        <h3 className="font-medium">{order.product}</h3>
                        <p className="text-sm text-gray-500">Quantity: {order.quantity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{order.status}</div>
                      <p className="text-sm text-gray-500">ETA: {order.eta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;