import { Table, Column, Model, HasOne, AllowNull, AutoIncrement, CreatedAt } from 'sequelize-typescript';
import { DataTypes } from 'sequelize/types';

const UNIQUE_CONSTRAINT_NAME_PARENT = 'unique_name_parent';

interface Entity {
    id: number;
    name: string;
    parent: Entity;
    created: Date;
}

@Table({
    indexes: [
        {
            name: UNIQUE_CONSTRAINT_NAME_PARENT,
            unique: true,
            fields: ['name', 'parent'],
        },
    ],
})
export default class Entities extends Model implements Entity {
    @Column(DataTypes.BIGINT.UNSIGNED)
    @AllowNull(false)
    @AutoIncrement
    // eslint-disable-next-line @typescript-eslint/indent
    id!: number;

    @Column(DataTypes.CHAR(255))
    @AllowNull(false)
    // eslint-disable-next-line @typescript-eslint/indent
    name!: string;

    @Column
    @AllowNull(false)
    @HasOne(() => Entities)
    // eslint-disable-next-line @typescript-eslint/indent
    parent!: Entity;

    @CreatedAt
    @AllowNull(false)
    // eslint-disable-next-line @typescript-eslint/indent
    created!: Date;
}
