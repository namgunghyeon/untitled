'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _logger = require('../shared/logger');var _logger2 = _interopRequireDefault(_logger);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function printJson(object) {
  if (!object) {
    return '{}';
  }
  try {
    return JSON.stringify(object);
  } catch (e) {
    return '{}';
  }
}

function log(req, res, next) {
  try {
    _logger2.default.info(process.pid + ',' + req.socket.remoteAddress + ',' + req.method + ',' + req.url + ',' + printJson(req.query) + ',' + printJson(req.body));
  } catch (error) {
    _logger2.default.error(error);
  }
  return next();
}exports.default =

{
  log: log };