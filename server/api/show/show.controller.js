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
  request = require('request'),
  easyimg = require('easyimage');

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
      // Cache the banner images
      getBanner(detail.banner);
      getBanner(detail.poster, true);
      getBanner(detail.fanart);
      
     return res.json(200, detail); 
   });
};

function handleError(res, err) {
  console.log(err);
  return res.send(500, err);
}

function download(uri, filename, callback){
  console.log(uri);
  console.log(filename);
  // request.head(uri, function(err, res, body){
  //   console.log('content-type:', res.headers['content-type']);
  //   console.log('content-length:', res.headers['content-length']);
        fs.ensureFile(filename, function (err) {
          if(err) console.log(err);
          // Stream in contents of image if it's not already there.
          if(!imgExists(filename)) {
            console.log('Saving image....');
            request(uri).pipe(fs.createWriteStream(filename)).on('close',callback);
          } else {
            console.log('Already have that image saved.');
          }
        });

  // });
};

function getBanner(path, thumb) {
  var uri = 'http://thetvdb.com/banners/'+ path;
  download(uri, 'client/assets/cache/'+ path, function() {
    console.log ('Image saved.');
    if(thumb) {
      console.log('Attempting to create thumbnail');
      fs.ensureFileSync('client/assets/cache/thumbs/'+path);
      easyimg.resize({src:'client/assets/cache/' + path, dst:'client/assets/cache/thumbs/'+path, width:100, height:147}).then(
        function(image) {
           console.log('Resized: ' + image.width + ' x ' + image.height);
        },
        function (err) {
          console.log(err);
        });
    }
  });
}

function imgExists(filename) {
  console.log('Checking for file ' +filename);
  var stats = fs.statSync(filename);
  var fileSizeInBytes = stats["size"];
  return fileSizeInBytes>0 ? true : false;
}

