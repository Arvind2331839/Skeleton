require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const exampleRoutes = require('./routes/exampleRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/example', exampleRoutes);

// Error Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


