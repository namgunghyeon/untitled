'use strict';var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _logger = require('./shared/logger');var _logger2 = _interopRequireDefault(_logger);
var _access = require('./middlewares/access');var _access2 = _interopRequireDefault(_access);
var _search = require('./routes/search');var _search2 = _interopRequireDefault(_search);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var app = (0, _express2.default)();
var router = _express2.default.Router();

app.set('port', process.env.PORT || 3001);
app.use(_access2.default.log);

app.use(_express2.default.static(_path2.default.join(__dirname, '../client/build'), {
  index: false }));


app.use('/api/search', _search2.default.search(router));

app.all('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../client/build/index.html'));
});

app.listen(app.get('port'), function () {
  _logger2.default.info('App started at port ' + app.get('port'));
});