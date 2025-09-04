import * as readline from "readline";
import { Restaurant } from "./models/restaurant";
import {
  handleError,
  validateInput,
  isValidCommand,
} from "./utils/errorHandler";

class InteractiveRestaurant {
  private restaurant: Restaurant;
  private rl: readline.Interface;

  constructor() {
    try {
      this.restaurant = new Restaurant("Luigi", "Sofia");
      this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
    } catch (error) {
      handleError("Failed to initialize interactive restaurant", error);
      process.exit(1);
    }
  }

  start(): void {
    console.log("=".repeat(40));
    console.log("🏪 Luigi's Restaurant");
    console.log("=".repeat(40));
    this.showMenu();
    this.promptUser();
  }

  private showMenu(): void {
    console.log(
      "\nCommands: pizza, burger, salad, undo, history, menu, quit\n"
    );
  }

  private promptUser(): void {
    this.rl.question("> ", (input) => {
      this.handleInput(input);
    });
  }

  private handleInput(input: string): void {
    try {
      const command = validateInput(input);

      if (!command) {
        console.log("Please enter a command");
        this.promptUser();
        return;
      }

      if (!isValidCommand(command)) {
        console.log(`Invalid command: ${command}`);
        this.promptUser();
        return;
      }

      switch (command) {
        case "pizza":
          this.restaurant.orderPizza();
          break;
        case "burger":
          this.restaurant.orderBurger();
          break;
        case "salad":
          this.restaurant.orderSalad();
          break;
        case "undo":
          this.restaurant.cancelLastOrder();
          break;
        case "history":
          this.restaurant.showOrderHistory();
          break;
        case "menu":
          this.restaurant.showMenu();
          break;
        case "quit":
          this.quit();
          return;
      }

      this.promptUser();
    } catch (error) {
      handleError("Failed to handle input", error);
      this.promptUser();
    }
  }

  private quit(): void {
    console.log("\nThank you for visiting Luigi's Restaurant!");
    this.rl.close();
  }
}

process.on("SIGINT", () => {
  console.log("\n\nGoodbye!");
  process.exit(0);
});

const app = new InteractiveRestaurant();
app.start();
