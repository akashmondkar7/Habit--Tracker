import express from "express";

import {
  home,
  createHabit,
  weeklyView,
  toggleStatus,
} from "../controllers/habitController.js";

const router = express.Router();

// Home Page
router.get("/", home);

// Create Habit
router.post("/create", createHabit);

// Weekly View
router.get("/weekly/:id", weeklyView);

// Toggle Status
router.get("/toggle/:habitId/:date", toggleStatus);

export default router;