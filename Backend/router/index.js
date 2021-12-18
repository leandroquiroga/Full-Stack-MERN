import Express from "express";
import { pageIndex } from "../controllers/pageControllers.js";

const router = Express.Router()

router.get('/', pageIndex);

export default router;