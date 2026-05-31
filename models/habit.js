import mongoose from "mongoose";

// Schema for each day's record
const recordSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["done", "notdone", "none"],
    default: "none",
  },
});

// Main Habit Schema
const habitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    records: [recordSchema],
  },
  {
    timestamps: true,
  }
);

// Create Model
const Habit = mongoose.model("Habit", habitSchema);

// Export Model
export default habit;