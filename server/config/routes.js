var appointments = require('./../controllers/appointments.js');

module.exports = function(app){
	app.get('/appointments', function(req, res){
		console.log('in app get route');
		appointments.index(req, res);
	});

	app.post('/appointments', function(req, res){
		console.log('in app post route');
		appointments.create(req, res);
	});

	app.post('/deleteAppointment/:id', function(req, res){
		appointments.delete(req, res, req.params.id);
	});
}