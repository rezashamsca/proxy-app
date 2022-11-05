'use strict';
module.exports = function(app) {
  var envList = require('../controllers/envController');

  app.route('/init')
    .post(envList.insert_env)

  app.route('/live')
    .get(envList.get_live_env)

  app.route('/flip')
    .put(envList.flip_env)
};