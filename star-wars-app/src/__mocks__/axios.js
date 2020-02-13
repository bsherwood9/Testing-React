export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        next: "https://hellolittlebuddy.com",
        previous: null,
        results: [{ name: "catMan" }, { name: "dog" }, { name: "rat" }]
      }
    })
  )
};
