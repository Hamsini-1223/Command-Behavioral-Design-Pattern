import { Command } from "./command";
import { Chef } from "./chef";
import { handleError } from "../utils/errorHandler";

export class PizzaOrder implements Command {
  private chef: Chef;

  constructor(chef: Chef) {
    if (!chef) {
      throw new Error("Chef is required for pizza order");
    }
    this.chef = chef;
  }

  execute(): void {
    try {
      this.chef.cookPizza();
    } catch (error) {
      handleError("Failed to execute pizza order", error);
    }
  }

  undo(): void {
    try {
      this.chef.cancelPizza();
    } catch (error) {
      handleError("Failed to undo pizza order", error);
    }
  }

  getDescription(): string {
    return "Pizza Order";
  }
}
