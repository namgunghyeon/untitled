import request from 'request';
import logger from '../../shared/logger';
import { get } from '../../shared/utils/env';
import config from '../../shared/config.json';

const env = get();
const URL = `${config[env].api.host}:${config[env].api.port}`;

function searchKeywords({ project, version, type, name }, callback) {
    const params = `{search(project:"${project}", version:"${version}", type:"${type}",name:"${name}"){Project,Version,Name,Path,Type}}`;
    const path = `/graphql?query=${params}`;
    logger.info(URL, path);
    request({ url: URL + path }, (error, response, body) => {
        callback(error, response, body);
    });
}

export default {
    searchKeywords,
};
