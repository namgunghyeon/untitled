import express from 'express';
import path from 'path';

const app = express();

app.set('port', process.env.PORT || 3001);

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

/* eslint no-console: ["error", { allow: ["log"] }] */
app.listen(app.get('port'), () => {
  console.log(`App started at port ${app.get('port')}`);
});