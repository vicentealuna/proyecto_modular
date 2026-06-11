import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

export class Server {
  constructor({ port, origin }) {
    this.app = express();

    this.port = port;
    this.origin = origin;
    this.routes = [];
  }

  addRoute(routes) {
    this.routes.push(routes);
  }

  start() {
    // Globals Middlewares
    this.app.use(
      cors({
        origin: this.origin ? this.origin.split(",") : [],
        methods: ["GET", "POST", "PUT"],
      }),
    );
    this.app.use(express.json());

    this.routes.forEach((route) => this.app.use(route));

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    this.app.use("/", express.static(path.join(__dirname, "../../public")));

    // Start Server
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
