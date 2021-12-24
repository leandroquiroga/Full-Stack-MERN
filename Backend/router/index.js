import Express from "express";
import { registerNewTask, pageIndex, editTask, getHomework, deleteTask } from "../controllers/pageControllers.js";

const router = Express.Router();

router.get('/task', pageIndex);

router.post('/task', registerNewTask);

router.put('/:id', editTask);

router.get('/:id', getHomework)

router.delete('/:id', deleteTask);

export default router;