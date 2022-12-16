import { screen } from "@testing-library/react";
import { describe, it } from "vitest";

import { render } from "../../";
import { HeaderTest } from "../../../src/presentation/components/Header/HeaderTest";

describe("Header", () => {
  it("Should it Render Header", () => {
    const { getByText } = render(<HeaderTest />);
    expect(getByText).toBeTruthy();

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
