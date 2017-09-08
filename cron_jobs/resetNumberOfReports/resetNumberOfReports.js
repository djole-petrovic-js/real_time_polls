const
	cron = require('node-cron');

const
	generateLog = require('../../utils/generateLog');

const {
	db:{ User }
} = require('../../models/models');

const task = cron.schedule('0 0 1 * *',async() => {
	try {
		await User.update({
			number_of_reports:0
		},{
			where:{
				is_activated:true
			}
		});
	} catch(e) {
		generateLog('polls',`Could not reset number of reports : ${ e }`);
	}
},false);

//task.start();

module.exports = task;