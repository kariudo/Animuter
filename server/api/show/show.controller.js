/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /shows              ->  index
 * POST    /shows              ->  create
 * GET     /shows/:id          ->  show
 * PUT     /shows/:id          ->  update
 * DELETE  /shows/:id          ->  destroy
 */

'use strict';

var _ = require('lodash'),
  Show = require('./show.model'),
  fs = require('fs-extra'),
  request = require('request');

var TVDBClient = require("node-tvdb"),
    client     = new TVDBClient("E638281A6C63B242");


// Get list of shows
exports.index = function(req, res) {
  Show.find(function (err, shows) {
    if(err) { return handleError(res, err); }
    return res.json(200, shows);
  });
};

// Get a single show
exports.show = function(req, res) {
  Show.findById(req.params.id, function (err, show) {
    if(err) { return handleError(res, err); }
    if(!show) { return res.send(404); }
    return res.json(show);
  });
};

// Creates a new show in the DB.
exports.create = function(req, res) {
  Show.create(req.body, function(err, show) {
    if(err) { return handleError(res, err); }
    // Cache the banner images
    var uri = 'http://thetvdb.com/banners/'+show.banner;
    download(uri, show.banner, function() {console.log ('In theory, we just saved the banner to cache...')});
    return res.json(201, show);
  });
};

// Updates an existing show in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Show.findById(req.params.id, function (err, show) {
    if (err) { return handleError(res, err); }
    if(!show) { return res.send(404); }
    var updated = _.merge(show, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, show);
    });
  });
};

// Deletes a show from the DB.
exports.destroy = function(req, res) {
  Show.findById(req.params.id, function (err, show) {
    if(err) { return handleError(res, err); }
    if(!show) { return res.send(404); }
    show.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

// Find a show by Name in tvdb
exports.tvdbFindByName = function (req,res) {
  client.getSeries(req.params.name, function (err, series) {
    if(err) { return handleError(res, err); }
    if(!req.params.name) { return res.send(404); }
    return res.json(200, series);
  });
};

exports.tvdbDetail = function (req, res) {
   client.getSeriesAllById(req.params.id, function (err, detail) {
     if(err) { return handleError(res, err); }
     if(!req.params.id) { return res.send(404); }
     return res.json(200, detail); 
   });
};

function handleError(res, err) {
  return res.send(500, err);
}

var download = function(uri, filename, callback){
  console.log(uri);
  request.head(uri, function(err, res, body){
     console.log('content-type:', res.headers['content-type']);
     console.log('content-length:', res.headers['content-length']);
    fs.ensureFileSync(filename, function (err) {
      console.log(err);
      // in theory the file should be touched by this...
      // lets try this sync instead...
    });
    // then written to here...
    request(uri).pipe(fs.createWriteStream(filename)).on('close',callback);

  });
};