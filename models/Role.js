const initRoleModel = (sequelize,DataTypes) => {
  const Role = sequelize.define('Role',{
    id_role:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    role:{
      type:DataTypes.STRING(20),
      allowNull:false,
      unique:true
    }
  },{
    freezeTableName:true,
    tableName:'Role',
    timestamps:false
  });

  Role.associate = (models) => {
    Role.hasMany(models.User);
  }

  return Role;
}

module.exports = initRoleModel;