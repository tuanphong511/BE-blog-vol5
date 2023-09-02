import {Router} from "express";
import userRouter from "./userRouter";
import blogRouter from "./blogRouter";
import likeRouter from "./likeRouter";

const router = Router();
router.use('/users', userRouter);
router.use('/blogs', blogRouter);
router.use('/likes', likeRouter);
export default router;
