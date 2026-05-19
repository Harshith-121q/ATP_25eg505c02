# BackendDev

This folder contains a simple Node.js backend example built with Express.
The goal is to demonstrate how to create a local API server, organize routes, and test endpoints.

## What is included

- `package.json`: contains project metadata and dependencies for the backend.
- `server.js`: initializes the Express server, configures JSON body parsing, adds logging middleware, and mounts API routes.
- `API/userAPI.js`: defines user-related routes for listing and managing simple user data.
- `API/productApi.js`: defines product routes for serving product catalog data and handling product-related requests.
- `API/student.js`: defines student routes for retrieving student information and related data.
- `req.http`: sample HTTP requests for testing the backend routes with a REST client tool.

## Backend concepts covered

- Creating an HTTP server using Express
- Installing and importing the Express module
- Defining middleware for request logging and JSON parsing
- Separating route handlers into modular API files
- Testing backend endpoints using sample HTTP request files

## How to run

1. Open `BackendDev` in a terminal.
2. Install dependencies with `npm install`.
3. Start the server with `node server.js` or `npm start` if defined.
4. Use `req.http` or a tool like Postman to send requests to the API routes.
 