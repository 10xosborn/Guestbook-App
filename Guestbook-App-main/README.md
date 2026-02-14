# Guestbook App

A lightweight Express + EJS guestbook where visitors can sign a ledger and browse all past messages. Data persists in a simple JSON file so the project stays portable.

## Tech Stack

- Node.js 18+
- Express 4
- EJS for templating
- Vanilla CSS (served from `public/style.css`)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Launch the server (runs on http://localhost:3000):
   ```bash
   npm start
   ```
3. Optional: use auto-reload while developing.
   ```bash
   npm run dev
   ```

## Project Scripts

| Script        | Purpose                                              |
| ------------- | ---------------------------------------------------- |
| `npm start`   | Runs `server.js` with Node.                          |
| `npm run dev` | Runs `server.js` with nodemon for automatic reloads. |

## API Reference

| Method | Path         | Description                                                | Body Params                         |
| ------ | ------------ | ---------------------------------------------------------- | ----------------------------------- |
| GET    | `/`          | Loads the form view.                                       | –                                   |
| POST   | `/`          | Saves a new guestbook entry and redirects to `/guestbook`. | `name` (string), `message` (string) |
| GET    | `/guestbook` | Renders the list of stored entries (newest first).         | –                                   |

### Data Model

Entries are stored in `guestbook.json` using the following shape:

```json
{
  "name": "Jane Doe",
  "message": "Congrats on the launch!",
  "timestamp": "2026-02-14T10:30:00.000Z"
}
```

## Manual Test Pass

| Feature     | Steps                                         | Expected                                                        |
| ----------- | --------------------------------------------- | --------------------------------------------------------------- |
| Form render | Visit `/`                                     | Form loads with name + message inputs and submit CTA.           |
| Validation  | Submit empty fields                           | Browser blocks submission (HTML `required`).                    |
| Add entry   | Fill form and submit                          | Redirects to `/guestbook`; entry appears at top with timestamp. |
| Persistence | Refresh `/guestbook`                          | Previously added entries remain (JSON file updated).            |
| Navigation  | Use header links between `/` and `/guestbook` | Pages swap without full reload errors.                          |

## Screenshots

Add the latest UI captures to `docs/screenshots/` and keep them referenced below:

- `docs/screenshots/form-view.png`
- `docs/screenshots/guestbook-view.png`

![Form View](docs/screenshots/Guestbook.png)
![Guestbook View](docs/screenshots/Guestbook-view.png)
