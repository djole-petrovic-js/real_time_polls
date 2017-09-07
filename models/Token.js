const initTokenModel = (sequelize,DataTypes) => {
  const Token = sequelize.define('Token',{
    id_token:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    token:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    created_date:{
      type:DataTypes.DATE,
      defaultValue:DataTypes.NOW
    }
  },{
    freezeTableName:true,
    timestamps:false,
    tableName:'Token'
  });

  Token.associate = (models) => {
    Token.belongsTo(models.User);
  }

  return Token;
}

module.exports = initTokenModel;