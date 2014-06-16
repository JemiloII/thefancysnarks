/**
 * ForumController
 *
 * @description :: Server-side logic for managing forums
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function (req, res) {
		Forums.find({parent: 1}).populate('createdBy').populate('parent').exec(function (err, results, next){
			if(err) return err;
			console.log(results);
			res.view({forums: results});
		});
	},
	threads: function (req, res){
		res.view({parent: req.param('title')});
	},
	posts: function (req, res){
		res.view({parent: req.param('title'), thread: req.param('thread')});
	}
};