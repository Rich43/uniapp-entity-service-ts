import express from 'express';
import config from 'config';
import logger from './system/logging';
import home from './controllers/home';
import sequelize, { testConnection } from './system/database';

testConnection(sequelize);

const app = express();

home(app);

sequelize.sync().then(() => {
    app.listen(
        config.get('port'),
        () => logger.log('info', 'Server running on port %s', config.get('port')),
    );
});
