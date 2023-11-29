import { Router } from "express";
import XController from "../controllers/xController.js";

const xController = new XController()
const xRoutes= Router()

xRoutes.post("/",xController.create)

export default xRoutes