# Week 6

This week is focused on a full-stack employee management project.
The project includes a backend API and a frontend React application for employee data management.

## Contents

- `Employee_Proj/`: Full-stack employee management project with separate backend and frontend.
  - `Employee_Proj/Backend/`: Node.js, Express, and MongoDB backend server.
  - `Employee_Proj/Frontend/`: React frontend application.

## Backend schema and APIs

### Employee schema (`Employee_Proj/Backend/Model/EmployeeSchema.js`)
- `name` (String, required)
- `email` (String, required)
- `mobile` (Number)
- `designation` (String)
- `companyName` (String)
- `timestamps` enabled for created and updated fields
- `versionKey` disabled

### API routes (`Employee_Proj/Backend/Api/EmployeeApi.js`)
- `POST /emp-api/employees` — create a new employee record
- `GET /emp-api/employees` — retrieve all employees
- `PUT /emp-api/employees/:id` — edit an employee by ID
- `DELETE /emp-api/employees/:id` — delete an employee by ID

## Backend dependencies (`Employee_Proj/Backend/package.json`)
- `express` — server framework
- `mongoose` — MongoDB object modeling
- `cors` — handle cross-origin requests
- `dotenv` — manage environment variables

## Frontend dependencies (`Employee_Proj/Frontend/package.json`)
- `react`, `react-dom` — React UI library
- `axios` — HTTP requests to the backend
- `react-hook-form` — form management
- `react-router` — routing between pages
- `tailwindcss`, `@tailwindcss/vite` — styling support
- `zustand` — state management
- `vite`, `@vitejs/plugin-react` — development tooling
- ESLint packages for React linting

## How the project works

- The backend connects to MongoDB at `mongodb://localhost:27017/EmployeeDB`.
- The server starts on port `3000` and exposes employee CRUD routes under `/emp-api`.
- The frontend runs on `http://localhost:5173` and communicates with the backend via Axios requests.
- Employee data is created, fetched, edited, and deleted through the React interface.

## Running the project

1. In `Employee_Proj/Backend/`: install dependencies with `npm install`.
2. Start the backend with `node server.js`.
3. In `Employee_Proj/Frontend/`: install dependencies with `npm install`.
4. Start the frontend with `npm run dev`.

## Notes

- Backend and frontend must both be running for the app to function.
- The backend expects a local MongoDB instance and uses CORS to allow frontend access.
