const mysequelize = require('./../sequelize');
const { DataTypes } = require('sequelize');
const email = require('./../services/email');

const User = mysequelize.sequelize.define('User', {
  UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  StripeCustomerID: {
    type: DataTypes.STRING,
  },
  FirstName: {
    type: DataTypes.STRING,
  },
  LastName: {
    type: DataTypes.STRING,
  },
  Email: {
    type: DataTypes.STRING,
    unique: true,
  },
  PhoneNumber: {
    type: DataTypes.STRING,
  },
  CountryCode: {
    type: DataTypes.STRING,
  },
  LanguageCode: {
    type: DataTypes.STRING,
  },
  Role: {
    type: DataTypes.ENUM('Standard User', 'Admin'),
  },
  VerifiedEmail: {
    type: DataTypes.BOOLEAN,
  },
  Subscriber: {
    type: DataTypes.BOOLEAN,
  },
  Password: {
    type: DataTypes.STRING,
  },
  RegistrationSource: {
    type: DataTypes.ENUM('Google', 'Facebook', 'Email'),
  },
  Credits: {
    type: DataTypes.INTEGER,
    defaultValue: 30,
  },
}, {
  tableName: 'users',
  timestamps: true,
});

// Operazione per creare un nuovo utente
User.createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    return error;
  }
};

// Operazione per trovare un utente per email
User.findUserByEmail = async (email) => {
  try {
    console.log('email');
    console.log(email);
    const user = await User.findOne({ where: { Email: email } });
    return user;
  } catch (error) {
    return error;
  }
};

// Operazione per modificare un utente
User.updateUser = async (userId, newData) => {
  try {
    await User.update(newData, { where: { UserID: userId } });
  } catch (error) {
    return error;
  }
};

// Operazione per eliminare un utente
User.deleteUser = async (userId) => {
  try {
    await User.destroy({ where: { UserID: userId } });
  } catch (error) {
    return error;
  }
};

User.findByCondition = async (condition) => {
    try {
      const users = await User.findAll({
        where: condition, 
      });
  
      return users;
    } catch (error) {
      return error;
    }
};



// Sincronizza il modello con il database
mysequelize.sequelize.sync();

module.exports = User;
