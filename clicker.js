import express from 'express';
import { Dummy } from './models/dummy.js';
import mongoose from 'mongoose';
import path from 'path';
import { Script } from 'vm';


await mongoose.connect('mongodb+srv://prajwaladaki999_db_user:afbIXqNIEG9q24p1@cluster0.fcq1ddr.mongodb.net/dummy');
const app = express()
const port = 3000

const names = ["Rahul", "Amit", "Sneha", "Priya", "Rohan", "Karan", "Neha", "Arjun", "Simran", "Vikram"];
const salaries = [25000, 30000, 45000, 50000, 28000, 60000, 35000, 40000, 55000, 32000];
const languages = ["JavaScript", "Python", "Java", "C++", "Go", "Ruby", "PHP", "TypeScript", "Swift", "Kotlin"];
const cities = ["Mumbai", "Pune", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Nagpur", "Kolkata", "Ahmedabad", "Jaipur"];
const isEmployed = [true, false, true, true, false, true, false, true, true, false];
let i = Math.floor(Math.random() * 10);
let j = Math.floor(Math.random() * 10);
let k = Math.floor(Math.random() * 10);
let l = Math.floor(Math.random() * 10);
let m = Math.floor(Math.random() * 10);


app.get('/', (req, res) => {
    res.sendFile(path.resolve('./clicker.html'));
})
app.get('/generate', (req, res) => {
    let cc = new Dummy({ name: names[i], salary: salaries[j], language: languages[k], city: cities[l], isEmployed: isEmployed[m] });
    cc.save();
    res.send('Data generated and saved to MongoDB!');
})
app.get('/delete', (req, res) => {
    Dummy.deleteMany({}).then(() => {
        res.send('All data deleted from MongoDB!');
    });


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})