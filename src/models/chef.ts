export class Chef {
  private name: string;

  constructor(name: string) {
    if (!name?.trim()) {
      throw new Error("Chef name is required");
    }
    this.name = name.trim();
  }

  cookPizza(): void {
    try {
      console.log(`🍕 ${this.name} is making a pizza`);
    } catch (error) {
      console.error(`Error cooking pizza: ${error}`);
    }
  }

  cookBurger(): void {
    try {
      console.log(`🍔 ${this.name} is grilling a burger`);
    } catch (error) {
      console.error(`Error cooking burger: ${error}`);
    }
  }

  cookSalad(): void {
    try {
      console.log(`🥗 ${this.name} is preparing a salad`);
    } catch (error) {
      console.error(`Error preparing salad: ${error}`);
    }
  }

  cancelPizza(): void {
    try {
      console.log(`❌ ${this.name} cancelled pizza order`);
    } catch (error) {
      console.error(`Error cancelling pizza: ${error}`);
    }
  }

  cancelBurger(): void {
    try {
      console.log(`❌ ${this.name} cancelled burger order`);
    } catch (error) {
      console.error(`Error cancelling burger: ${error}`);
    }
  }

  cancelSalad(): void {
    try {
      console.log(`❌ ${this.name} cancelled salad order`);
    } catch (error) {
      console.error(`Error cancelling salad: ${error}`);
    }
  }

  getName(): string {
    return this.name;
  }
}
