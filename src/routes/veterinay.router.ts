import { Router } from "express";
import { veterinaryValidator } from "../middlewares/validators/veterinary.validator";
import {
	createVeterinary,
	getAllVeterinary,
	getVeterinaryId,
	updateVeterinary,
	deleteVet,
} from "../controller/veterinary.controller";

const veterinaryRouter = Router();

veterinaryRouter.get("/", getAllVeterinary);
veterinaryRouter.post("/", veterinaryValidator, createVeterinary);
veterinaryRouter.get("/:id", getVeterinaryId);
veterinaryRouter.put("/:id", updateVeterinary);
veterinaryRouter.delete("/:id", deleteVet);

export default veterinaryRouter;
