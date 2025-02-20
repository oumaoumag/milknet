'use client';
import { BlockchainProvider } from './blockchain-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BlockchainProvider>
      {children}
    </BlockchainProvider>
  );
} 