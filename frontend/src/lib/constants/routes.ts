export const ROUTES = {
  FARMER: {
    base: '/dashboard/farmer',
    livestock: '/dashboard/farmer/livestock',
    analytics: '/dashboard/farmer/analytics',
    transactions: '/dashboard/farmer/transactions',
  },
  CONSUMER: {
    base: '/dashboard/consumer',
    orders: '/dashboard/consumer/orders',
    tracking: '/dashboard/consumer/tracking',
    feedback: '/dashboard/consumer/feedback',
  },
  AUTH: {
    login: '/login',
    register: '/register',
    forgot: '/forgot-password',
  },
} as const 