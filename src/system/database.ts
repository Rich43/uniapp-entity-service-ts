// noinspection SpellCheckingInspection

import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import config from 'config';
import Entities from '../models/Entities';
import logger from './logging';

const DATABASE_STORAGE = 'database.storage';
const DATABASE_DIALECT = 'database.dialect';
const DATABASE_HOST = 'database.host';
const DATABASE_PORT = 'database.port';
const DATABASE_USER = 'database.user';
const DATABASE_PASSWORD = 'database.password';
const DATABASE_DATABASE = 'database.database';

const dbSettings: SequelizeOptions = {
    storage: config.has(DATABASE_STORAGE) ? config.get(DATABASE_STORAGE) : undefined,
    dialect: config.get(DATABASE_DIALECT),
    dialectOptions: {
        host: config.has(DATABASE_HOST) ? config.get(DATABASE_HOST) : undefined,
        port: config.has(DATABASE_PORT) ? config.get(DATABASE_PORT) : undefined,
        user: config.has(DATABASE_USER) ? config.get(DATABASE_USER) : undefined,
        password: config.has(DATABASE_PASSWORD) ? config.get(DATABASE_PASSWORD) : undefined,
        database: config.has(DATABASE_DATABASE) ? config.get(DATABASE_DATABASE) : undefined,
    },
    models: [Entities],
};

logger.log('debug', 'Connection information:', dbSettings);

const sequelize = new Sequelize(dbSettings);

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
