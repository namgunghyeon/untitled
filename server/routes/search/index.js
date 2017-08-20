import express from 'express';
import { searchKeywordIndex, searchKeyword } from '../../controllers/search';

function search() {
  const router = express.Router();
  router.get('/', searchKeywordIndex);
  router.get('/detail', searchKeyword);
  return router;
}

export default {
  search,
};
