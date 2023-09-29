import { createServer } from 'http';
import { config } from 'config';
import { app } from 'app';

export default createServer(app)
  .listen(config.SERVER_PORT)
  .on('listening', () =>
    console.log(`Server listening at: http://localhost:${config.SERVER_PORT}`),
  );
