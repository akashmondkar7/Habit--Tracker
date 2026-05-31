import express from "express";

import {
  home,
  createHabit,
  toggleStatus,
  deleteHabit,
} from "../controllers/habitController.js";

const router = express.Router();

// Home Page
router.get("/", home);

// Create Habit
router.post("/create", createHabit);

// Toggle Status
router.get("/toggle/:habitId/:date", toggleStatus);

// Delete Habit
router.get("/delete/:id", deleteHabit);

export default router;
