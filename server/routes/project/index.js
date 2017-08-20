import express from 'express';
import { getProjects } from '../../controllers/project';

function project() {
  const router = express.Router();
  router.get('/', getProjects);
  return router;
}

export default {
  project,
};
