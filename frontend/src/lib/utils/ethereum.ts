import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export async function getEthereumProvider() {
  if (typeof window !== 'undefined' && window.ethereum) {
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      return new ethers.BrowserProvider(window.ethereum);
    } catch (error) {
      console.error('User denied account access');
      throw error;
    }
  }
  
  throw new Error('Please install MetaMask or another Ethereum wallet');
}

export async function getSigner() {
  const provider = await getEthereumProvider();
  return provider.getSigner();
}

export async function getContractInstance(address: string, abi: any) {
  const signer = await getSigner();
  return new ethers.Contract(address, abi, signer);
}

export async function connectWallet(): Promise<string> {
  try {
    const provider = await getEthereumProvider();
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    return address;
  } catch (error) {
    console.error('Error connecting wallet:', error);
    throw error;
  }
} 