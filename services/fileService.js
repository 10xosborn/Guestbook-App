import fs from 'fs';
import path from 'path';

const filePath = './guestbook.json';

export function readEntries() {
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

export function writeEntries(entries) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(entries, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}