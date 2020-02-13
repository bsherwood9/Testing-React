import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import mockAxios from "../__mocks__/axios";

test("testing our getData fn", async () => {
  // setup
  const results = await mockAxios.get("https://example.com");
  // work
  const realResults = results.data.results[1];
  const animalArray = results.data.results;
  //assertions
  expect(realResults).toEqual({ name: "dog" });
  expect(animalArray).toEqual([
    { name: "catMan" },
    { name: "dog" },
    { name: "rat" }
  ]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith("https://example.com");
});
