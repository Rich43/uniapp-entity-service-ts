import { Sequelize } from 'sequelize-typescript';
import config from 'config';
import Entities from '../models/entities';
import logger from './logging';

const sequelize = new Sequelize({
    storage: config.get('database.storage'),
    dialect: config.get('database.dialect'),
    dialectOptions: {
        host: config.get('database.host'),
        port: config.get('database.port'),
        user: config.get('database.user'),
        password: config.get('database.password'),
        database: config.get('database.database'),
    },
    models: [Entities],
});

export const testConnection = async (sqlize: Sequelize) => {
    try {
        await sqlize.authenticate();
        logger.log('info', 'Connection has been established successfully.');
    } catch (error) {
        logger.log('error', 'Unable to connect to the database:', error);
        process.exit(1);
    }
};

export default sequelize;
