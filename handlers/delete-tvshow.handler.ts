import { TVShow } from '../models/tvshow';

export async function deleteTVShow(req, res) {
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
}
