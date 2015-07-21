'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TripSchema = new Schema({
  country: String,
  region: String,
  duration: String,
  info: String

});


module.exports = mongoose.model('Trip', TripSchema);