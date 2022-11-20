import { routeParams } from "./routeParams";

it("should extract params into object", () => {
  expect(routeParams("/gardens/:gardenId/plants/:plantId")).toEqual({
    gardenId: "string",
    plantId: "string",
  });
});
