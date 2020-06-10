import express from "express";
import rootRouts from "./root";

const router = express.Router();

router.use("/", rootRouts);

export default router;
