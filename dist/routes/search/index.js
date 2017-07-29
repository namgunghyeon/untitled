'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _search = require('../../controllers/search');

function search(router) {
  router.get('/', _search.searchKeywords);
  return router;
}exports.default =

{
  search: search };