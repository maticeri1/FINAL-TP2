import { Router } from "express";
import xRoutes from "./xRoutes.js";
import { generalError } from "../Midleware/GeneralError.js";



const router=Router()

router.use("/x", xRoutes)
router.use(generalError)

export default router