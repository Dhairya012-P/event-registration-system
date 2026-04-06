const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  studentId: { type: String, required: true },   // e.g., KU2507U0161
  department: { type: String, required: true },  // e.g., UWSB, UID, Unitedworld
  event: { type: String, required: true },
  ticketId: { type: String, unique: true },      // The unique code in the QR
  status: { type: String, default: "active" },   // active or used
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Registration", registrationSchema);
