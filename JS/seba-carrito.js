// package.json: tenemos como dependencia nodemon, entonces corremos nodemos con: npm run dev, porque en el script lo pusinos con dev, el proyecto esta en desarrollo y con: npm start, corremos el proyecto cuando esta productivo
import express from 'express';
import mainRoutes from './src/routes/mainRoutes.js';
import shopRoutes from './src/routes/shopRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import authRoutes from './src/routes/authRoutes.js';


const app = express();
const PORT = 4000;

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/admin', authRoutes);

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});