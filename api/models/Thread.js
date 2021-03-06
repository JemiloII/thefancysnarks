/**
* Threads.js
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
  	forum: {
  		model: 'forum'
  	},
    posts:{
      collection: 'post',
      via: 'thread'
    },
  	createdBy: {
  		model: 'member'
  	}
  }
};

