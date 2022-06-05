import { Sequelize } from 'sequelize-typescript';
import config from 'config';
import Entities from '../models/entities';
import logger from './logging';

const sequelize = new Sequelize({
    database: config.get('connectionString'),
    dialect: config.get('dialect'),
    models: [Entities],
});

export const testConnection = async (sqlize: Sequelize) => {
    try {
        await sqlize.authenticate();
        logger.log('info', 'Connection has been established successfully.');
    } catch (error) {
        logger.log('error', 'Unable to connect to the database:', error);
    }
};

export default sequelize;
