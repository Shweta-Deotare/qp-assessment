import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import OrderItems from "./OrderItems";

@Table({
  tableName: "groceries",
  timestamps: true,
})
class Groceries extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  inventory!: number;

  // Optional: If you have a relationship with `OrderItems` model
  @HasMany(() => OrderItems)
  orderItems!: OrderItems[];
}

export default Groceries;
