import request from 'request';
import queryString from 'query-string';
import logger from '../../shared/logger';

const URL = 'http://localhost:3001';

function searchKeywords({ project, version, type, name }, callback) {
    const stringified = queryString.stringify({ project, version, type, name });
    const path = `/1api/search?${stringified}`;
    request({ url: URL + path }, (error, response, body) => {
        logger.info(error, response, body);
        callback(error, response, body);
    });
}

export default {
    searchKeywords,
};
