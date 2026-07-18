import express from "express";
import {
  createProposal,
  getPitches,
  deletePitch,
  deleteAllPitches,
} from "../controllers/pitchController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", protect, getPitches);
router.post("/proposal", protect, createProposal);

router.delete("/:id", protect, deletePitch);
router.delete("/", protect, deleteAllPitches);
export default router;
