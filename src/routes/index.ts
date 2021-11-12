import  {Router} from 'express';
import { getFotografo } from '../controllers/fotografo.controller';
const router = Router();

import {createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto} from '../controllers/photo.controller'

import multer from '../libs/multer'

router.route('/photos')
   .post(multer.single('image'), createPhoto)
   .get(getPhotos)

   router.route('/photos/:id')
   .get(getPhoto)
   .delete(deletePhoto)
   .put(updatePhoto)

router.route('/fotografo')
   .get(getFotografo)
   .post(createPhoto)
   

   router.route('/fotografo/:id')
   .get(getFotografo)
   

export default router;