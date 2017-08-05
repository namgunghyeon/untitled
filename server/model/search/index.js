import request from 'request';
import logger from '../../shared/logger';
import { get } from '../../shared/utils/env';
import config from '../../shared/config';

const env = get();
const URL = `${config[env].api.host}:${config[env].api.port}`;

function searchKeywordIndex({ name }, callback) {
  const params = `{keywordIndex(name:"${name}"){Keyword}}`;
  const path = `/graphql?query=${params}`;
  logger.info(URL, path);
  request({ url: URL + path }, (error, response, body) => {
    callback(error, response, body);
  });
}

function searchKeyword({ name }, callback) {
  const params = `{keyword(name:"${name}"){Project,Version,KeywordIndex,Path,Type}}`;
  const path = `/graphql?query=${params}`;
  logger.info(URL, path);
  request({ url: URL + path }, (error, response, body) => {
    callback(error, response, body);
  });
}

export default {
  searchKeywordIndex,
  searchKeyword,
};
