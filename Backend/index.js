const dns = require('dns');
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const userRoutes = require('./routes/authRoutes');
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URI).then(() => {
      console.log("Database connected");
}).catch((error) => {
      console.log(`Database connection failed error: ${error}`);
});

app.use("/api/auth", userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
});