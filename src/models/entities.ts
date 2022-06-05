import { Table, Column, Model, HasOne, AllowNull, AutoIncrement, CreatedAt, PrimaryKey, ForeignKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

const UNIQUE_CONSTRAINT_NAME_PARENT = 'unique_name_parent';

interface Entity {
    id: number;
    name: string;
    parentId: number;
    parent: Entity;
    created: Date;
}

@Table({
    indexes: [
        {
            name: UNIQUE_CONSTRAINT_NAME_PARENT,
            unique: true,
            fields: ['name', 'parentId'],
        },
    ],
})
export default class Entities extends Model implements Entity {
    @AllowNull(false)
    @AutoIncrement
    @PrimaryKey
    @Column(DataTypes.BIGINT)
    // eslint-disable-next-line @typescript-eslint/indent
    id!: number;

    @AllowNull(false)
    @Column(DataTypes.CHAR(255))
    // eslint-disable-next-line @typescript-eslint/indent
    name!: string;

    @AllowNull(false)
    @ForeignKey(() => Entities)
    @Column(DataTypes.BIGINT)
    // eslint-disable-next-line @typescript-eslint/indent
    parentId!: number;

    @HasOne(() => Entities, {})
    // eslint-disable-next-line @typescript-eslint/indent
    parent!: Entity;

    @CreatedAt
    @AllowNull(false)
    @Column
    // eslint-disable-next-line @typescript-eslint/indent
    created!: Date;
}
