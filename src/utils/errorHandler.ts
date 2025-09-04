export function handleError(message: string, error: unknown): void {
  const errorMessage = error instanceof Error ? error.message : "Unknown error";
  console.error(`❌ ${message}: ${errorMessage}`);
}

export function validateInput(input: string): string {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }
  return input.trim().toLowerCase();
}

export function isValidCommand(command: string): boolean {
  const validCommands = [
    "pizza",
    "burger",
    "salad",
    "undo",
    "history",
    "menu",
    "quit",
  ];
  return validCommands.includes(command);
}
