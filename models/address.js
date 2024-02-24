const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che tu abbia già configurato una connessione al database
const User = require('./user');
const Address = mysequelize.sequelize.define('Address', {
  AddressID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  AddressLine1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AddressLine2: {
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
  IsDefault: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  Type: {
    type: DataTypes.ENUM('Shipping', 'Billing'),
    allowNull: true,
  },
}, {
  tableName: 'addresses',
  timestamps: true,
});
Address.belongsTo(User, { foreignKey: 'UserID' });
mysequelize.sequelize.sync();
module.exports = Address;
