// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// const path = require("path")
// const reviewsRoutes = require("./routes/reviewsRoutes");

// dotenv.config();

// const PORT = process.env.PORT || 8080;

// function start() {
//     const server = express();
//     initMiddlewares(server);
//     initRoutes(server);
//     connectToDb();
//     listen(server);
// }

// function initMiddlewares(server) {
//     server.use(express.json());
//     server.use(cors({ origin: "*" }));
//     server.use(logger("dev"));
//     server.use("/images", express.static("public/images"));
//     // express static 
//     server.use(express.static(path.join(__dirname, 'build')));
// }


// function initRoutes(server) {
//     server.use("/reviews", reviewsRoutes);
//     server.get('/*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     });
// }

// async function connectToDb() {
//     try {
//         await mongoose.connect(process.env.DB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//         });
//         console.log("Database connection successful");
//     } catch (err) {
//         console.log(err.message);
//         process.exit(1);
//     }
// }

// function listen(server) {
//     server.listen(PORT, () => {
//         console.log(`Server is listening on port ${PORT}`);
//     });
// }

// start();