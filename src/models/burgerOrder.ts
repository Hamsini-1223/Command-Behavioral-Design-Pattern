import { Command } from "./command";
import { Chef } from "./chef";
import { handleError } from "../utils/errorHandler";

export class BurgerOrder implements Command {
  private chef: Chef;

  constructor(chef: Chef) {
    if (!chef) {
      throw new Error("Chef is required for burger order");
    }
    this.chef = chef;
  }

  execute(): void {
    try {
      this.chef.cookBurger();
    } catch (error) {
      handleError("Failed to execute burger order", error);
    }
  }

  undo(): void {
    try {
      this.chef.cancelBurger();
    } catch (error) {
      handleError("Failed to undo burger order", error);
    }
  }

  getDescription(): string {
    return "Burger Order";
  }
}
