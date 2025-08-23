// Non-interactive demo showing Command Pattern in action
import { Restaurant } from "./Restaurant";

function runDemo() {
  console.log("=".repeat(50));
  console.log("🎯 COMMAND PATTERN DEMO - RESTAURANT EXAMPLE");
  console.log("=".repeat(50));

  // Create our restaurant
  const restaurant = new Restaurant("Luigi", "Sofia");

  // Show the menu
  restaurant.showMenu();

  // Customer makes some orders
  restaurant.orderPizza();
  console.log();

  restaurant.orderBurger();
  console.log();

  restaurant.orderSalad();
  console.log();

  // Show what's been ordered so far
  restaurant.showOrderHistory();

  // Customer changes their mind about the last order
  console.log();
  restaurant.cancelLastOrder();

  // Show updated history
  restaurant.showOrderHistory();

  // Demonstrate the pattern benefits
  console.log();
  console.log("=".repeat(50));
  console.log("✨ COMMAND PATTERN BENEFITS DEMONSTRATED:");
  console.log("=".repeat(50));
  console.log("1. 🔗 LOOSE COUPLING:");
  console.log("   - Customer doesn't talk directly to Chef");
  console.log("   - Waiter doesn't need to know HOW to cook");
  console.log();
  console.log("2. 🔄 UNDO FUNCTIONALITY:");
  console.log("   - Orders can be cancelled (undo command)");
  console.log("   - Command history is maintained");
  console.log();
  console.log("3. 🎯 SINGLE RESPONSIBILITY:");
  console.log("   - Chef: only cooks food");
  console.log("   - Waiter: only handles orders");
  console.log("   - Commands: only represent specific orders");
  console.log();
  console.log("4. 📈 EASY TO EXTEND:");
  console.log("   - Adding new dishes = just create new Command class");
  console.log("   - No need to modify existing code");
  console.log();
}

// Run the demo
runDemo();
