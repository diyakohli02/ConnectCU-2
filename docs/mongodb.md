# MongoDB Documentation

## Connection
- **Library**: `mongoose`
- **URI**: `MONGODB_URI` (stored in `backend/.env`).
- **File**: `backend/index.js` handles the initial connection.

## User Schema
- **File**: `backend/models/User.js`
- **Fields**:
    - `name`: String (Required)
    - `email`: String (Required, Unique)
    - `password`: String (Hashed, only for email/password users)
    - `googleId`: String (Unique, only for Google users)
    - `avatar`: String (URL to profile picture)
    - `createdAt`: Date

## Best Practices
- Never store plain-text passwords (use `bcryptjs`).
- Use indexes on unique fields like `email`.
