# Week 3

This week focuses on backend database practice using MongoDB with Node.js and Express.
The work demonstrates how to model data, connect to a database, and build API routes for CRUD operations.

## Contents

- `BackendDB/`: A backend database project containing models, API routes, and server logic.
- `mongoDB_practice.txt`: Notes and practice material for MongoDB concepts.

## What I did this week

- Created MongoDB schemas and models in `BackendDB/models/UserModel.js` and `BackendDB/models/ProductModel.js`.
- Built REST API routes in `BackendDB/API_s/productApi.js` and `BackendDB/API_s/ussrApi.js`.
- Set up an Express server in `BackendDB/server.js` with middleware, route mounting, and database connection.
- Added a token verification middleware in `BackendDB/middleware/verifytoken.js` to learn protected routes.
- Used `server2.js` as an additional backend practice file for experimenting with server behavior.
- Recorded MongoDB practice notes and commands in `mongoDB_practice.txt`.

## Code highlights

- `ProductModel.js`: defines product fields and validation using Mongoose schema.
- `UserModel.js`: defines user fields, required values, and role information.
- `productApi.js`: implements product CRUD operations including add, read, update, and delete.
- `server.js`: configures Express middleware, mounts routers, and listens on a port.

## Skills practiced

- Designing MongoDB schemas with Mongoose
- Building Express API routes for database operations
- Using middleware for logging and request handling
- Connecting Node.js applications to MongoDB
