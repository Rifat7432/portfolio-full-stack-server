import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";
import { Server } from "http";

let server: Server;
const main = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.error(err);
  }
};
main();
process.on("unhandledRejection", () => {
  if (server) {
    server.close(() => {
      console.error("unhandledRejection");
      process.exit(1);
    });
  }
});
process.on("uncaughtException", () => {
  console.log("uncaughtException");
  process.exit(1);
});
