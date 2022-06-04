import express from 'express';
import config from './config.json';
import logger from './logging';

const app = express();

app.get('/', (req: any, res: any) => {
    res.send('Hello World');
});

app.listen(
    config.port,
    () => logger.log('info', 'Server running on port %s', config.port),
);
