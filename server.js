import express from 'express'

import guestbookRouters from './routes/guestbookRoutes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.use('/', guestbookRoutes);

app.set('view engine', 'ejs')

const PORT = 3000;
app.listen( PORT,() => console.log('sheeeppppp'));

// import guestbookRoutes from './routes/guestbookRoutes.js';