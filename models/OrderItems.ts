import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Orders from "./Orders"; // Import the Orders model
import Groceries from "./Groceries";

@Table({
  tableName: "order_items",
  timestamps: true, // Automatically adds `createdAt` and `updatedAt`
})
class OrderItems extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => Orders)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order_id!: number;

  @BelongsTo(() => Orders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  order!: Orders;

  @ForeignKey(() => Groceries)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  grocery_id!: number;

  @BelongsTo(() => Groceries, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  grocery!: Groceries;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price!: number;
}

export default OrderItems;
