import { QueryInterface, Sequelize, DataTypes } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    // Create the 'Order-items' table
    await queryInterface.createTable("Order-items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Orders",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      grocery_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Groceries",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.DECIMAL, 
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });

    // Add a foreign key constraint for the 'order_id' field
    await queryInterface.addConstraint("Order-items", {
      fields: ["order_id"],
      type: "foreign key",
      name: "orders_order_id_fk",
      references: {
        table: "Orders",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    // Add a foreign key constraint for the 'grocery_id' field
    await queryInterface.addConstraint("Order-items", {
      fields: ["grocery_id"],
      type: "foreign key",
      name: "groceries_id_fk",
      references: {
        table: "Groceries",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    // Drop the 'Order-items' table
    await queryInterface.dropTable("Order-items");
  },
};
