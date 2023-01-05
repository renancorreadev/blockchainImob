export class BlockImobError extends Error {
  constructor() {
    super(
      "There was an error in the read call to the BlockImob contract, please try again."
    );
    this.name = "ConsultGovError";
  }
}
