import * as readline from 'readline';
import { Restaurant } from './Restaurant';

class InteractiveRestaurant {
  private restaurant: Restaurant;
  private rl: readline.Interface;

  constructor() {
    this.restaurant = new Restaurant("Luigi", "Sofia");
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  start(): void {
    console.log("=" .repeat(55));
    console.log("🏪 WELCOME TO LUIGI'S INTERACTIVE RESTAURANT! 🏪");
    console.log("=" .repeat(55));
    console.log("👨‍🍳 Chef Luigi is ready to cook for you!");
    console.log("👩‍💼 Waiter Sofia will take your orders!");
    console.log();
    
    this.showMenu();
    this.showCommands();
    this.promptUser();
  }

  private showMenu(): void {
    console.log("🍽️  TODAY'S MENU:");
    console.log("   1. 🍕 Pizza    - Delicious Italian pizza");
    console.log("   2. 🍔 Burger   - Juicy beef burger");
    console.log("   3. 🥗 Salad    - Fresh garden salad");
    console.log();
  }

  private showCommands(): void {
    console.log("🎮 AVAILABLE COMMANDS:");
    console.log("   1 or pizza   - Order a pizza");
    console.log("   2 or burger  - Order a burger");
    console.log("   3 or salad   - Order a salad");
    console.log("   undo         - Cancel last order");
    console.log("   history      - Show order history");
    console.log("   menu         - Show menu again");
    console.log("   help         - Show commands again");
    console.log("   quit         - Leave the restaurant");
    console.log();
  }

  private promptUser(): void {
    this.rl.question("👤 What would you like to do? ", (input) => {
      this.handleInput(input.trim().toLowerCase());
    });
  }

  private handleInput(input: string): void {
    console.log(); // Add spacing

    try {
      switch (input) {
        case '1':
        case 'pizza':
          this.restaurant.orderPizza();
          break;
        
        case '2':
        case 'burger':
          this.restaurant.orderBurger();
          break;
        
        case '3':
        case 'salad':
          this.restaurant.orderSalad();
          break;
        
        case 'undo':
        case 'cancel':
          this.restaurant.cancelLastOrder();
          break;
        
        case 'history':
        case 'orders':
          this.restaurant.showOrderHistory();
          break;
        
        case 'menu':
          this.showMenu();
          break;
        
        case 'help':
        case 'commands':
          this.showCommands();
          break;
        
        case 'quit':
        case 'exit':
        case 'bye':
          this.quit();
          return;
        
        case '':
          console.log("💭 Please enter a command! Type 'help' to see options.");
          break;
        
        default:
          console.log(`❓ Sorry, I don't understand "${input}". Type 'help' for available commands.`);
          break;
      }
    } catch (error) {
      console.log(`❌ Oops! Something went wrong: ${error}`);
    }

    console.log(); // Add spacing
    this.promptUser(); // Ask for next command
  }

  private quit(): void {
    console.log("👋 Thank you for visiting Luigi's Restaurant!");
    console.log("💫 You experienced the Command Pattern in action:");
    console.log("   ✅ Orders were commands that could be executed");
    console.log("   ✅ Orders could be undone (cancelled)");
    console.log("   ✅ Waiter didn't need to know how to cook");
    console.log("   ✅ Chef didn't need to know about the ordering system");
    console.log();
    console.log("🎓 This demonstrates loose coupling and separation of concerns!");
    console.log("🍝 Arrivederci! Come back anytime! 🍝");
    
    this.rl.close();
  }
}

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n\n👋 Goodbye! Thanks for learning about the Command Pattern!');
  process.exit(0);
});

// Start the interactive restaurant
const interactiveRestaurant = new InteractiveRestaurant();
interactiveRestaurant.start();