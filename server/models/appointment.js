var mongoose = require('mongoose');
var validator = require('mongoose-validators');

var AppointmentSchema = new mongoose.Schema({
	user: {type: String, required: true, minlength: 3},
	complaint: {type: String, required: true, minlength: 10},
	time: {type: String, required: true},
	date: {type: Date, required: true},
	created_at: {type: Date, default: Date.now}
});

mongoose.model('Appointment', AppointmentSchema);