import sequelize, { testConnection } from './system/database';
import logger from './system/logging';

await testConnection(sequelize);

await sequelize.sync().then(() => logger.info('Database synced, any missing tables have been created.'));
