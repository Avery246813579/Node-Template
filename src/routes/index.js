const ROUTES = ["./login-routes.js"]

export async function setupRoutes(app) {
  for (let route of ROUTES) {
    require(route)(app);
  }
}
