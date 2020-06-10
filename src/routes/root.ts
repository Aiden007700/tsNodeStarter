import express from "express";
import rootController from "../controllers/rootController";

const router = express.Router();

router.get("/", rootController.index);
router.get("/sign-up", rootController.signUp);
router.post("/sign-up", rootController.postSignUp);
router.get("/log-in", rootController.logIn);
router.post("/log-in", rootController.postLogIn);
router.get("/log-out", rootController.logOut);

export default router;
