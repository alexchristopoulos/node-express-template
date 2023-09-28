import { ServerOptions, createServer } from 'http';
import { config } from 'config';
import { app } from 'app';

const serverOptions: ServerOptions = {
  requestTimeout: 100000,
};

const server = createServer(serverOptions, app);

server.listen('8080');
server.on('listening', () =>
  console.log(`Server listening at: http://localhost:${config.SERVER_PORT}`),
);
