console.log("NEW SERVER FILE RUNNING 🚀🚀🚀");
require('./db');

const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const registerRoute = require('./routes/register');
app.use('/api/register', registerRoute);

const verifyRoute = require('./routes/verify');
app.use('/api/verify', verifyRoute);

const userRoute = require('./routes/user');
app.use('/api/user', userRoute);

// --- 🎫 TICKET GENERATION ROUTE ---
app.get('/api/download-ticket/:ticketId', async (req, res) => {
    try {
        const Registration = require('./models/registration');
        const QRCode = require('qrcode');
        
        // 1. Find the user in MongoDB
        const user = await Registration.findOne({ ticketId: req.params.ticketId });

        if (!user) return res.status(404).send("Ticket not found");

        // 2. Create the QR Code data (contains all student info)
        const qrData = `Name: ${user.name} | ID: ${user.studentId} | Dept: ${user.department} | Event: ${user.event}`;
        const qrCodeImage = await QRCode.toDataURL(qrData);

        // 3. Send the Personalized HTML Ticket
        res.send(`
            <html>
            <head>
                <title>KU Event Pass - ${user.name}</title>
                <style>
                    body { 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        background: #f4f4f4; 
                        margin: 0; 
                        padding: 20px;
                        font-family: 'Segoe UI', sans-serif;
                    }
                    .ticket-container {
                        position: relative;
                        width: 450px;
                        background: white;
                        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                        border-radius: 12px;
                        overflow: hidden;
                    }
                    .bg-image { width: 100%; display: block; }
                    
                    .qr-code {
                        position: absolute;
                        top: 300px; /* Adjust to fit your image gap */
                        left: 155px; 
                        width: 140px;
                    }

                    .student-name {
                        position: absolute;
                        top: 175px; /* Adjust to fit your image gap */
                        left: 40px;
                        font-size: 22px;
                        font-weight: bold;
                        color: #ffffff; /* Change to #000 if your image is light */
                        text-transform: uppercase;
                    }

                    .student-info {
                        position: absolute;
                        top: 210px; /* Adjust to fit your image gap */
                        left: 40px;
                        font-size: 14px;
                        color: #ffffff;
                        opacity: 0.9;
                    }

                    .download-btn {
                        margin-top: 20px;
                        padding: 12px 25px;
                        background: #b71c1c;
                        color: white;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: bold;
                    }

                    @media print {
                        .download-btn { display: none; }
                        body { background: white; padding: 0; }
                        .ticket-container { box-shadow: none; border-radius: 0; }
                    }
                </style>
            </head>
            <body>
                <div class="ticket-container">
                    <img src="/image/${user.event.toLowerCase().replace(/\s+/g, '')}.jpg" class="bg-image">
                    
                    <img src="${qrCodeImage}" class="qr-code">
                    
                    <div class="student-name">${user.name}</div>
                    <div class="student-info">
                        ID: ${user.studentId} <br>
                        DEPT: ${user.department}
                    </div>
                </div>

                <button class="download-btn" onclick="window.print()">
                    📥 Save Pass as PDF
                </button>
            </body>
            </html>
        `);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error generating ticket");
    }
});

// Default Route
app.get('/', (req, res) => {
    res.send("Backend is running 🚀");
});

// Start Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});