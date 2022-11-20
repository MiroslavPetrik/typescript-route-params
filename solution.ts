import { S } from "ts-toolbelt";

type InferParams<T extends string> = {
  [segment in S.Split<T, "/">[number] as segment extends `:${infer param}`
    ? param
    : never]: string;
};

const route = <T extends string>(
  path: T,
  handler: (params: InferParams<T>) => void
) => {};

const path = "/gardens/:gardenId/plants/:plantId";

type GardenParams = InferParams<typeof path>;

route(path, ({ gardenId, plantId }: GardenParams) => {});
