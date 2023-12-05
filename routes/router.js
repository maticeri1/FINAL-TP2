import { Router } from "express";
import votoRoutes from "./VotoRoutes.js";
import { generalError } from "../Midleware/GeneralError.js";



const router=Router()

router.use("/voto", votoRoutes)
router.use(generalError)

export default router