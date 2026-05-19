# Week 7

This week contains a full-stack blog application project.
The assignment includes a backend API server with authentication, article management, and a React frontend for users, authors, and admin flows.

## Contents

- `Blog_app/`: Full-stack blog application with separate backend and frontend.
  - `Blog_app/Backend/`: Backend API server and project files.
  - `Blog_app/Frontend/`: React frontend application.

## Backend schema

### User schema (`Blog_app/Backend/models/UserModel.js`)
- `firstName` (String, required)
- `lastName` (String)
- `email` (String, required, unique)
- `password` (String, required)
- `role` (String, required; one of `USER`, `AUTHOR`, `ADMIN`)
- `profileImageUrl` (String)
- `isUserActive` (Boolean, default `true`)

### Article schema (`Blog_app/Backend/models/ArticleModel.js`)
- `author` (ObjectId, required, references `user`)
- `title` (String, required)
- `category` (String, required)
- `content` (String, required)
- `comments` (array of subdocuments with `user` ObjectId and `comment` text)
- `isArticleActive` (Boolean, default `true`)
- timestamps enabled for create/update
- strict mode enabled to reject unknown fields

## Backend API routes

### Auth and common routes (`/auth`)
- `POST /auth/users` — register a new user or author with optional profile image upload
- `POST /auth/login` — login with email and password; returns auth cookie
- `GET /auth/logout` — clear authentication cookie
- `GET /auth/check-auth` — verify auth token and return user details
- `PUT /auth/password` — placeholder for password change logic

### User routes (`/user-api`)
- `GET /user-api/articles` — get all active articles as an authenticated user
- `PUT /user-api/articles` — add a comment to an article as an authenticated user

### Author routes (`/author-api`)
- `POST /author-api/article` — publish a new article as an authenticated author
- `GET /author-api/articles` — list articles by the logged-in author
- `PUT /author-api/articles` — edit an article owned by the logged-in author
- `PATCH /author-api/articles` — soft delete or restore an article by toggling `isArticleActive`

### Admin routes (`/admin-api`)
- Defined in the code but currently contains no implemented endpoints

## Backend dependencies (`Blog_app/Backend/package.json`)
- `express` — HTTP server
- `mongoose` — MongoDB object modeling
- `cors` — cross-origin access from frontend
- `dotenv` — environment variables
- `bcryptjs` — password hashing
- `jsonwebtoken` — JWT authentication
- `cookie-parser` — parse cookies for auth token
- `multer` — file uploads for profile images
- `cloudinary` — optional image upload storage

## Frontend dependencies (`Blog_app/Frontend/package.json`)
- `react`, `react-dom` — React framework
- `axios` — API calls
- `react-hook-form` — form handling
- `react-hot-toast` — notifications
- `react-router` — routing
- `tailwindcss`, `@tailwindcss/vite` — styling utilities
- `zustand` — state management
- `vite`, `@vitejs/plugin-react` — build and development tooling

## How the project works

- The backend uses environment variables from `.env` and connects to MongoDB.
- Authentication uses JWT tokens saved in cookies and protected routes via `VerifyToken.js`.
- Users can register and login; authors can publish, edit, and manage their own articles.
- Users can read active articles and post comments on existing articles.
- Profile image uploads can be stored on Cloudinary if credentials are configured.

## Running the project

1. In `Blog_app/Backend/`: install dependencies with `npm install`.
2. Start backend with `node server.js`.
3. In `Blog_app/Frontend/`: install dependencies with `npm install`.
4. Start frontend with `npm run dev`.

## Notes

- The backend allows frontend origin `http://localhost:5173`.
- The `AdminAPI` folder exists but no admin endpoints are implemented yet.
- Cloudinary configuration is optional and only used if `.env` contains valid credentials.
