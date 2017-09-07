const initChoiceModel = (sequelize,DataTypes) => {
  const Choice = sequelize.define('Choice',{
    id_choice:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    choice:{
      type:DataTypes.STRING(50),
      allowNull:false
    },
    number_of_votes:{
      type:DataTypes.INTEGER,
      defaultValue:0
    }
  },{
    freezeTableName:true,
    tableName:'Choice',
    timestamps:false
  });

  Choice.associate = (models) => {
    Choice.belongsTo(models.Poll,{
      onDelete:'cascade'
    });
  }

  return Choice;
}

module.exports = initChoiceModel;