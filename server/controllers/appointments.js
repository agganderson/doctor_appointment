var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

module.exports = (function(){
	return {
		index: function(req, res){
			Appointment.find({}, function(err, results){
				if(err){
					console.log("Didn't get what you were looking for", results);
				}
				else {
					console.log('GOT IT');
					res.json(results);
				}
			});
		}, 
		create: function(req, res){
			console.log('about to save this ish');
			var newAppointment = new Appointment({user: req.body.user, complaint: req.body.complaint, time: req.body.time, date: req.body.date});
			// console.log({complaint: req.body.complaint});
			newAppointment.save(function(err, results){
				if(err){
					console.log("Couldn't save it sorry not sorry", results);
				}
				else {
					console.log('SSAAAAAAAAAAFE');
					res.json(results);
				}
			});
		},
		delete: function(req, res){
			console.log('bout to delete');
			Appointment.findOneAndRemove({_id: req.params.id}, function(err, results){
				if(err){
					console.log('Error in cancelling that app', results);
				}
				else {
					console.log('Canceled!');
					res.json(results);
				}
			});
		}
	}
})();