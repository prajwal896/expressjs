import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    name: String,
    description: String,
    completed: Boolean
});

export const Todo = mongoose.model('Todo', todoSchema);