const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che hai già configurato una connessione al database
const Product = require('./product');
const User = require('./user');
const UserGeneratedImage = mysequelize.sequelize.define('UserGeneratedImage', {
  ImageID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PrintifyImageId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ProductId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ImagePath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  GenerationDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'usergeneratedimages', // Specifica il nome corretto della tabella
  timestamps: true, // Opzionale: includi i campi createdAt e updatedAt
});
UserGeneratedImage.belongsTo(User, { foreignKey: 'UserID' });
UserGeneratedImage.belongsTo(Product, { foreignKey: 'ProductId' });
mysequelize.sequelize.sync();
module.exports = UserGeneratedImage;
