export const MILKNET_ADDRESS = process.env.NEXT_PUBLIC_MILKNET_CONTRACT_ADDRESS || '';

export const SUPPORTED_CHAINS = {
  SEPOLIA: {
    chainId: '0xaa36a7',
    chainName: 'Sepolia Testnet',
    nativeCurrency: {
      name: 'Sepolia Ether',
      symbol: 'SEP',
      decimals: 18,
    },
    rpcUrls: ['https://sepolia.infura.io/v3/'],
    blockExplorerUrls: ['https://sepolia.etherscan.io'],
  },
  // Add more networks as needed
};

export const DEFAULT_CHAIN = SUPPORTED_CHAINS.SEPOLIA; 