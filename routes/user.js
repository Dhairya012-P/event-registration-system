const express = require('express');
const router = express.Router();
const Registration = require('../models/registration');

// get all registrations of a user
router.get('/:email', async (req, res) => {
  try {
    const { email } = req.params;

    const registrations = await Registration.find({ email });

    res.json(registrations);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;