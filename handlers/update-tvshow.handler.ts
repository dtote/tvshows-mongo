import { TVShow } from '../models/tvshow';

export async function updateTVShow(req, res) {
  try {
    const propsToUpdate = req.body;
    const updatedTvShow = await TVShow.findByIdAndUpdate(req.params.id, propsToUpdate, { returnOriginal: false });

    console.log('Updated');
    res.send(updatedTvShow);
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}
