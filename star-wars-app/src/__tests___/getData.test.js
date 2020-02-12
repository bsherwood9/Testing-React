import "@testing-library/jest-dom/extend-expect";
import mockAxios from "axios";
import { getData } from "../api/getData";

test("testing our getData fn", async () => {
  //setup
  // mockAxios.get.mockImplementationOnce(() =>
  //   Promise.resolve({
  //     data: ["cute.jpg"]
  //   })
  // );
  //work
  const results = await getData("https://example.com");
  //assertions
  expect(results).toEqual("catMan");
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith("https://example.com");
});
