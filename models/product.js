const { DataTypes } = require('sequelize');
const mysequelize = require('./../sequelize'); // Assumi che hai già configurato una connessione al database
const Blueprint = require('./blueprint');
const User = require('./user');
const Variant = require('./variant');
const Product = mysequelize.sequelize.define('Product', {
  ProductID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PrintifyProductId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  StripeProductId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Price: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Rate: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ProductionTime: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  BlueprintID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  StripeVariantID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  CoverImagePath :  {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Type: {
    type: DataTypes.ENUM('UserGenerated', 'PreGenerated'),
    allowNull: true,
  },
  Status: {
    type: DataTypes.ENUM('In Cart', 'Saved', 'Purchased'),
    allowNull: true,
  },
},
{
    timestamps: true,
  tableName: 'products', // Specifica il nome corretto della tabella
});

// Definisci le chiavi esterne
Product.belongsTo(User, { foreignKey: 'UserID' });
Product.belongsTo(Blueprint, { foreignKey: 'BlueprintID' });

mysequelize.sequelize.sync(); // Opzionale: sincronizza il modello con il database

module.exports = Product;
