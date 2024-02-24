const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che hai già configurato una connessione al database
const Conversation = require('./conversation');

const ConversationLine = mysequelize.sequelize.define('ConversationLine', {
    ConversationLineId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ConversationID: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Conversation', // Nome del modello
            key: 'ConversationID'
        }
    },
    Value: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Role: {
        type: DataTypes.STRING,
        allowNull: true
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
    tableName: 'conversation_lines',
    timestamps: true,
});
ConversationLine.belongsTo(Conversation, { foreignKey: 'ConversationID' });
mysequelize.sequelize.sync();
module.exports = ConversationLine;
