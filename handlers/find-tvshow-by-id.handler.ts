import { TVShow } from '../models/tvshow';

export async function findTVShowById(req, res) {
  try {
    console.log('GET /tvshow/' + req.params.id);
    const foundTvShow = await TVShow.findById(req.params.id);

    res.send(foundTvShow);
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}
