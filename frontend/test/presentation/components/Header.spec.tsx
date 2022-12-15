import { screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { renderWithRouter } from "../../utils/test-utils";

import { HeaderTest } from "../../../src/presentation/components/Header/HeaderTest";

describe("Header", () => {
  it("Should it Render Header", () => {
    const { getByText } = renderWithRouter(<HeaderTest />);
    expect(getByText).toBeTruthy();

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
