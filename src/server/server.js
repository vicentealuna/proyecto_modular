import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

export class Server {
  constructor({ port, origin }) {
    this.app = express();

    this.port = port;
    this.origin = origin;
  }

  addRoute(path, ...handlers) {
    this.app.use(`api/${path}`, ...handlers);
  }

  start() {
    // Globals Middlewares
    this.app.use(
      cors({
        origin: [`${this.origin}`],
        methods: ["GET", "POST"],
      }),
    );
    this.app.use(express.json());

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    this.app.use("/", express.static(path.join(__dirname, "../../public")));

    // Start Server
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
