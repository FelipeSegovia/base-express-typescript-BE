import express, { Response } from 'express';
import logger from 'morgan';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(logger('dev'));

app.get('/', (_, res: Response) => {
  res.send('Server Alive');
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
