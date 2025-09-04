import { Chef } from "./chef";
import { Waiter } from "./waiter";
import { PizzaOrder } from "./pizzaOrder";
import { BurgerOrder } from "./burgerOrder";
import { SaladOrder } from "./saladOrder";
import { handleError } from "../utils/errorHandler";

export class Restaurant {
  private chef: Chef;
  private waiter: Waiter;

  constructor(chefName: string = "Luigi", waiterName: string = "Sofia") {
    try {
      this.chef = new Chef(chefName);
      this.waiter = new Waiter(waiterName);
      console.log(
        `🏪 Restaurant initialized with Chef ${chefName} and Waiter ${waiterName}`
      );
    } catch (error) {
      handleError("Failed to initialize restaurant", error);
      throw error;
    }
  }

  orderPizza(): void {
    try {
      const pizzaOrder = new PizzaOrder(this.chef);
      this.waiter.takeOrder(pizzaOrder);
    } catch (error) {
      handleError("Failed to order pizza", error);
    }
  }

  orderBurger(): void {
    try {
      const burgerOrder = new BurgerOrder(this.chef);
      this.waiter.takeOrder(burgerOrder);
    } catch (error) {
      handleError("Failed to order burger", error);
    }
  }

  orderSalad(): void {
    try {
      const saladOrder = new SaladOrder(this.chef);
      this.waiter.takeOrder(saladOrder);
    } catch (error) {
      handleError("Failed to order salad", error);
    }
  }

  cancelLastOrder(): void {
    try {
      this.waiter.cancelLastOrder();
    } catch (error) {
      handleError("Failed to cancel last order", error);
    }
  }

  showOrderHistory(): void {
    try {
      this.waiter.showOrderHistory();
    } catch (error) {
      handleError("Failed to show order history", error);
    }
  }

  showMenu(): void {
    try {
      console.log("\n🍽️ Menu:");
      console.log("   1. Pizza");
      console.log("   2. Burger");
      console.log("   3. Salad");
    } catch (error) {
      handleError("Failed to show menu", error);
    }
  }
}
