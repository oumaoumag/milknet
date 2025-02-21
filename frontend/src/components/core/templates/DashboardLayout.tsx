import { type DashboardLayoutProps } from '@/types/component-props';

export const DashboardLayout = ({ children, sidebarItems }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r">{/* Sidebar implementation */}</aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}; 