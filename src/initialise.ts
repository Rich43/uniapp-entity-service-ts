import sequelize, { testConnection } from './system/database';
import logger from './system/logging';

testConnection(sequelize).then(() => {});

sequelize.sync().then(() => logger.info('Database synced, any missing tables have been created.'));
