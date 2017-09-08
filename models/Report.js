const initReportModel = (sequelize,DataTypes) => {
	const Report = sequelize.define('Report',{
		id_report:{
			type:DataTypes.INTEGER,
			primaryKey:true,
			autoIncrement:true
		},
		reason:{
			type:DataTypes.STRING,
			allowNull:false
		},
		report_date:{
			type:DataTypes.DATE,
			defaultValue:DataTypes.NOW
		}
	},{
		timestamps:false,
		freezeTableName:true,
		tableName:'Report'
	});

	Report.associate = (models) => {
		Report.belongsTo(models.Poll);
		Report.belongsTo(models.User);
	}

	return Report;
}

module.exports = initReportModel;