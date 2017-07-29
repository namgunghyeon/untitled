'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _winston = require('winston');var _winston2 = _interopRequireDefault(_winston);
var _momentTimezone = require('moment-timezone');var _momentTimezone2 = _interopRequireDefault(_momentTimezone);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var tsFormat = function tsFormat() {return (0, _momentTimezone2.default)().utc().format('YYYY-MM-DD HH:mm:ss UTC');};
var logger = new _winston2.default.Logger({
  transports: [
  new _winston2.default.transports.Console({
    timestamp: tsFormat,
    colorize: true,
    level: 'info' })] });



var warn = logger.warn;
var info = logger.info;
var verbose = logger.verbose;
var debug = logger.debug;


function error() {
  _winston2.default.error.apply(_winston2.default, arguments);
}

function errorAndCallback(errorParam, callback) {
  _winston2.default.error(errorParam);
  return callback(errorParam);
}

var LOG_LEVELS = {
  error: 'error',
  warn: 'warn',
  info: 'info',
  verbose: 'verbose',
  debug: 'debug' };


function selectLogLevel() {var logLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.env.LOG_LEVEL;
  var logLevels = Object.keys(LOG_LEVELS);
  if (logLevels.includes(logLevel)) {
    return logLevel;
  }
  return LOG_LEVELS.debug;
}

function setLogLevel(logLevel) {
  var level = selectLogLevel(logLevel);
  _winston2.default.setLevels(level);

  process.env.LOG_LEVEL = level;
}

function getLogLevel() {
  return process.env.LOG_LEVEL;
}exports.default =

{
  error: error,
  warn: warn,
  info: info,
  verbose: verbose,
  debug: debug,
  errorAndCallback: errorAndCallback,
  setLogLevel: setLogLevel,
  getLogLevel: getLogLevel };