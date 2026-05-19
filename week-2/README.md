# Week 2

This week expands JavaScript skills into frontend mini-projects, asynchronous behavior, and backend API fundamentals.
The exercises combine user-facing logic with server-side routing and modular code organization.

## What I did this week

- Built a small E-commerce flow in `E_commerse/` with product listing, cart operations, stock checking, discounts, and checkout processing.
- Created a task management module in `Tack_Management/` with task creation, validation, completion status, and due date enforcement.
- Practiced asynchronous behavior in `AsynchronousTimeOutFunction.js` and compared it with the synchronous flow in `SynchronousTimeOutFunction.js`.
- Implemented real-world examples such as bank transaction analysis, movie streaming platform simulation, and student performance scoring.
- Learned how object and array copying works in `CopyArray.js` and `CopyObj.js`, and reviewed ES6 class syntax in `ClassEX.js`.
- Explored backend development in `BackendDev/` by building a simple Express server, middleware logging, and modular route handlers.

## BackendDev details

`BackendDev/` contains a small Node.js backend example that demonstrates how to structure a server with Express and separate routes.

- `BackendDev/package.json`: defines backend dependencies and startup script for the server.
- `BackendDev/server.js`: sets up an Express application, enables JSON body parsing, adds middleware for request logging, and mounts route modules under `/api`.
- `BackendDev/API/userAPI.js`: handles user-related endpoints for listing and managing user data.
- `BackendDev/API/productApi.js`: provides product routes for catalog data, product retrieval, and basic inventory logic.
- `BackendDev/API/student.js`: implements student-related routing for viewing student data and grades.
- `BackendDev/req.http`: includes sample HTTP requests to test the API routes with a REST client.

This folder shows how to:

- Initialize an Express server and use middleware
- Separate route logic into modular files
- Parse and respond with JSON data
- Build API endpoints for users, products, and students
- Test routes locally using HTTP request examples

## Code highlights

- `E_commerse/app.js`: orchestrates product browsing, search, cart additions, quantity updates, removal, and checkout.
- `E_commerse/cart.js`: manages cart items, adds products, checks stock, and removes items.
- `E_commerse/product.js`: defines product data, stock checking, and retrieval functions.
- `Tack_Management/task.js`: task creation, completion, and listing using validation helpers.
- `Tack_Management/validator.js`: validates task title length, priority values, and future due dates.
- `BackendDev/server.js`: Express server setup with JSON parsing, middleware logging, and route modules.
- `BackendDev/API/userAPI.js`: user route module for managing user data.
- `BackendDev/API/productApi.js`: product route module for serving product information.
- `BackendDev/API/student.js`: student route module for student data handling.

## Skills practiced

- Frontend project structure and logic separation
- Validation functions and user input handling
- Asynchronous programming with callbacks and timers
- Node.js backend architecture using Express and routers
- Working with arrays, objects, and modular code organization
