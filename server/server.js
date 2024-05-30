import mongoose from "mongoose";
import express from "express"

mongoose.connect('mongodb+srv://Szabolcs:Szabolcs0404@cluster0.imzxvi2.mongodb.net/')

const app = express();

app.use(express.json());

app.listen(4040, () => console.log('Server started on port 4040'));

