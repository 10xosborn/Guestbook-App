import express from 'express'

import fs from 'fs';
import path from 'path';

const filePath = './guestbook.json';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/', guestbookRoutes);

app.set('view engine', 'ejs')

let entries = [];

function readEntries() {
    try {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        }
        return [];
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
}

// Load entries when server starts
entries = readEntries();
// Render the page with data
app.get('/', (req, res) => {
    console.log('yammmmmmm')
    res.render('form', { entries: entries });
});

app.post('/', (req, res) => {
    entries.push(req.body);
    writeEntries(entries); 
    res.redirect('/guestbook');
}); // Redirects back to GET route


app.get('/guestbook', (req, res) => {
    res.render('guestbook',{entries})

});


function writeEntries(entries) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(entries, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

const PORT = 3000;
app.listen( PORT,() => console.log('sheeeppppp'));

// import guestbookRoutes from './routes/guestbookRoutes.js';
