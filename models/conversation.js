const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che hai già configurato una connessione al database
const User = require('./user');


const Conversation = mysequelize.sequelize.define('Conversation', {
    ConversationID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ChannelType: {
        type: DataTypes.STRING,
        allowNull: true
    },
    OpenAIThreadId: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    PhoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    UserId: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'conversations',
    timestamps: true,
});
Conversation.belongsTo(User, { foreignKey: 'UserId' });
mysequelize.sequelize.sync();
module.exports = Conversation;
