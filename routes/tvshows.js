import express from 'express';
import { TVShow } from '../models/tvshow.js';

export const router = express.Router();

const findAllTVShows = async function (req, res) {
  try {
    console.log('GET /tvshows');
    const tvshows = await TVShow.find({});

    res.send(tvshows);
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};

const findById = async function (req, res) {
  try {
    console.log('GET /tvshow/' + req.params.id);
    const foundTvShow = await TVShow.findById(req.params.id);

    res.send(foundTvShow);
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};

const addTVShow = async function (req, res) {
  console.log('POST');
  console.log(req.body);

  // TODO: genre must be a valid enum value
  const tvshow = new TVShow({
    title: req.body.title,
    year: req.body.year,
    country: req.body.country,
    poster: req.body.poster,
    seasons: req.body.seasons,
    genre: req.body.genre,
    summary: req.body.summary,
  });

  try {
    const createdTvshow = await tvshow.save();

    console.log('Created');
    res.send(createdTvshow);
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};

const updateTVShow = async function (req, res) {
  try {
    const propsToUpdate = req.body;
    const updatedTvShow = await TVShow.findByIdAndUpdate(req.params.id, propsToUpdate, { returnOriginal: false });

    console.log('Updated');
    res.send(updatedTvShow);
  } catch (error) {
    console.log('ERROR: ' + err);
  }
};

const deleteTVShow = async function (req, res) {
  try {
    const deleted = await TVShow.findByIdAndDelete(req.params.id);
    console.log({ deleted });
    if (deleted) {
      res.send('Removed');
    } else {
      res.status(404).send(`TV show with id <${req.params.id}> not found`);
    }
  } catch (error) {
    console.log('ERROR: ' + error);
  }
};

router.get('/tvshows', findAllTVShows);
router.get('/tvshow/:id', findById);
router.post('/tvshow', addTVShow);
router.put('/tvshow/:id', updateTVShow);
router.delete('/tvshow/:id', deleteTVShow);
