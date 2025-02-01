const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/database');
const faqRoutes = require('./routes/faqRoutes');
const adminRoutes = require('./routes/admin');

require('dotenv').config();

const app = express();

// Middleware use !
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Connection to the MongoDB
connectDB();

// Routes
app.use('/api/faqs', faqRoutes);
app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
