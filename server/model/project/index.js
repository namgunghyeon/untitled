import request from 'request';
import logger from '../../shared/logger';
import { get } from '../../shared/utils/env';
import config from '../../shared/config';

const env = get();
const URL = `${config[env].api.host}:${config[env].api.port}`;

function projects(callback) {
  const params = '{projects{Name,Color}}';
  const path = `/graphql?query=${params}`;
  logger.info(URL, path);
  request({ url: URL + path }, (error, response, body) => {
    callback(error, response, body);
  });
}

export default {
  projects,
};
