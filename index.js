const express = require("express")
const urlRoute = require("./routes/url.routes.js");
const  connectToMongoDB  = require("./db/connectDB.js");
const cors = require('cors');


const app = express()
const allowedOrigins = ['http://localhost:5500', 'http://127.0.0.1:5500'];
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