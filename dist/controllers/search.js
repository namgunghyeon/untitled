'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.searchKeywords = undefined;var _search = require('../model/search');var _search2 = _interopRequireDefault(_search);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// http://localhost:3001/api/search?project=angular&version=1.6.4&type=function&name=get
function searchKeywords(req, res) {var _req$query =





  req.query,project = _req$query.project,version = _req$query.version,type = _req$query.type,name = _req$query.name;
  _search2.default.searchKeywords({ project: project, version: version, type: type, name: name }, function (error, response, body) {
    res.send(body);
  });
}exports.


searchKeywords = searchKeywords;