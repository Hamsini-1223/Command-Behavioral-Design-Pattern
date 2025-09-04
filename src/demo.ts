import { Restaurant } from "./models/restaurant";
import { handleError } from "./utils/errorHandler";

function runDemo(): void {
  try {
    console.log("Command Pattern Demo");
    console.log("=".repeat(20));

    const restaurant = new Restaurant("Luigi", "Sofia");

    restaurant.showMenu();
    restaurant.orderPizza();
    restaurant.orderBurger();
    restaurant.showOrderHistory();
    restaurant.cancelLastOrder();
    restaurant.showOrderHistory();

    console.log("\nDemo completed successfully");
  } catch (error) {
    handleError("Demo failed", error);
  }
}

runDemo();
