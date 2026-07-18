import express from "express";
import { createProposal } from "../controllers/pitchController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/proposal", protect, createProposal);

export default router;
