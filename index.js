import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import brandcenter from './routes/brandcenter.js';
import cardroute from './routes/cardroute.js';

const app = express();

const url="mongodb+srv://Remeesha:123@fa18-bce-109.ho65d.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to the Database"));
app.listen(5000);
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/brandcenter",brandcenter);
app.use("/viewbrandcenter",brandcenter);
app.use("/viewcarddata",cardroute);