import { Command } from "./Command";
import { Chef } from "./Chef";

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
