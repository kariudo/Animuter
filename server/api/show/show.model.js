'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShowSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Show', ShowSchema);