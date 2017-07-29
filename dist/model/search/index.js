'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _request = require('request');var _request2 = _interopRequireDefault(_request);
var _logger = require('../../shared/logger');var _logger2 = _interopRequireDefault(_logger);
var _env = require('../../shared/utils/env');
var _config = require('../../shared/config');var _config2 = _interopRequireDefault(_config);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var env = (0, _env.get)();
var URL = _config2.default[env].api.host + ':' + _config2.default[env].api.port;

function searchKeywords(_ref, callback) {var project = _ref.project,version = _ref.version,type = _ref.type,name = _ref.name;
  var params = '{search(project:"' + project + '", version:"' + version + '", type:"' + type + '",name:"' + name + '"){Project,Version,Name,Path,Type}}';
  var path = '/graphql?query=' + params;
  _logger2.default.info(URL, path);
  (0, _request2.default)({ url: URL + path }, function (error, response, body) {
    callback(error, response, body);
  });
}exports.default =

{
  searchKeywords: searchKeywords };