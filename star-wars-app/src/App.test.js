import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import axios from "axios";
import { findAllByTestId } from "@testing-library/react";

jest.mock("axios", () => {
  return {
    get: jest.fn(() => {
      Promise.resolve({
        count: 33,
        next: "https://example.com",
        previous: "https://previous.com",
        results: [
          { name: "dogman", height: 150 },
          { name: "Logen", height: 230 },
          { name: "Rudd", height: 180 }
        ]
      });
    })
  };
});

test("testing our get fn", async () => {
  const wrapper = rtl.render(<App />);
  await wrapper.findByText(/logen/i);
  expect(axios.get).toHaveBeenCalled();
});
