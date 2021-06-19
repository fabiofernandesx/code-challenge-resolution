export class FieldRequiredError extends Error {
  constructor(public field: string) {
    super(`Field Required: ${field}`);
  }
}
