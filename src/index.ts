import { createServer } from 'http';
import { config } from 'config';
import { app } from 'app';

const port = config.SERVER_PORT;

export default createServer(app)
  .listen(port)
  .on('listening', () =>
    console.log(`Server listening at: http://localhost:${port}`),
  );
