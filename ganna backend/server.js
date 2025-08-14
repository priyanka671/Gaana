import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songsRoute.js';

// app config
const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();


//middlewares
app.use(express.json());
app.use(cors());

// routes

app.use("/api/song", songRouter);

app.get('/', (req, res) => res.send("API Working"));


app.listen(port, () => console.log(`Server started  on port ${port}`));
