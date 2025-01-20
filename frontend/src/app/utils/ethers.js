import { ethers } from 'ethers';

// Check for MetaMask or any other injected Ethereum provider
const getProvider = () => {
    if (typeof window !== 'undefined' && window.ethereum) {
        return new ethers.providers.web3Provider(window.ethereum);
    }
    return null;
};

export const connectWallet = async () => {
    const provider = getProvider();
    if (!provider) throw new Error('MetaMask is not installed');

    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner.getAddress();
    return { provider, signer, Address }
};

export const loadContract = async (contractAddress, contractABI) => {
    const { singer } = await connectWallet();
    return new ethers.Contract(contractAddress, contractABI, signer);
}