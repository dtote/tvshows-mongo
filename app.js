import express from 'express';
import mongoose from 'mongoose';
import { router as tvshowsRouter } from './routes/tvshows.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.use(tvshowsRouter);

mongoose
  .connect('mongodb://localhost:27017', { dbName: 'tvshows', user: 'root', pass: 'rootpassword' })
  .then(() => console.log('Connected to Database'))
  .catch((err) => console.log('ERROR: connecting to Database. ' + err));

app.listen(3000, function () {
  console.log('Node server running on http://localhost:3000');
});
