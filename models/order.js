const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che tu abbia già configurato una connessione al database
const User = require('./user');
const Order = mysequelize.sequelize.define('Order', {
  OrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PrintifyOrderId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  AddressLine1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ApartmentNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  City: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  State: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PostalCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  OrderDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  OrderStatus: {
    type: DataTypes.ENUM('Processing','Paid', 'Shipped', 'Delivered'),
    allowNull: true,
  },
}, {
  tableName: 'orders', // Specifica il nome corretto della tabella
  timestamps: true,
});
Order.belongsTo(User, { foreignKey: 'UserID' });
// Definisci le relazioni con altre tabelle se necessario
mysequelize.sequelize.sync();
module.exports = Order;
