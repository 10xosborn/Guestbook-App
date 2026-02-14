import express from 'express';
import { readEntries, writeEntry } from '../utils/fileService.js';

const router = express.Router();

// get: show the sign form
router.get('/', (req, res) => {
    res.render('form');
});

// post handles the form submission
router.post('/', (req, res) => {
    const { name, message } = req.body;
    if (name && message) {
        const newEntry = {
            name,
            message,
            timestamp: new Date().toISOString()
        };
        writeEntry(newEntry);
    }
    res.redirect('/guestbook');
});

// show all entries
router.get('/guestbook', (req, res) => {
    const entries = readEntries();
    // Reverse the array so the newest messages show up at the top
    // otherwise users have to scroll down to find their post
    res.render('guestbook', { entries: entries.reverse() });
});

export default router;