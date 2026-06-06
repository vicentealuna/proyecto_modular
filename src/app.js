import { Server } from "./server/server.js";
import { envs } from "./utils/dotenv.js";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.route.js";

(() => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    origin: envs.SELF_URL,
  });

  // Add Routes Here
  server.addRoute(authRoutes);
  server.addRoute(productRoutes);

  server.start();
}
