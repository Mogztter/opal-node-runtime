/* global Opal */
require('./opal.js');
require('./nodejs.js');
require('./pathname.js');
require('./base64.js');
require('./open-uri.js');

Opal.require('opal');

module.exports.Opal = Opal;
