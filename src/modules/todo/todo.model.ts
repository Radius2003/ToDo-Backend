import { Table, Column, Model, DataType, Default } from 'sequelize-typescript';

@Table({
  tableName: 'Todos',
})
export class Todo extends Model {
  @Column({
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  })
  text: string;

  @Default(false)
  @Column({
    allowNull: false,
  })
  isChecked: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  updatedAt: string;
}
