import { ServerOptions, createServer } from "http";
import { app } from "./app";

const serverOptions: ServerOptions = {
  requestTimeout: 100000,
};

const server = createServer(serverOptions, app);

server.listen(8080);
