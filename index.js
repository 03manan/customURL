const express = require("express")
const urlRoute = require("./routes/url.routes.js");
const  connectToMongoDB  = require("./db/connectDB.js");
const cors = require('cors');
require('dotenv').config();


const app = express()
// const allowedOrigins = ['http://localhost:5500', 'http://127.0.0.1:5500'];
const allowedOrigins = ['https://customurl-9d2h.onrender.com'];
// app.use(cors({
//     origin: 'http://localhost:5500'  // Allow only requests from this origin
//   }));
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

//middleware
app.use(express.json());


const PORT = 3000;

//DB Connection
connectToMongoDB()
//Routes
app.use("/api", urlRoute)



app.listen(PORT, () => {
    console.log(`Server se connection ho gya hai on port: ${PORT}`)
} )


// for deployement:
// require('dotenv').config();
// const express = require('express');
// const urlRoute = require('./routes/url.routes.js');
// const connectToMongoDB = require('./db/connectDB.js');
// const cors = require('cors');

// const app = express();

// // Enable CORS
// app.use(cors({
//     origin: process.env.CORS_ORIGIN
// }));

// // Middleware to parse JSON
// app.use(express.json());

// // Establish Database Connection
// connectToMongoDB();

// // Setup Routes
// app.use('/api', urlRoute);

// // Serve static files from the "client" directory
// app.use(express.static('client'));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is connected on port: ${PORT}`);
// });

// module.exports = app;
