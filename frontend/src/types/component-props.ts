export type DashboardLayoutProps = {
  children: React.ReactNode;
  sidebarItems: Array<{
    label: string;
    icon: React.ComponentType;
    href: string;
  }>;
};

export type AuthFormProps = {
  onSubmit: (values: { email: string; password: string }) => void;
  variant: 'login' | 'register';
}; 