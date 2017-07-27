import winston from 'winston';
import moment from 'moment-timezone';

const tsFormat = () => (moment().utc().format('YYYY-MM-DD HH:mm:ss UTC'));
const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: 'info',
    }),
  ],
});
const warn = logger.warn;
const info = logger.info;
const verbose = logger.verbose;
const debug = logger.debug;


function error(...args) {
  winston.error(...args);
}

function errorAndCallback(errorParam, callback) {
  winston.error(errorParam);
  return callback(errorParam);
}

const LOG_LEVELS = {
  error: 'error',
  warn: 'warn',
  info: 'info',
  verbose: 'verbose',
  debug: 'debug',
};

function selectLogLevel(logLevel = process.env.LOG_LEVEL) {
  const logLevels = Object.keys(LOG_LEVELS);
  if (logLevels.includes(logLevel)) {
    return logLevel;
  }
  return LOG_LEVELS.debug;
}

function setLogLevel(logLevel) {
  const level = selectLogLevel(logLevel);
  winston.setLevels(level);

  process.env.LOG_LEVEL = level;
}

function getLogLevel() {
  return process.env.LOG_LEVEL;
}

export default {
  error,
  warn,
  info,
  verbose,
  debug,
  errorAndCallback,
  setLogLevel,
  getLogLevel,
};
