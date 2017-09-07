const initBannedEmailModel = (sequelize,DataTypes) => {
  const BannedEmail = sequelize.define('BannedEmail',{
    banned_email:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    }
  },{
    timestamps:false,
    frezeTableName:true,
    tableName:'BannedEmail'
  });

  return BannedEmail;
}

module.exports = initBannedEmailModel;