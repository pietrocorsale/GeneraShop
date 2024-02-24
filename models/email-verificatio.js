const { DataTypes } = require('sequelize');
const mysequelize = require('./../sequelize'); // Assumi che hai già configurato una connessione al database
const User = require('./user');
const EmailVerification = mysequelize.sequelize.define('EmailVerification', {
  VerificationID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  VerificationCode: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  ExpiryDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
},
{
  tableName: 'emailverifications', // Specifica il nome corretto della tabella
  timestamps: true, // Imposta a true se vuoi utilizzare i campi createdAt e updatedAt
});

EmailVerification.belongsTo(User, { foreignKey: 'UserID' });

mysequelize.sequelize.sync();

module.exports = EmailVerification;
