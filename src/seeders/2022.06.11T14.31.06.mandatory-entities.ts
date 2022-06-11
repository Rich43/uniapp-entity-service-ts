import { Seeder } from '../seeder';

const seedEntities = [
    { id: 1, name: 'root', parentId: 1, created: new Date() },
];
const tableName = 'entities';

export const up: Seeder = async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().bulkInsert(tableName, seedEntities);
};

export const down: Seeder = async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().bulkDelete(
        tableName,
        { id: seedEntities.map((e) => e.id) },
    );
};
