/**
* Messages.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  //autosubscribe: true, //['destroy', 'update', 'create', 'find', 'add:messages', 'remove:messages'],
  autoWatch: true,
  attributes: {
  	body: 'text'
  }
};

