import { app } from 'app';
import { config } from 'config';
import { createServer } from 'http';

const port = config.SERVER_PORT;

export default createServer(app)
  .listen(port)
  .on('listening', () =>
    console.log(`Server listening at: http://localhost:${port}`),
  );
