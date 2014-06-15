/**
* Forum.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	title: {
  		type: 'string',
  		unique: true,
  		required: true
  	},
  	parent: {
  		model: 'forums'
  	},
  	createdBy: {
  		model: 'members'
  	}, 
  	order: {
  		type: 'integer'
  	}
  }
  
};

