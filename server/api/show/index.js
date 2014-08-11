'use strict';

var express = require('express');
var controller = require('./show.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
// Test routes for searching
router.get('/tvdb/:name', controller.tvdbFindByName);
router.get('/tvdb/detail/:id', controller.tvdbDetail);
module.exports = router;