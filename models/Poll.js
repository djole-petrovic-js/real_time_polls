const initPollModel = (sequelize,DataTypes) => {
  const Poll = sequelize.define('Poll',{
    id_poll:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    poll:{
      type:DataTypes.STRING(50),
      unique:true,
      allowNull:false
    },
    votes:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },
    created_date:{
      type:DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
    closed_at:{
      type:DataTypes.DATE,
      allowNull:true
    },
    is_active:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    },
    show_username:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    }
  },{
    freezeTableName:true,
    tableName:'Poll',
    timestamps:false
  });

  Poll.associate = (models) => {
    Poll.hasMany(models.Choice);
    Poll.belongsTo(models.User);

    Poll.belongsToMany(models.User,{
      through:'UserPoll',
      onDelete:'cascade'
    });
  }

  return Poll;
}

module.exports = initPollModel;