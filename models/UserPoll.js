//Model for users who voted

const initUserPollModel = (sequelize,DataTypes) => {
  const UserPoll = sequelize.define('UserPoll',{
    vote_date:{
      type:DataTypes.DATE,
      defaultValue:DataTypes.NOW
    }
  },{
    freezeTableName:true,
    tableName:'UserPoll',
    timestamps:false
  });

  UserPoll.associate = (models) => {
    UserPoll.belongsTo(models.Choice);
  }

  return UserPoll;
}

module.exports = initUserPollModel;