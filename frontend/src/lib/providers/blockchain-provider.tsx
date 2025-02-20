'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { connectWallet } from '../utils/ethereum';
import { DEFAULT_CHAIN } from '../constants/contracts';

interface BlockchainContextType {
  account: string | null;
  isConnecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  chainId: string | null;
}

const BlockchainContext = createContext<BlockchainContextType>({
  account: null,
  isConnecting: false,
  connect: async () => {},
  disconnect: () => {},
  chainId: null,
});

export function BlockchainProvider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [chainId, setChainId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setAccount(accounts[0] || null);
      });

      window.ethereum.on('chainChanged', (newChainId: string) => {
        setChainId(newChainId);
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners();
      }
    };
  }, []);

  const connect = async () => {
    setIsConnecting(true);
    try {
      const address = await connectWallet();
      setAccount(address);

      // Check and switch network if needed
      if (window.ethereum) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: DEFAULT_CHAIN.chainId }],
          });
        } catch (error: any) {
          if (error.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [DEFAULT_CHAIN],
            });
          }
        }
      }
    } catch (error) {
      console.error('Connection error:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = () => {
    setAccount(null);
  };

  return (
    <BlockchainContext.Provider
      value={{
        account,
        isConnecting,
        connect,
        disconnect,
        chainId,
      }}
    >
      {children}
    </BlockchainContext.Provider>
  );
}

export const useBlockchain = () => useContext(BlockchainContext); 