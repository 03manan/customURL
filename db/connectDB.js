const mongoose = require("mongoose");

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://oxymanan160:1234@cluster0.oz0pei9.mongodb.net/customURL");
        console.log("Connected to MongoDB.")
    } catch (error) {
        console.log("Mongo DB connection error:", error)
    }
}

module.exports = connectToMongoDB;