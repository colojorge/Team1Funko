import express from 'express';
import mainRoutes from './src/routes/mainRoutes.js';
import shopRoutes from './src/routes/shopRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const root = path.resolve();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));

// motor plantilla ejs
app.set('view engine', 'ejs');
app.set('views', root + '/views')

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/admin', authRoutes);

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});