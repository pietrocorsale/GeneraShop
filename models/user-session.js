const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize');
const User = require('./user');

const UserSession = mysequelize.sequelize.define('UserSession', {
  SessionID: {
    type: DataTypes.STRING(100),
    allowNull: false,
    primaryKey: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  Expiry: {
    type: DataTypes.DATE,
    defaultValue: null,
  },
  Token: {
    type: DataTypes.STRING(255),
    defaultValue: null,
  },
}, {
  tableName: 'usersessions',
  timestamps: true,
});
UserSession.belongsTo(User, { foreignKey: 'UserID' });
mysequelize.sequelize.sync();
module.exports = UserSession;