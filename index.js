const express = require('express')
const app = express();
const path = require('path')
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const { notFoundPage } = require('./src/utils/errorHandlers');

// Traer los manejadores de rutas
const mainRoutes = require('./src/routes/mainRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const authRoutes = require('./src/routes/authRoutes');
const { initSession } = require('./src/utils/session');

// Dotenv config
require('dotenv').config();
const PORT = process.env.PORT || 4008;

// Routes for static archives
app.use(express.static(path.resolve(__dirname, "public")));

// User Sessions

app.use(initSession());
app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    next();
});

// User Active

// Configuración de Ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, "./src/views"));

// Parsea los datos recibidos por POST
app.use(bodyParser.urlencoded());
app.use(express.json());

// Method override para habilitar PUT y DELETE
app.use(methodOverride('_method'))

// Routes
app.use('/', mainRoutes);
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/auth', authRoutes);

app.use(notFoundPage);

// Server up
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}/home`))