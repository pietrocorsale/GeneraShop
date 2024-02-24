const { DataTypes } = require('sequelize');
const mysequelize = require('./../sequelize'); // Assumi che tu abbia già configurato una connessione al database
const User = require('./user');

const PaymentMethod = mysequelize.sequelize.define('PaymentMethod', {
  PaymentMethodID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  StripePaymentMethodId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Brand: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Last4: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ExpiryMonth: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ExpiryYear: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'paymentmethods', // Specifica il nome corretto della tabella
  timestamps: true,
});
PaymentMethod.belongsTo(User, { foreignKey: 'UserID' });
mysequelize.sequelize.sync(); // Questo sincronizza il modello con il database, potrebbe essere necessario effettuare delle modifiche a seconda del tuo setup
module.exports = PaymentMethod;
