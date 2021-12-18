import monoose, { model } from 'mongoose';

const Schema = monoose.Schema;

const ApplicationSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    task: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
    },
    date: {
        type: String,
        trim: true,
    },
    hours: {
        type: String,
        trim: true
    }
})

export default monoose.model('appSchema', ApplicationSchema)