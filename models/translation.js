const mysequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Translation = mysequelize.sequelize.define('Translation', {
  TranslationID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  LanguageCode: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  TranslationKey: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  Value: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'translations', // Specifica il nome corretto della tabella
  timestamps: true,
});

Translation.getTranslation = async (languageCode, translationKey) => {
  //try {
    const translation = await Translation.findOne({
      where: {
        LanguageCode: languageCode,
        TranslationKey: translationKey,
      }
    });

    return translation ? translation : null;
  //} catch (error) {
  //  throw new Error('Errore nell\'estrazione della traduzione:', error);
  //}
};

// Sincronizza il modello con il database
mysequelize.sequelize.sync();

module.exports = Translation;
