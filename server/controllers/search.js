import searchModel from '../model/search';

// http://localhost:3001/api/search?project=angular&version=1.6.4&type=function&name=get
function searchKeywordIndex(req, res) {
  const {
    name,
    offset,
    limit,
  } = req.query;
  searchModel.searchKeywordIndex({ name, offset, limit }, (error, response, body) => {
    res.send(body);
  });
}

function searchKeyword(req, res) {
  const {
    name,
  } = req.query;
  searchModel.searchKeyword({ name }, (error, response, body) => {
    res.send(body);
  });
}

export {
  searchKeywordIndex,
  searchKeyword,
};
