/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Show = require('./Show.model');

exports.register = function(socket) {
  Show.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Show.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('Show:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('Show:remove', doc);
}