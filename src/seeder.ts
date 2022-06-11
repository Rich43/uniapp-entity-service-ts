import { Umzug, SequelizeStorage } from 'umzug';
import fs from 'fs';
import path from 'path';
import sequelize, { testConnection } from './system/database';
import logger from './system/logging';

testConnection(sequelize).then(() => {});

logger.debug('Command line arguments: ', process.argv);

const seeder = new Umzug({
    migrations: {
        glob: ['seeders/*.ts', { cwd: __dirname }],
    },
    context: sequelize,
    storage: new SequelizeStorage({
        sequelize,
    }),
    logger,
});

fs.mkdir(path.join(__dirname, 'seeders'), () => {
    seeder.runAsCLI().then(() => {});
});

export type Seeder = typeof seeder._types.migration;
