const QRCode = require('qrcode');
console.log("Inside register route file 🔥");

const express = require('express');
const router = express.Router();
const Registration = require('../models/registration');

router.post('/', async (req, res) => {
  try {
    // 1. Grab the new fields from the student's request
    const { name, email, studentId, department, event } = req.body;

    // 2. Security Check: Make sure no important fields are empty
    if (!name || !email || !studentId || !department || !event) {
      return res.status(400).json({ message: "Bhai, all university fields are required!" });
    }

    // 3. Duplicate Check: Prevent double registration for the same event
    const existing = await Registration.findOne({ email, event });
    if (existing) {
      return res.json({ message: "Already registered for this event! ❌" });
    }

    // 4. Generate a unique Ticket ID
    const ticketId = "KU-" + Date.now() + "-" + Math.floor(Math.random() * 1000);

    // 5. Generate the QR Code (Base64 string for the Frontend)
    const qrCode = await QRCode.toDataURL(ticketId);

    // 6. Save everything to MongoDB
    const newUser = new Registration({
      name,
      email,
      studentId,
      department,
      event,
      ticketId
    });

    await newUser.save();

    // 7. Send the data back so the Frontend can show the ID Card
    res.json({
      message: "Registration successful",
      ticketId,
      qrCode
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
