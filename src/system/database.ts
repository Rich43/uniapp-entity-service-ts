import { Sequelize } from 'sequelize-typescript';
import config from 'config';
import Entities from '../model/entities';

const sequelize = new Sequelize({
    database: config.get('connectionString'),
    models: [Entities],
});

export const sync = (sqlize: Sequelize) => {
    sqlize.sync();
};

export default sequelize;
