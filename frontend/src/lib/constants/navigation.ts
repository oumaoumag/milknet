import { Home, History, Store, MapPin, Settings } from 'lucide-react';
import { ROUTES } from './routes';

export const navItems = [
  { icon: Home, label: 'Dashboard', id: 'overview', path: ROUTES.CONSUMER.base },
  { icon: History, label: 'Order History', id: 'history', path: ROUTES.CONSUMER.orders },
  { icon: Store, label: 'Marketplace', id: 'marketplace', path: '/marketplace' },
  { icon: MapPin, label: 'Track Orders', id: 'tracking', path: ROUTES.CONSUMER.tracking },
  { icon: Settings, label: 'Settings', id: 'settings', path: '/settings' }
]; 