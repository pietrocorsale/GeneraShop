// Importa Sequelize e il file di configurazione del database
const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che hai già configurato una connessione al database
const Product = require('./product');
const PrintArea = require('./print-area');
const UserGeneratedImage = require('./usergenerated-image');
// Definisci il modello ProductPrintArea
const ProductPrintArea = mysequelize.sequelize.define('ProductPrintArea', {
  ProductPrintAreasID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PrintAreaID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ImageID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
},
{
    timestamps: true,
  tableName: 'productprintareas', // Specifica il nome corretto della tabella
});

// Definisci le chiavi esterne
ProductPrintArea.belongsTo(PrintArea, { foreignKey: 'PrintAreaID' });
ProductPrintArea.belongsTo(Product, { foreignKey: 'ProductID' });
ProductPrintArea.belongsTo(UserGeneratedImage, { foreignKey: 'ImageID' });

// Sincronizza il modello con il database (crea la tabella se non esiste)
mysequelize.sequelize.sync();

// Esporta il modello ProductPrintArea
module.exports = ProductPrintArea;
