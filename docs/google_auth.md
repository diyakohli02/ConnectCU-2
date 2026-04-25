# Google OAuth Documentation

## Overview
This project uses Google One Tap Login and the standard Google Sign-In button for easy user authentication.

## Setup
1. **Google Cloud Console**: A project is created in the Google Cloud Console.
2. **Client ID**: A "Web Client ID" is generated.
3. **Environment Variables**:
    - **Frontend**: `VITE_GOOGLE_CLIENT_ID` (in `.env` or hardcoded in `main.jsx`).
    - **Backend**: `GOOGLE_CLIENT_ID` (in `backend/.env`).

## Flow
1. User clicks "Sign in with Google" on the frontend.
2. Google returns a `credential` (ID Token).
3. The frontend sends this token to `POST /api/auth/google`.
4. The backend verifies the token using the `google-auth-library`.
5. If valid, the backend creates/finds the user in MongoDB and issues a project-specific JWT.
