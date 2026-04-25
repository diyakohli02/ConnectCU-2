# API Endpoints

All backend routes are prefixed with `/api`.

## Authentication Routes (`/api/auth`)
- `POST /signup`: Create a new email/password account.
- `POST /login`: Authenticate with email/password.
- `POST /google`: Authenticate/Register with Google OAuth.

## Protected Routes
These routes require a valid JWT in the `Authorization` header.

- *Currently applied via `ProtectedRoute` on the frontend for:*
    - `/profiles`
    - `/connect`

## Expected Header Format
```http
Authorization: Bearer <your_jwt_token>
```
