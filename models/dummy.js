import mongoose from "mongoose";

const dummySchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isEmployed: Boolean
});

export const Dummy = mongoose.model('Dummy', dummySchema);