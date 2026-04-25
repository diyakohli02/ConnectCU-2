# JWT (JSON Web Token) Documentation

## Overview
JWT is used to securely transmit information between the client and server as a JSON object. In this project, it is used for session management.

## Backend Generation
- **File**: `backend/routes/auth.js`
- **Secret**: `JWT_SECRET` (stored in `.env`)
- **Payload**: Contains the user's MongoDB `_id`.
- **Expiration**: 7 days.

## Frontend Storage
- **Location**: Browser `localStorage`.
- **Key**: `token`.
- **Implementation**: Managed by `AuthContext.jsx`.

## Verification
Tokens are verified on the backend using the `auth.js` middleware before granting access to protected routes.
