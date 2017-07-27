import logger from '../shared/logger';

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
    logger.info(`${process.pid},${req.socket.remoteAddress},${req.method},${req.url},${printJson(req.query)},${printJson(req.body)}`);
  } catch (error) {
    logger.error(error);
  }
  return next();
}

export default {
  log,
};
