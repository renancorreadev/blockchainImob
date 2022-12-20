export class TransactionError extends Error {
  constructor() {
    super(
      "The transaction failed, please verify that you have the necessary permissions to perform this action or check the arguments."
    );
    this.name = "TransactionError";
  }
}
