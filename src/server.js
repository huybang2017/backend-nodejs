import express from "express";
import bodyParser, { json } from "body-parser";
import viewEngine from "./config/viewEngine";
import initWedRoutes from "./route/wed";
require("dotenv").config();

let app = express();

// config app

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

viewEngine(app);
initWedRoutes(app);

let port = process.env.PORT || 6969;
// port == underfined => port = 6969
app.listen(port, () => {
  // call back
  console.log("Backend Nodejs is running on the port: " + port);
});
