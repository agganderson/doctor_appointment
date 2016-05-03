var controller name = require('./../controllers/!!!!!!controller name');

module.exports = function(app){
	app.get('/routeNAMEhere', function(req, res){
		console.log('in app get route');
		HEREisYOURcontrollerNAME.index(req, res);
	});

	app.post('/routeNAMEhere', function(req, res){
		console.log('in app post route');
		HEREisYOURcontrollerNAME.create(req, res);
	});

	//route with id parameter example!
	// app.get('/getPoll/:id', function(req, res){
	// 	polls.getThisPoll(req, res, req.params.id);
	// });
}