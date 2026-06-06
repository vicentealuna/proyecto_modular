import { Server } from "./server/server.js";
import { envs } from "./utils/dotenv.js";

(() => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    origin: envs.SELF_URL,
  });

  // Add Routes Here
  // server.addRoute("/api/v1", controller.method);

  server.start();
}
