import { TVShow } from '../models/tvshow';

export async function findAllTVShows(req, res) {
  try {
    console.log('GET /tvshows');
    const tvshows = await TVShow.find({});

    res.send(tvshows);
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}
