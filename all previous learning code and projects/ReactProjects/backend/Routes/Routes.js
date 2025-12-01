import { Router } from "express";
import { createUser, getUser } from "../Controllers/Users.js";

const router = Router()


router.post("/create-user", createUser)
router.get("/get-user", getUser)


export default router