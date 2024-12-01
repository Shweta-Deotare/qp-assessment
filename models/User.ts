import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import Orders from "./Orders";

@Table({
  tableName: "users",
  timestamps: true,
})
class User extends Model {
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
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  })
  email!: string;

  @HasMany(() => Orders)
  orders!: Orders[];
}

export default User;
