const
  Password = require('../libs/Password');

const initUserModel = (sequelize,DataTypes) => {
  const User = sequelize.define('User',{
    id_user:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    username:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
      allowEmpty:false
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isEmail:{
          msg:'Not an email...'
        }
      }
    },
    register_date:{
      type:DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
    number_of_reports:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },
    is_activated:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    },
    password_change_date:{
      type:DataTypes.DATE,
      allowNull:true,
      defaultValue:null
    },
    username_change_date:{
      type:DataTypes.DATE,
      allowNull:true,
      defaultValue:null
    }
  },{
    freezeTableName:true,
    timestamps:false,
    tableName:'User'
  });

  User.addHook('beforeCreate',async (user) => {
    try {
      user.password = await Password.hash(user.password);
    } catch(e) {
      throw e;
    }
  });

  User.associate = (models) => {    
    User.belongsTo(models.Role,{
      foreignKey:{
        defaultValue:1
      }
    });

    User.belongsToMany(models.Poll,{
      through:'UserPoll',
      onDelete:'cascade'
    });

    User.hasMany(models.Poll);
    User.hasMany(models.Report);
    User.hasOne(models.Token);
  }

  return User;
}

module.exports = initUserModel;