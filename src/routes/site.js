import express from "express";
const router = express.Router()

import SiteController from "../app/controllers/SiteController.js";

router.get("/search", SiteController.search)

router.get("/login", SiteController.login)
router.post("/login", SiteController.postLogin)

router.get("/", SiteController.index)

export default router