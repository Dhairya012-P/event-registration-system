const express = require('express');
const router = express.Router();
const Registration = require('../models/registration');

router.get('/:ticketId', async (req, res) => {
  try {
    const { ticketId } = req.params;

    // 1. Look for the ticket in MongoDB
    const user = await Registration.findOne({ ticketId });

    if (!user) {
      return res.status(404).json({ status: "Invalid Ticket ❌", message: "Ticket not found in system." });
    }
    // --- 🕒 TIME LIMIT CHECK ---
    const currentTime = new Date();
    const registrationTime = new Date(user.createdAt);
    
    // Set limit: 24 hours (24 * 60 * 60 * 1000 milliseconds)
    const timeLimit = 15 * 1000; 

    if (currentTime - registrationTime > timeLimit) {
      return res.json({ 
        status: "Ticket Expired! ⏰", 
        message: "This pass has exceeded the 24-hour entry window.",
        student: user.name
      });
    }
    // ---------------------------

    // 2. Security Check: Has this ID card already been scanned?
    if (user.status === "used") {
      return res.json({ 
        status: "Access Denied ⚠️", 
        message: "This ticket has already been used for entry.",
        student: user.name
      });
    }

    // 3. Mandatory Entry: Mark the ticket as "used" in the database
    user.status = "used";
    await user.save();

    // 4. Success: Tell the gate staff to let them in
    res.json({ 
      status: "Entry Allowed ✅", 
      message: `Welcome, ${user.name}!`,
      department: user.department,
      studentId: user.studentId
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;