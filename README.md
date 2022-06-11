Uniapp Entity Service
=====================

1) `npm i`
2) `npm run serve`

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
