import { Umzug, SequelizeStorage } from 'umzug';
import fs from 'fs';
import path from 'path';
import sequelize from './system/database';
import logger from './system/logging';

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
