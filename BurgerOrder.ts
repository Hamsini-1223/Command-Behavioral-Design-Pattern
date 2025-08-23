import { Command } from "./Command";
import { Chef } from "./Chef";

export class BurgerOrder implements Command {
  private chef: Chef;

  constructor(chef: Chef) {
    this.chef = chef;
  }

  execute(): void {
    this.chef.cookBurger();
  }

  undo(): void {
    this.chef.cancelBurger();
  }

  getDescription(): string {
    return "Burger Order";
  }
}
