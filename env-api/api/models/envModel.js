'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EnvSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the environment'
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['live', 'pilot'],
    default: 'live'
  }
}, {collection: 'dev'});

module.exports = mongoose.model('Envs', EnvSchema);