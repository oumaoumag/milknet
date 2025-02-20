import { getContractInstance } from '../utils/ethereum';
import { MILKNET_ABI } from './abi';
import { MILKNET_ADDRESS } from '../constants/contracts';

export class MilkNetContract {
  private contract: any;

  async init() {
    this.contract = await getContractInstance(MILKNET_ADDRESS, MILKNET_ABI);
  }

  async createOrder(productId: string, quantity: number, price: number) {
    if (!this.contract) await this.init();
    try {
      const tx = await this.contract.createOrder(productId, quantity, price);
      await tx.wait();
      return tx.hash;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }

  async getOrder(orderId: string) {
    if (!this.contract) await this.init();
    try {
      const order = await this.contract.getOrder(orderId);
      return order;
    } catch (error) {
      console.error('Error fetching order:', error);
      throw error;
    }
  }

  async updateOrderStatus(orderId: string, status: string) {
    if (!this.contract) await this.init();
    try {
      const tx = await this.contract.updateOrderStatus(orderId, status);
      await tx.wait();
      return tx.hash;
    } catch (error) {
      console.error('Error updating order status:', error);
      throw error;
    }
  }
} 