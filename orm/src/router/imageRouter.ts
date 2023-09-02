import {Router} from "express";
import imageController from "../controller/likeController";

const imageRouter = Router();
imageRouter.get('/', imageController.findAll);
imageRouter.post('/', imageController.add);
imageRouter.delete('/:id', imageController.delete);
imageRouter.get('/:id', imageController.findById);

export default imageRouter;
