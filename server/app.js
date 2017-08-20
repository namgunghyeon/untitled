import express from 'express';
import path from 'path';
import logger from './shared/logger';
import access from './middlewares/access';
import searchRoute from './routes/search';
import projectRoute from './routes/project';

const app = express();
const router = express.Router();

app.set('port', process.env.PORT || 3001);
app.use(access.log);

app.use(express.static(path.join(__dirname, '../client/build'), {
  index: false,
}));

app.use('/api/search', searchRoute.search(router));
app.use('/api/project', projectRoute.project());

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(app.get('port'), () => {
  logger.info(`App started at port ${app.get('port')}`);
});
