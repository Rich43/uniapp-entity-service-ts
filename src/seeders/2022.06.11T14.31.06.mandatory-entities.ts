import { Seeder } from '../seeder';
import Entities from '../models/entities';

const seedEntities = [
    { id: 1, name: 'root', parentId: 1 },
];

export const up: Seeder = async () => {
    await Entities.bulkCreate(seedEntities);
};

export const down: Seeder = async () => {
    await Entities.destroy({ where: { id: seedEntities.map((seedObj) => seedObj.id) } });
};
