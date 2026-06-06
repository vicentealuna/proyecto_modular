import "dotenv/config";
import env from "env-var";

export const envs = {
  NODE_ENV: env.get("NODE_ENV").default("production").asString(),
  PORT: env.get("PORT").default(3000).asPortNumber(),
  SELF_URL: env.get("SELF_URL").required().asString(),
};
