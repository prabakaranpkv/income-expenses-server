import express from "express";
import accountStatsCtrl from "../../controllers/accountStatsCtrl/accountStatsCtrl.js";

const accountStatsRoute = express.Router();

accountStatsRoute.get("/api/accounts-statistics", accountStatsCtrl);

export default accountStatsRoute;
