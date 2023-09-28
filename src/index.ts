import { ServerOptions, createServer } from 'http';
import { SERVER_PORT, SERVER_HOST } from 'config';
import { app } from 'app';

const serverOptions: ServerOptions = {
  requestTimeout: 100000,
};

const server = createServer(serverOptions, app);

server.listen(SERVER_PORT, SERVER_HOST);
server.on('listening', () =>
  console.log(`Server listening at: http://${SERVER_HOST}:${SERVER_PORT}`),
);
