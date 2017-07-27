import { searchKeywords } from '../../controllers/search';

function search(router) {
  router.get('/', searchKeywords);
  return router;
}

export default {
  search,
};
