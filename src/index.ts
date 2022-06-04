import express from 'express';
import config from 'config';
import logger from './system/logging';
import home from './controllers/home';

const app = express();

home(app);

app.listen(
    config.get('port'),
    () => logger.log('info', 'Server running on port %s', config.get('port')),
);
