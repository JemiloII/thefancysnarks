/**
* Forums.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  schema: true,
  attributes: {
  	title: {
  		type: 'string',
  		required: true
  	},
    description: {
      type: 'text'
    },
  	parent: {
  		model: 'forum'
  	},
    forums: {
      collection: 'forum',
      via: 'parent'
    },
    threads:{
      collection: 'thread',
      via: 'forum'
    },
  	createdBy: {
  		model: 'member'
  	}, 
  	order: {
  		type: 'integer'
  	}
  }

};