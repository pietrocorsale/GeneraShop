const { DataTypes } = require('sequelize');
const mysequelize = require('./../sequelize'); // Assumi che hai già configurato una connessione al database
const Product = require('./product');
const Order = require('./order');
const OrderLineItem = mysequelize.sequelize.define('OrderLineItem', {
  LineItemID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  OrderID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
}, {
  tableName: 'orderlineitems', // Specifica il nome corretto della tabella
  timestamps: true, // Aggiunge createdAt e updatedAt automaticamente
});
OrderLineItem.belongsTo(Order, { foreignKey: 'OrderID' });
OrderLineItem.belongsTo(Product, { foreignKey: 'ProductID' });
mysequelize.sequelize.sync();
module.exports = OrderLineItem;
