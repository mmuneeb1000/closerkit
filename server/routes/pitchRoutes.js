import express from "express";
import {
  createProposal,
  getPitches,
  deletePitch,
} from "../controllers/pitchController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", protect, getPitches);
router.post("/proposal", protect, createProposal);

router.delete("/:id", protect, deletePitch);
export default router;
