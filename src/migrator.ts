import { SequelizeStorage, Umzug } from 'umzug';
import fs from 'fs';
import path from 'path';
import sequelize, { testConnection } from './system/database';
import logger from './system/logging';

await testConnection(sequelize);

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

// eslint-disable-next-line @typescript-eslint/no-misused-promises
fs.mkdir(path.join(__dirname, 'migrations'), () => migrator.runAsCLI());

export type Migration = typeof migrator._types.migration;
