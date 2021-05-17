import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import contactsRoutes from './routes/contacts.js'
import logger from 'morgan';
import path from "path"



const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;



function start() {
    const server = express();
    initMiddlewares(server);
    initRoutes(server);
    connectToDb();
    listen(server);
}
const __dirname = path.resolve();
function initMiddlewares(server) {
    server.use(express.json());
    server.use(cors({ origin: "*" }));
    server.use(logger("dev"));
    server.use(express.static(path.join(__dirname, 'build')));
}


function initRoutes(server) {
    // heroku /contacts
    server.use('/contacts', contactsRoutes)
    server.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });


}

async function connectToDb() {
    try {
        await mongoose.connect(process.env.CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("Database connection successful");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

function listen(server) {
    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}

start();






