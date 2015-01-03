'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TorrentSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Torrent', TorrentSchema);