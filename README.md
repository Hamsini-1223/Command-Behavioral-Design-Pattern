# Command Pattern Restaurant

A TypeScript implementation of the Command behavioral design pattern using a restaurant ordering system analogy.

## Overview

This project demonstrates the Command design pattern through an interactive console application where users can place food orders, cancel them, and view order history. The restaurant analogy makes the abstract pattern concepts easy to understand.

## What is the Command Pattern?

The Command pattern encapsulates a request as an object, allowing you to:

- Parameterize objects with operations
- Queue operations for later execution
- Support undo operations
- Decouple the object that invokes the operation from the one that performs it

## Project Structure

```
├── Command.ts          # Command interface
├── Chef.ts             # Receiver - performs the actual work
├── PizzaOrder.ts       # Concrete command for pizza orders
├── BurgerOrder.ts      # Concrete command for burger orders
├── SaladOrder.ts       # Concrete command for salad orders
├── Waiter.ts           # Invoker - manages command execution
├── Restaurant.ts       # Client - creates and configures commands
├── main.ts             # Interactive console interface
├── demo.ts             # Non-interactive demonstration
├── package.json        # Project configuration
└── tsconfig.json       # TypeScript configuration
```

## Installation

Prerequisites:

- Node.js (v14 or higher)
- npm

Install dependencies:

```bash
npm install
```

## Usage

### Interactive Mode

```bash
npm start
```

Available commands:

- `1` or `pizza` - Order a pizza
- `2` or `burger` - Order a burger
- `3` or `salad` - Order a salad
- `undo` - Cancel the last order
- `history` - View order history
- `menu` - Display the menu
- `help` - Show available commands
- `quit` - Exit the application

### Demo Mode

```bash
npm run demo
```

Runs a scripted demonstration of the pattern.

## Output

### Interactive Mode Output

```
=======================================================
🏪 WELCOME TO LUIGI'S INTERACTIVE RESTAURANT! 🏪
=======================================================
👨‍🍳 Chef Luigi is ready to cook for you!
👩‍💼 Waiter Sofia will take your orders!

🍽️  TODAY'S MENU:
   1. 🍕 Pizza    - Delicious Italian pizza
   2. 🍔 Burger   - Juicy beef burger
   3. 🥗 Salad    - Fresh garden salad

🎮 AVAILABLE COMMANDS:
   1 or pizza   - Order a pizza
   2 or burger  - Order a burger
   3 or salad   - Order a salad
   undo         - Cancel last order
   history      - Show order history
   menu         - Show menu again
   help         - Show commands again
   quit         - Leave the restaurant

👤 What would you like to do? pizza

🙋 Customer: I'd like a pizza please!
📝 Sofia: I'll take your Pizza Order
🍕 Luigi is making a delicious pizza!

👤 What would you like to do? burger

🙋 Customer: I want a burger please!
📝 Sofia: I'll take your Burger Order
🍔 Luigi is grilling a juicy burger!

👤 What would you like to do? undo

😅 Customer: Actually, can you cancel my last order?
🔄 Sofia: Let me cancel that Burger Order
❌ Luigi stopped grilling burger and discarded it

👤 What would you like to do? history

📋 Sofia's Order History:
   1. Pizza Order

👤 What would you like to do? quit

👋 Thank you for visiting Luigi's Restaurant!
💫 You experienced the Command Pattern in action:
   ✅ Orders were commands that could be executed
   ✅ Orders could be undone (cancelled)
   ✅ Waiter didn't need to know how to cook
   ✅ Chef didn't need to know about the ordering system

🎓 This demonstrates loose coupling and separation of concerns!
🍝 Arrivederci! Come back anytime! 🍝
```

### Demo Mode Output

```
==================================================
🎯 COMMAND PATTERN DEMO - RESTAURANT EXAMPLE
==================================================
🏪 Welcome to Luigi's Restaurant!
👨‍🍳 Chef: Luigi
👩‍💼 Waiter: Sofia

🍽️  MENU:
   🍕 Pizza
   🍔 Burger
   🥗 Salad

🙋 Customer: I'd like a pizza please!
📝 Sofia: I'll take your Pizza Order
🍕 Luigi is making a delicious pizza!

🙋 Customer: I want a burger please!
📝 Sofia: I'll take your Burger Order
🍔 Luigi is grilling a juicy burger!

🙋 Customer: Can I have a salad please?
📝 Sofia: I'll take your Salad Order
🥗 Luigi is preparing a fresh salad!

📋 Sofia's Order History:
   1. Pizza Order
   2. Burger Order
   3. Salad Order

😅 Customer: Actually, can you cancel my last order?
🔄 Sofia: Let me cancel that Salad Order
❌ Luigi stopped preparing salad and discarded it

📋 Sofia's Order History:
   1. Pizza Order
   2. Burger Order

==================================================
✨ COMMAND PATTERN BENEFITS DEMONSTRATED:
==================================================
1. 🔗 LOOSE COUPLING:
   - Customer doesn't talk directly to Chef
   - Waiter doesn't need to know HOW to cook

2. 🔄 UNDO FUNCTIONALITY:
   - Orders can be cancelled (undo command)
   - Command history is maintained

3. 🎯 SINGLE RESPONSIBILITY:
   - Chef: only cooks food
   - Waiter: only handles orders
   - Commands: only represent specific orders

4. 📈 EASY TO EXTEND:
   - Adding new dishes = just create new Command class
   - No need to modify existing code
```

## Pattern Components

### Command Interface

Defines the contract for all commands with `execute()`, `undo()`, and `getDescription()` methods.

### Concrete Commands

- `PizzaOrder` - Encapsulates a pizza order request
- `BurgerOrder` - Encapsulates a burger order request
- `SaladOrder` - Encapsulates a salad order request

### Invoker (Waiter)

Manages command execution and maintains command history for undo functionality.

### Receiver (Chef)

Performs the actual work - cooking and canceling food orders.

### Client (Restaurant)

Creates command objects and configures their relationships.

## Key Benefits

**Decoupling**: The invoker doesn't need to know how operations are performed.

**Undo Support**: Commands can be reversed by storing them in history.

**Extensibility**: New commands can be added without modifying existing code.

**Flexibility**: Commands can be queued, logged, or executed at different times.

## Example Usage

```typescript
// Create components
const chef = new Chef("Mario");
const waiter = new Waiter("Anna");

// Create and execute command
const pizzaOrder = new PizzaOrder(chef);
waiter.takeOrder(pizzaOrder);

// Undo the command
waiter.cancelLastOrder();
```

## Building

```bash
npm run build
```

## Real-World Applications

The Command pattern is commonly used in:

- Text editors (undo/redo functionality)
- GUI applications (button clicks, menu items)
- Database transactions
- Game development (action systems)
- Web applications (request handling)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Author

Built by **Ms Hamsini S**
