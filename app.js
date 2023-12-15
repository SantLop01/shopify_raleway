const express = require('express')
const app = express();

// Traer los manejadores de rutas
const mainRoutes = require('./src/routes/mainRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const authRoutes = require('./src/routes/authRoutes');

// Dotenv config
require('dotenv').config();
const PORT = process.env.PORT || 4008;

// Routes for static archives
app.use(express.static('public'));

// Routes
app.use('/', mainRoutes);
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/auth', authRoutes);

// Server up
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}/home`))