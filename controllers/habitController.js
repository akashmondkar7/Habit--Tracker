import Habit from "../models/Habit.js";

// Show all habits
export const home = async (req, res) => {
  try {
    const habits = await Habit.find();

    res.render("home", {
      habits,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// Create new habit
export const createHabit = async (req, res) => {
  try {
    const { name } = req.body;

    const records = [];

    // Generate today's date + previous 6 days
    for (let i = 0; i < 7; i++) {
      const date = new Date();

      date.setDate(date.getDate() - i);

      records.push({
        date: date.toISOString().split("T")[0],
        status: "none",
      });
    }

    await Habit.create({
      name,
      records,
    });

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// Toggle habit status
export const toggleStatus = async (req, res) => {
  try {
    const { habitId, date } = req.params;

    const habit = await Habit.findById(habitId);

    if (!habit) {
      return res.status(404).send("Habit Not Found");
    }

    const record = habit.records.find(
      (item) => item.date === date
    );

    if (!record) {
      return res.status(404).send("Record Not Found");
    }

    // Status Cycle
    if (record.status === "none") {
      record.status = "done";
    } else if (record.status === "done") {
      record.status = "notdone";
    } else {
      record.status = "none";
    }

    await habit.save();

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// Delete habit
export const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndDelete(req.params.id);

    if (!habit) {
      return res.status(404).send("Habit Not Found");
    }

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
