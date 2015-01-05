'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShowSchema = new Schema({
  id: Number,
  SeriesName: String,
  AliasNames: [String],
  Actors: [String],
  Airs_DayOfWeek: String,
  FirstAired: Date,
  Genre: [String],
  Network: String,
  Overview: String,
  Rating: Number,
  RatingCount: Number,
  Runtime: Number,
  Status: String,
  banner: String,
  fanart: String,
  poster: String,
  Episodes: [{
    id: Number,
    Name: String,
    EpisodeNumber: Number,
    Rating: Number,
    RatingCount: Number,
    SeasonNumber: Number,
    Overview: String,
    FirstAired: Date
  }],
  active: Boolean,
  subscribed: Boolean,
  torrentOptions: {
    name: String,
    resolution: Number,
    tag: String
  }
});

module.exports = mongoose.model('Show', ShowSchema);
