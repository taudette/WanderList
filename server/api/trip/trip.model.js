'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TripSchema = new Schema({
  country: String,
  region: String,
  duration: String,
  info: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

});


module.exports = mongoose.model('Trip', TripSchema);