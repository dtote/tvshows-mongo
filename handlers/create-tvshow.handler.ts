import { TVShow } from '../models/tvshow';

export async function createTVShow(req, res) {
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
}
