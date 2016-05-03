var mongoose = require('mongoose');

var MODELNAMESchema = new mongoose.Schema({
	//examples
	// user: {type: String, required: true, minlength: 3},
	//vote: {type: Number, default: 0},
	created_at: {type: Date, default: new Date}
});

mongoose.model('MODELNAME', MODELNAMESchema);