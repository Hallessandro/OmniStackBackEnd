const express = require("express");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

const multer = require("multer");
const uploadConfig = require("./config/upload");

const routes = express.Router();
//O multer é usado para lidar com multipart files, ou imagens no nosso caso
const upload = multer(uploadConfig);

routes.get("/", (req, res) => {
    return res.json({message: "E ai mano!"});
});

routes.post("/sessions", SessionController.store);

routes.post("/spots", upload.single('thumbnail'), SpotController.store);
routes.get("/spots", SpotController.index);

routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);

module.exports = routes;