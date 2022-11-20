export const routeParams = (path) => {
  const params = path
    .split("/")
    .filter((segment) => segment.startsWith(":"))
    .map((param) => param.split(":")[1]);

  return Object.fromEntries(params.map((param) => [param, "string"]));
};
