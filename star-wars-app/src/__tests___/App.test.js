import React from "react";
import ReactDOM from "react-dom";
import StarWarsCharacters from "../components/StarWarsCharacters";
import App from "../App";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// test("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });

test("Check that logo is rendering.", async () => {
  // const div = document.createElement("div");
  const wrapper = rtl.render(<App />);
  const title = await wrapper.findByAltText(/logo/i);
  expect(title).toBeVisible();
  expect(title).toHaveAttribute(
    "src",
    "https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
  );
});

test("making sure that names render to screen", async () => {
  const wrapper = rtl.render(<App />);
  console.log("thisis the wrapper", wrapper);
  const people = await wrapper.findAllByTestId("char");
  console.log("people", people);
  expect(people[1]).toBeVisible();
});

test("making that actual name exists of dog", async () => {
  const wrapper = rtl.render(<App />);
  const dog = await wrapper.findByText("dog");
  expect(dog).toBeVisible();
});
