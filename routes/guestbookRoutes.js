import express from 'express';
import { readEntries, writeEntries } from '../services/fileService.js';

const router = express.Router();

let entries = [];
entries = readEntries();

router.get('/', (req, res) => {
    console.log('yammmmmmm')
    res.render('form', { entries: entries });
});

router.post('/', (req, res) => {
    entries.unshift(req.body);
    writeEntries(entries); 
    res.redirect('/guestbook');
});

router.get('/guestbook', (req, res) => {
    res.render('guestbook', {entries})
});

export default router;