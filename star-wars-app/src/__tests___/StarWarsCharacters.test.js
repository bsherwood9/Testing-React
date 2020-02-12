import React from "react";
import ReactDOM from "react-dom";
import StarWarsCharacters from "../components/StarWarsCharacters";
import App from "../App";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test("making sure that names render to screen", async () => {
//   const wrapper = rtl.render(<StarWarsCharacters />);
//   mockAxios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       data: {
//           results: ["Joe", "James", "John"],
//           next: "next2",
//           previous: 'prev2'
//       }
//     })
//   );
//   //work
//   await getCharacters();
//   wrapper.findAllByTestId(/character/i);
//   expect(people[1]).toBeVisible();
// });
