require('dotenv').config();
const mongoose = require('mongoose');
async function connectToMongoDB() {
    try {
        const url = process.env.MONGO_URL;
        await mongoose.connect(url);
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

module.exports = {
    connectToMongoDB,
}
