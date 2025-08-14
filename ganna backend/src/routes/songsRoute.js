import { addSong , listSong} from "../contollers/songsControlle.js";
import express from 'express'

const router = express.Router();

songRouter.post('/add',upload.fields([{name:'image',maxcount:1},{name:'audio',maxcount:1}]), addSong);
songRouter.get('/list', listSong);


export default songRouter;
