# Command Pattern Restaurant

A TypeScript implementation of the Command behavioral design pattern using a restaurant ordering system.

## Installation

```bash
npm install
```

## Usage

### Interactive Mode

```bash
npm start
```

### Demo Mode

```bash
npm run demo
```

## Commands

- `pizza` - Order pizza
- `burger` - Order burger
- `salad` - Order salad
- `undo` - Cancel last order
- `history` - View order history
- `quit` - Exit

## Project Structure

```
├── src/
│   ├── models/                         # Core business logic (Command pattern)
│   │   ├── command.ts                  # Command interface / abstract class
│   │   ├── chef.ts                     # Receiver: executes cooking instructions
│   │   ├── pizzaOrder.ts               # Concrete Command: Pizza order
│   │   ├── burgerOrder.ts              # Concrete Command: Burger order
│   │   ├── saladOrder.ts               # Concrete Command: Salad order
│   │   ├── waiter.ts                   # Invoker: takes & executes orders
│   │   └── restaurant.ts               # Client / context: orchestrates ordering
│   │
│   ├── utils/
│   │   └── errorHandler.ts             # Centralized error handling helper
│   │
│   ├── main.ts                         # Interactive CLI (user places orders)
│   └── demo.ts                         # Quick demo / test run (non-interactive)
│
├── README.md                           # Documentation
├── package.json                        # Dependencies & scripts
└── tsconfig.json                       # TypeScript configuration

```

## Code Structure

### Command Pattern Components

**Command Interface**

```typescript
export interface Command {
  execute(): void;
  undo(): void;
  getDescription(): string;
}
```

**Concrete Command Example**

```typescript
export class PizzaOrder implements Command {
  private chef: Chef;

  constructor(chef: Chef) {
    this.chef = chef;
  }

  execute(): void {
    this.chef.cookPizza();
  }

  undo(): void {
    this.chef.cancelPizza();
  }

  getDescription(): string {
    return "Pizza Order";
  }
}
```

**Usage Example**

```typescript
const restaurant = new Restaurant("Luigi", "Sofia");
restaurant.orderPizza();
restaurant.orderBurger();
restaurant.cancelLastOrder();
restaurant.showOrderHistory();
```

## Sample Output

```
🏪 Restaurant initialized with Chef Luigi and Waiter Sofia

> pizza
📝 Sofia: Taking Pizza Order
🍕 Luigi is making a pizza

> burger
📝 Sofia: Taking Burger Order
🍔 Luigi is grilling a burger

> history
📋 Sofia's Order History:
   1. Pizza Order
   2. Burger Order

> undo
🔄 Sofia: Cancelling Burger Order
❌ Luigi cancelled burger order

> quit
Thank you for visiting Luigi's Restaurant!
```

## Build

```bash
npm run build
```
