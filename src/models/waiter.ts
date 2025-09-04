import { Command } from "./command";
import { handleError } from "../utils/errorHandler";

export class Waiter {
  private name: string;
  private orderHistory: Command[] = [];

  constructor(name: string) {
    if (!name?.trim()) {
      throw new Error("Waiter name is required");
    }
    this.name = name.trim();
  }

  takeOrder(command: Command): void {
    try {
      if (!command) {
        throw new Error("Command is required");
      }

      console.log(`📝 ${this.name}: Taking ${command.getDescription()}`);
      command.execute();
      this.orderHistory.push(command);
    } catch (error) {
      handleError("Failed to take order", error);
    }
  }

  cancelLastOrder(): void {
    try {
      if (this.orderHistory.length === 0) {
        console.log(`🤷 ${this.name}: No orders to cancel`);
        return;
      }

      const lastOrder = this.orderHistory.pop();
      if (lastOrder) {
        console.log(
          `🔄 ${this.name}: Cancelling ${lastOrder.getDescription()}`
        );
        lastOrder.undo();
      }
    } catch (error) {
      handleError("Failed to cancel last order", error);
    }
  }

  showOrderHistory(): void {
    try {
      console.log(`\n📋 ${this.name}'s Order History:`);
      if (this.orderHistory.length === 0) {
        console.log("   No orders yet");
      } else {
        this.orderHistory.forEach((order, index) => {
          console.log(`   ${index + 1}. ${order.getDescription()}`);
        });
      }
    } catch (error) {
      handleError("Failed to show order history", error);
    }
  }

  getName(): string {
    return this.name;
  }
}
