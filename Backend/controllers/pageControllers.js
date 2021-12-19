import ApplicationSchema from '../models/modelsDB.js'

// Return every data of database
const pageIndex = async (req, res) => {
    const listTask = await ApplicationSchema.find();
    const arrTask = JSON.stringify(listTask);

    if (arrTask.length > 0) {
        res.send(arrTask)
    } else {
        res.json({
            message: 'No hay tareas disponibles'
        })
    }
}

// Return only one data of databe by it id
const getHomework = async (req, res, next) => {
    try {
        const task = await ApplicationSchema.findById(req.params.id);
        res.json(task)
    } catch (err) {
        console.log(err);
        next();
    }
}

// Insert a new task in the databese
const registerNewTask = async (req, res, next) => {
    const { name, task, complete, date, hours } = req.body; 
    let insertTask = new ApplicationSchema({name, task, complete, date, hours});
    try {
        await insertTask.save();
        res.json({
            message: 'Has been add a new task succcess'
        })
    } catch (err) {
        console.log(err);
        next()
    }
}
 
// Update a task in the databes by it ID
const editTask = async (req, res, next) => {
    const { name, task, complete, date, hours } = req.body; 
    let id = req.params.id;

    try {
        let taskUpdate = await ApplicationSchema.findOneAndUpdate({ _id: id }, {
            $set: {
                name,
                task,
                complete,
                date,
                hours
            }
        }, { new: true });

        res.json(taskUpdate);

    } catch (error) {
        console.log(error);
        next()
    }
} 

// Delete task by ID
const deleteTask = async (req, res, next) => {
    const id = req.params.id;

    try {
        await ApplicationSchema.findByIdAndDelete({ _id: id });
        res.json({message: 'La tarea fue completada correctamete'})
    } catch (error) {
        console.log(error);
        next()
    }
}


export { 
    pageIndex,
    registerNewTask,
    editTask,
    getHomework,
    deleteTask
}