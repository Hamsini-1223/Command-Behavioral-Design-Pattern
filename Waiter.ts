// The Invoker - takes orders and executes them
import { Command } from './Command';

export class Waiter {
  private name: string;
  private orderHistory: Command[] = [];

  constructor(name: string) {
    this.name = name;
  }

  // Take an order and execute it immediately
  takeOrder(command: Command): void {
    console.log(`📝 ${this.name}: I'll take your ${command.getDescription()}`);
    
    // Execute the command
    command.execute();
    
    // Store it in history for possible undo
    this.orderHistory.push(command);
  }

  // Cancel the last order (undo functionality)
  cancelLastOrder(): void {
    if (this.orderHistory.length === 0) {
      console.log(`🤷 ${this.name}: Sorry, no orders to cancel!`);
      return;
    }

    const lastOrder = this.orderHistory.pop();
    if (lastOrder) {
      console.log(`🔄 ${this.name}: Let me cancel that ${lastOrder.getDescription()}`);
      lastOrder.undo();
    }
  }

  // Show all orders taken
  showOrderHistory(): void {
    console.log(`\n📋 ${this.name}'s Order History:`);
    if (this.orderHistory.length === 0) {
      console.log("   No orders yet!");
    } else {
      this.orderHistory.forEach((order, index) => {
        console.log(`   ${index + 1}. ${order.getDescription()}`);
      });
    }
  }

  getName(): string {
    return this.name;
  }
}
