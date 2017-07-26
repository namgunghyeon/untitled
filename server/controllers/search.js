import searchModel from '../model/search';

// http://localhost:3001/api/search?project=angular&version=1.6.4&type=function&name=get
function searchKeywords(req, res) {
    const {
        project,
        version,
        type,
        name,
    } = req.query;
    searchModel.searchKeywords({ project, version, type, name }, (error, response, body) => {
        res.send(body);
    });
}

export {
    searchKeywords,
};
