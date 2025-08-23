// Concrete Command - represents a salad order
import { Command } from "./Command";
import { Chef } from "./Chef";

export class SaladOrder implements Command {
  private chef: Chef;

  constructor(chef: Chef) {
    this.chef = chef;
  }

  execute(): void {
    this.chef.cookSalad();
  }

  undo(): void {
    this.chef.cancelSalad();
  }

  getDescription(): string {
    return "Salad Order";
  }
}
