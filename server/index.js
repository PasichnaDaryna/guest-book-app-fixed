import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'


import contactsRoutes from './routes/contacts.js'



const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/contacts', contactsRoutes)

app.get('/', (req, res) => {
    res.send('Hello to our guest book API')
})


const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);


// if (process.env.NODE_ENV === 'production') {
//     //     // Exprees will serve up production assets
//     app.use(express.static('client/build'));

//     //     // Express serve up index.html file if it doesn't recognize route

//     app.get('/', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }