// The Command interface - like an order slip in a restaurant
export interface Command {
  execute(): void;
  undo(): void;
  getDescription(): string;
}
