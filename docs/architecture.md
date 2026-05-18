# Project Architecture

This project follows the **MVC (Model-View-Controller)** design pattern. This architecture separates the application into three main logical components to help separate concerns, making the codebase easier to scale, test, and maintain.

## 1. Model (Data Layer)
**Location:** `backend/models/`

The Model layer is responsible for the application's data logic. It defines the schema of the data and handles interactions with the database (MongoDB).

- **`User.js`**: Defines the user schema, including standard email/password authentication as well as Google OAuth properties.
- **`ConnectionRequest.js`**: Defines the schema for students submitting the "Connect" form, storing their program, year, interests, and goals.

## 2. View (Presentation Layer)
**Location:** `src/` (Frontend React Application)

The View layer handles everything the user interacts with. It fetches data from the backend and displays it to the user, and captures user input to send back to the backend.

- **React Components** (`App.jsx`, `Home.jsx`, `Connect.jsx`, `Login.jsx`, etc.) handle the UI rendering.
- State is managed via React Hooks and Context (`AuthContext.jsx`).

## 3. Controller (Business Logic Layer)
**Location:** `backend/controllers/`

The Controller acts as an intermediary between the Model and the View. It receives user requests from the View (via the Routes), processes the business logic, interacts with the Models to read/write data, and sends the response back to the View.

- **`authController.js`**: Handles user registration, login (including checking password hashes with `bcryptjs`), and Google OAuth verification.
- **`connectController.js`**: Handles the logic for receiving, validating, and saving new connection requests.

## Routing
**Location:** `backend/routes/`

The routing layer maps incoming HTTP requests (like `POST /api/connect`) to the appropriate Controller function. They do not contain any business logic themselves, keeping the code clean and strictly adhering to the MVC pattern.

- **`auth.js`**: Maps `/signup`, `/login`, and `/google` to `authController`.
- **`connect.js`**: Maps the root connect route to `connectController.submitConnectionRequest`.
