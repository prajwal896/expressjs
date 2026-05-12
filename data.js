import express from 'express';
import { Todo } from './models/todo.js';
import mongoose from 'mongoose';
await mongoose.connect('mongodb+srv://prajwaladaki999_db_user:afbIXqNIEG9q24p1@cluster0.fcq1ddr.mongodb.net/todo');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let cc = new Todo({ name: "prajwal", description: "this is a todo", completed: false });
    cc.save();
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})