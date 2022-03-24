require("dotenv").config();

const express = require("express");
const app = express();
const axios=require('axios');

const cors = require("cors");
const mongoose=require('mongoose');

const dbconnection = require("./db");

const authRoutes=require("./routes/auth.routes");
const userRoutes=require("./routes/user.routes");
const bookRoutes=require("./routes/book.routes");
const medicineRoutes=require("./routes/medicine.routes");
const clothsRoutes=require("./routes/cloths.routes");
const amountRoutes=require("./routes/amount.routes");
const profileRoutes=require("./routes/profile.routes");




// database connection
dbconnection();

// middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/googlelogin', authRoutes);
app.use('/api/userprofile', userRoutes);
app.use('/api/donatebook', bookRoutes);
app.use('/api/donatecloths', clothsRoutes);
app.use('/api/donatemedicine', medicineRoutes);
app.use('/api/donateamount', amountRoutes);
app.use('/api/userprofile', profileRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
