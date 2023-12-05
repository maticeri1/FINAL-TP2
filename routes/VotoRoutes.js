import { Router } from "express";
import VotoController from "../controllers/VotoController.js"

const votoController = new VotoController()
const votoRoutes= Router()

votoRoutes.post("/",votoController.create)
votoRoutes.get("/",votoController.getAll)


export default votoRoutes