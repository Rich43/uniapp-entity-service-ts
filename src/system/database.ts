import { Sequelize } from 'sequelize';
import config from '../config/config.json';

const sequelize = new Sequelize(config.connectionString);

export default sequelize;
