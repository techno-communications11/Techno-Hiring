// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const applicantRoutes = require('./routes/applicantRoutes');
const screening =  require('./routes/userRoutes')
const cors = require('cors')
// import dotenv from 'dotenv';




// dotenv.config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"http://localhost:3000/",
    
  }));


// Middleware
app.use(express.json()); // For parsing JSON bodies

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api', userRoutes);
app.use('/api', authMiddleware, userRoutes);
app.use('/api', applicantRoutes);
app.use('/api', screening);  //http://localhost:5000/api/users/1/applicants
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
