import React from "react";
import ReactDOM from "react-dom";
import StarWarsCharacters from "../components/StarWarsCharacters";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// test("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });

test("Check that next fn works", async () => {
  // const div = document.createElement("div");
  const { getByTestId } = rtl.render(<App />);
  getByTestId("next");
});
