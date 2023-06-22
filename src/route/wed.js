import express from "express";
import { getHomePage, getAboutMe } from "../controllers/homeController";
let router = express.Router();
let initWedRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/introduce", getAboutMe);
  // res api
  router.get("/huy", (rep, res) => {
    return res.send("hello world with Nguyen Duc Huy");
  });
  return app.use("/", router);
};
module.exports = initWedRoutes;
