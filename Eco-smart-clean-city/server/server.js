const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const areaRoutes = require('./routes/areaRoutes');
const connectdb = require ('./config/db')
dotenv.config();
connectdb();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('uploads'));
app.use('/api/areas',areaRoutes);

const PORT = process.env.PORT || 5600;
app.listen(PORT,()=>console.log("server is running port 5600"));