import { Sequelize } from 'sequelize';
import config from '../config/default.json';

const sequelize = new Sequelize(config.connectionString);

export default sequelize;
