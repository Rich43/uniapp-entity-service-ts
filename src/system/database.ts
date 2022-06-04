import { Sequelize } from 'sequelize';
import config from 'config';

const sequelize = new Sequelize(config.get('connectionString'));

export default sequelize;
