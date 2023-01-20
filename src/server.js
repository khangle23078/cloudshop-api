const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const productRoute = require('./routes/product.route');
const categoryRoute = require('./routes/category.route');
const connectDb = require('./database/connection');
const app = express();

dotenv.config()
app.use(express.json())
connectDb()

app.use('/api/product', productRoute)
app.use('/api/category', categoryRoute)

// mongoose.connect('mongodb://127.0.0.1:27017/test');
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
   console.log(`Server is running in port ${PORT}`);
})
