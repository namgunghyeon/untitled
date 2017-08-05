import { searchKeywordIndex, searchKeyword } from '../../controllers/search';

function search(router) {
  router.get('/', searchKeywordIndex);
  router.get('/detail', searchKeyword);
  return router;
}

export default {
  search,
};
