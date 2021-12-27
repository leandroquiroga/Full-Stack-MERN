import Express from "express";
import { registerNewTask, pageIndex, editTask, getHomework, deleteTask } from "../controllers/pageControllers.js";

const router = Express.Router();

router.get('/task', pageIndex);

router.post('/task', registerNewTask);

router.put('/task/:id', editTask);

router.get('/task/:id', getHomework)

router.delete('/task/:id', deleteTask);

export default router;