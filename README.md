Uniapp Entity Service
=====================

# Getting Started

1) `npm i`
2) `npm run initialise`
3) `./seeder.sh up`
4) `npm run serve`

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

`./migrator.sh up`

## Migrate down

`./migrator.sh down`

# Seeders

## Create a seeder

`./seeder.sh create --name my-seeder.ts --folder src/seeders`

Example seeder:

```typescript
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
```

## Migrate seeds up

`./seeder.sh up`

## Migrate seeds down

`./seeder.sh down`
