Uniapp Entity Service
=====================

# Getting Started

## Dev

1) Install latest npm
2) `npm i`
3) `npm run initialise`
4) `npm run seeder_up`
5) `npm run serve`

## Prod

1) Install Docker and latest npm
2) `docker-compose up -d`
3) `npm i`
4) `npm run initialise_prod`
5) `npm run seeder_up_prod`
6) `npm run start`

# Migrations

## Create a migration

`./migrator.sh create --name my-migration.ts --folder src/migrations`

Example migration:

```typescript
import { DataTypes } from 'sequelize';
import { Migration } from '../migrator';

export const up: Migration = async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().createTable('users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};

export const down: Migration = async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().dropTable('users');
};
```

## Migrate up

`npm run migrator_up`

## Migrate down

`npm run migrator_down`

# Seeders

## Create a seeder

`./seeder.sh create --name my-seeder.ts --folder src/seeders`

Example seeder:

```typescript
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
```

## Migrate seeds up

`npm run seeder_up`

## Migrate seeds down

`npm run seeder_down`
