import express from 'express'
import { removeBgImage } from '../controllers/image.controller.js'
import { authUser } from '../middlewares/auth.js'

const imageRouter = express.Router();

imageRouter.post('/remove-bg', authUser, removeBgImage)

export default imageRouter;
