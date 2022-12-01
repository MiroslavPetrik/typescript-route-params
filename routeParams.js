export const routeParams = (path) => {
  const params = path
    .split("/")
    .filter((segment) => segment.startsWith(":"))
    .map((param) => param.substr(1))
    .map((param) => [param, "string"]);

  return Object.fromEntries(params);
};
