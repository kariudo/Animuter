/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var show = require('./show.model');

exports.register = function(socket) {
  show.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  show.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('show:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('show:remove', doc);
}