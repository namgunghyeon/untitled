import express from 'express';
import path from 'path';
import logger from './shared/logger';

const app = express();

app.set('port', process.env.PORT || 3001);

app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(app.get('port'), () => {
    logger.info(`App started at port ${app.get('port')}`);
});
