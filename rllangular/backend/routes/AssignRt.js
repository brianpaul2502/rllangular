const Assign = require("../models/Assign");
const express = require("express");
const router = express.Router();

// Route to create Assign
router.post("/create", async (req, res) => {
  try {
    const { name, roomno, housekeeper } = req.body;

    const newAssign = new Assign({
      name,
      roomno,
      housekeeper,
    });

    const savedAssign = await newAssign.save();

    res
      .status(201)
      .json({ message: "Assign saved successfully", data: savedAssign });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to save Assign", error: error.message });
  }
});

// Route to get all Assign
router.get("/all", async (req, res) => {
  try {
    const assign = await Assign.find();
    res.status(200).json(assign);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve Assign", error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const assignId = req.params.id;

    // Find the Assign by ID and remove it
    const deletedAssign = await Assign.findByIdAndDelete(assignId);

    if (!deletedAssign) {
      return res.status(404).json({ message: "Assign not found" });
    }

    res.status(200).json({ message: "Assign deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Assign", error: error.message });
  }
});

module.exports = router;
