const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che tu abbia già configurato una connessione al database
const Blueprint = require('./blueprint');
const Variant = mysequelize.sequelize.define('Variant', {
  VariantID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PrintifyVariantId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  BlueprintID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Size: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'variants',
  timestamps: true,
});
Variant.belongsTo(Blueprint, { foreignKey: 'BlueprintID' });
mysequelize.sequelize.sync();
module.exports = Variant;
