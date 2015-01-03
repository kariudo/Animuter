/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Torrent = require('./torrent.model');

exports.register = function(socket) {
  Torrent.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Torrent.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('torrent:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('torrent:remove', doc);
}