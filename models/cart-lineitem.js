const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che hai già configurato una connessione al database
const Product = require('./product');
const User = require('./user');
const CartLineItem = mysequelize.sequelize.define('CartLineItem', {
  CartLineItemID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserID: {
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
}, {
  tableName: 'cartlineitem', // Specifica il nome corretto della tabella
  timestamps: true,
});
CartLineItem.belongsTo(User, { foreignKey: 'UserID' });
CartLineItem.belongsTo(Product, { foreignKey: 'ProductID' });
mysequelize.sequelize.sync();
module.exports = CartLineItem;
