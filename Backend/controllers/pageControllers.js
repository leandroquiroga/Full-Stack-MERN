// import ApplicationSchema from '../models/modelsDB.js'


const pageIndex = async (req, res, next) => {
    console.log(req.body)
    res.json({
        message: 'Has been add a client succcess'
    })
}


export { 
    pageIndex
}