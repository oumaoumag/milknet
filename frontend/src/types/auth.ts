export type UserType = 'consumer' | 'farmer' | null;

export interface AuthState {
  isAuthenticated: boolean;
  userType: UserType;
  user: {
    email: string;
    role: string;
  } | null;
} 