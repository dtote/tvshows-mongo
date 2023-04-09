import express from 'express';
import { findAllTVShows } from '../handlers/find-all-tvshows.handler';
import { findTVShowById } from '../handlers/find-tvshow-by-id.handler';
import { createTVShow } from '../handlers/create-tvshow.handler';
import { updateTVShow } from '../handlers/update-tvshow.handler';
import { deleteTVShow } from '../handlers/delete-tvshow.handler';

export const router = express.Router();

router.get('/tvshows', findAllTVShows);
router.get('/tvshow/:id', findTVShowById);
router.post('/tvshow', createTVShow);
router.put('/tvshow/:id', updateTVShow);
router.delete('/tvshow/:id', deleteTVShow);
