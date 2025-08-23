// The Receiver - does the actual work (cooking)
export class Chef {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Cooking methods
  cookPizza(): void {
    console.log(`🍕 ${this.name} is making a delicious pizza!`);
  }

  cookBurger(): void {
    console.log(`🍔 ${this.name} is grilling a juicy burger!`);
  }

  cookSalad(): void {
    console.log(`🥗 ${this.name} is preparing a fresh salad!`);
  }

  // Cancel methods (for undo functionality)
  cancelPizza(): void {
    console.log(`❌ ${this.name} stopped making pizza and discarded it`);
  }

  cancelBurger(): void {
    console.log(`❌ ${this.name} stopped grilling burger and discarded it`);
  }

  cancelSalad(): void {
    console.log(`❌ ${this.name} stopped preparing salad and discarded it`);
  }

  getName(): string {
    return this.name;
  }
}
