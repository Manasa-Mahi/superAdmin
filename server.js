const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbconfig.js");
const cors = require('cors');
dotenv.config();

connectDB();
const dashboardRoutes = require('./routes/dashboardRoutes.js');
const userRoutes = require('./routes/userDetailRoutes.js');
const downloadRoutes = require('./routes/download');

const app = express();
app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/authRoutes.js');


app.use('/api', dashboardRoutes);

app.use('/api', userRoutes);
app.use('/api',authRoutes);
app.use('/api/files', downloadRoutes);



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));