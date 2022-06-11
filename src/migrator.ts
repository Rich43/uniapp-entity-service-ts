import { Umzug, SequelizeStorage } from 'umzug';
import fs from 'fs';
import path from 'path';
import sequelize from './system/database';
import logger from './system/logging';

logger.debug('Command line arguments: ', process.argv);

const migrator = new Umzug({
    migrations: {
        glob: ['migrations/*.ts', { cwd: __dirname }],
    },
    context: sequelize,
    storage: new SequelizeStorage({
        sequelize,
    }),
    logger,
});

fs.mkdir(path.join(__dirname, 'migrations'), () => {
    migrator.runAsCLI().then(() => {});
});

export type Migration = typeof migrator._types.migration;
