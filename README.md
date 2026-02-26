# 🅿️ Smart Parking Lot System

A full-stack MERN application for automated parking slot management.

## Tech Stack

- **MongoDB** — Database
- **Express.js** — REST API
- **React** (Vite + Tailwind CSS) — Frontend
- **Node.js** — Backend runtime

## Project Structure

```
smart-parking-lot/
├── client/       # React frontend (Vite + Tailwind)
├── server/       # Express + MongoDB backend
├── package.json  # Root: runs both with concurrently
└── .gitignore
```

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB running locally on port 27017

### Installation

```bash
# From smart-parking-lot/ directory
npm run install:all
```

### Running

```bash
# Start both server (port 5000) and client (port 5173)
npm run dev
```

Or individually:
```bash
npm run server   # API on http://localhost:5000
npm run client   # UI  on http://localhost:5173
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/slots` | Get all slots |
| POST | `/api/slots` | Add a slot |
| POST | `/api/slots/park` | Park vehicle (needsEV, needsCover) |
| PUT | `/api/slots/:id/remove` | Remove vehicle |
| DELETE | `/api/slots/:id` | Delete a slot |

## Features

- ➕ **Add Slot** — define slotNo, covered, EV charging
- 🔲 **View Slots** — grid display with live status badges
- 🚗 **Park Vehicle** — auto-allocates nearest matching available slot
- 🔓 **Remove Vehicle** — frees up an occupied slot
- 📊 **Stats Dashboard** — live count of total, available, occupied, EV slots
- ❌ **Error Handling** — "No slot available" and validation messages
