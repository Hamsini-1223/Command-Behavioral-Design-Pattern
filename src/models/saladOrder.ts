import { Command } from "./command";
import { Chef } from "./chef";
import { handleError } from "../utils/errorHandler";

export class SaladOrder implements Command {
  private chef: Chef;

  constructor(chef: Chef) {
    if (!chef) {
      throw new Error("Chef is required for salad order");
    }
    this.chef = chef;
  }

  execute(): void {
    try {
      this.chef.cookSalad();
    } catch (error) {
      handleError("Failed to execute salad order", error);
    }
  }

  undo(): void {
    try {
      this.chef.cancelSalad();
    } catch (error) {
      handleError("Failed to undo salad order", error);
    }
  }

  getDescription(): string {
    return "Salad Order";
  }
}
