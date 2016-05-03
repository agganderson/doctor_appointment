var mongoose = require('mongoose');
var MODELNAME = mongoose.model('MODELNAME');

module.exports = (function(){
	return {
		index: function(req, res){
			MODELNAME.find({}, function(err, results){
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
			var newMODELNAME = new MODELNAME(req.body);
			newMODELNAME.save(function(err, results){
				if(err){
					console.log("Couldn't save it sorry not sorry", results);
				}
				else {
					console.log('SSAAAAAAAAAAFE');
					res.json(results).
				}
			});
		}
	}
})();