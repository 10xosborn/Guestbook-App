import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// made a change: Point to guestbook.json in the root folder
// recreated __dirname because it doesn't exist in ES Modules
const filePath = path.join(__dirname, '../guestbook.json');

// validate file existence
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf8');
}

export const readEntries = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
};

export const writeEntry = (newEntry) => {
    try {
        const entries = readEntries();
        entries.push(newEntry);
        fs.writeFileSync(filePath, JSON.stringify(entries, null, 2), 'utf8');
        return true;
    } catch (err) {
        console.error('Error writing file:', err);
        return false;
    }
};