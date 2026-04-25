# Authentication Flow Overview

This project uses a hybrid authentication system supporting both traditional Email/Password and Google OAuth.

## Frontend Architecture
- **AuthContext**: A React Context provider that wraps the app and shares the authentication state (`user`, `token`, `login`, `logout`).
- **ProtectedRoute**: A wrapper component that redirects users to `/login` if they are not authenticated.

## Backend Architecture
- **Auth Routes**: Handle `/signup`, `/login`, and `/google`.
- **Auth Middleware**: Verifies the JWT sent in the `Authorization` header for protected API calls.

## Steps for a Protected Request
1. Frontend retrieves `token` from `localStorage`.
2. Frontend sends request with header: `Authorization: Bearer <token>`.
3. Backend middleware `auth.js` verifies the token.
4. Backend allows the request and attaches `req.user`.
