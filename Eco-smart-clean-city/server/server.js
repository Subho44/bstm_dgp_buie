const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const areaRoutes = require('./routes/areaRoutes');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const connectdb = require ('./config/db')
dotenv.config();
connectdb();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('uploads'));
app.use('/api/areas',areaRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/payment',paymentRoutes);

const PORT = process.env.PORT || 5600;
app.listen(PORT,()=>console.log("server is running port 5600"));