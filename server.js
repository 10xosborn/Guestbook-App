import express from 'express';
import guestbookRoutes from './routes/guestbookRoutes.js';

const app = express();
const PORT = 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

// the routes
app.use('/', guestbookRoutes);

// server start
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});