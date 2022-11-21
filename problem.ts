import { S } from "ts-toolbelt";

// Implement a type which extracts params from a route string
// so the last line is without error
type RouteParams<T> = T;

const route = <T extends string>(path: T, handler: (params: RouteParams<T>) => void) => {};

const path = "/gardens/:gardenId/plants/:plantId";

type GardenParams = RouteParams<typeof path>;

route(path, ({ gardenId, plantId }: GardenParams) => {});
