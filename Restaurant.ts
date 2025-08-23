// The Client - sets up and coordinates everything
import { Chef } from "./Chef";
import { Waiter } from "./Waiter";
import { PizzaOrder } from "./PizzaOrder";
import { BurgerOrder } from "./BurgerOrder";
import { SaladOrder } from "./SaladOrder";

export class Restaurant {
  private chef: Chef;
  private waiter: Waiter;

  constructor(chefName: string = "Mario", waiterName: string = "Anna") {
    this.chef = new Chef(chefName);
    this.waiter = new Waiter(waiterName);

    console.log(`🏪 Welcome to ${chefName}'s Restaurant!`);
    console.log(`👨‍🍳 Chef: ${chefName}`);
    console.log(`👩‍💼 Waiter: ${waiterName}\n`);
  }

  // Customer orders pizza
  orderPizza(): void {
    console.log("🙋 Customer: I'd like a pizza please!");
    const pizzaOrder = new PizzaOrder(this.chef);
    this.waiter.takeOrder(pizzaOrder);
  }

  // Customer orders burger
  orderBurger(): void {
    console.log("🙋 Customer: I want a burger please!");
    const burgerOrder = new BurgerOrder(this.chef);
    this.waiter.takeOrder(burgerOrder);
  }

  // Customer orders salad
  orderSalad(): void {
    console.log("🙋 Customer: Can I have a salad please?");
    const saladOrder = new SaladOrder(this.chef);
    this.waiter.takeOrder(saladOrder);
  }

  // Customer changes their mind
  cancelLastOrder(): void {
    console.log("😅 Customer: Actually, can you cancel my last order?");
    this.waiter.cancelLastOrder();
  }

  // Show what's been ordered
  showOrderHistory(): void {
    this.waiter.showOrderHistory();
  }

  // Show available menu
  showMenu(): void {
    console.log("\n🍽️  MENU:");
    console.log("   🍕 Pizza");
    console.log("   🍔 Burger");
    console.log("   🥗 Salad");
    console.log();
  }
}
