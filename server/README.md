# Dayflow HRMS Backend Server

## Overview
This is the backend server for the Dayflow HRMS (Human Resource Management System) built with Node.js, Express, and MongoDB.

## Features
- **User Authentication**: Sign up and sign in functionality with password hashing
- **JWT Tokens**: Secure token-based authentication
- **MongoDB Integration**: Persistent storage of user data
- **CORS Support**: Allows requests from the React frontend
- **Error Handling**: Comprehensive error handling and validation

## Prerequisites
- Node.js (v14 or higher)
- MongoDB running locally or accessible via connection string
- npm or yarn package manager

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the server directory with the following variables:
```
MONGO_URL=mongodb://localhost:27017/
PORT=5000
JWT_SECRET=your-secret-key-change-in-production
```

## Running the Server

### Development Mode
```bash
npm run dev
```
(Requires nodemon to be installed)

### Production Mode
```bash
npm start
# or
node server.js
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication

#### Sign Up
- **POST** `/api/auth/signup`
- **Body**:
```json
{
  "employeeId": "EMP123",
  "email": "user@example.com",
  "password": "password123",
  "role": "employee"
}
```
- **Response**:
```json
{
  "message": "User created successfully",
  "user": {
    "id": "...",
    "employeeId": "EMP123",
    "email": "user@example.com",
    "role": "employee"
  },
  "token": "jwt-token-here"
}
```

#### Sign In
- **POST** `/api/auth/signin`
- **Body**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
- **Response**:
```json
{
  "message": "Login successful",
  "user": {
    "id": "...",
    "employeeId": "EMP123",
    "email": "user@example.com",
    "role": "employee"
  },
  "token": "jwt-token-here"
}
```

#### Get All Users (Admin)
- **GET** `/api/users`
- **Response**: Array of user objects (passwords excluded)

## Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  employeeId: String,
  email: String (unique),
  password: String (hashed),
  role: String ("admin" | "employee"),
  createdAt: Date
}
```

## Security Features
- **Password Hashing**: Uses bcryptjs for secure password storage
- **JWT Authentication**: Tokens expire after 24 hours
- **Input Validation**: All inputs are validated before processing
- **CORS Protection**: Configured to accept requests from React frontend

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `MONGO_URL` | `mongodb://localhost:27017/` | MongoDB connection string |
| `PORT` | `5000` | Server port |
| `JWT_SECRET` | `your-secret-key-change-in-production` | Secret key for JWT signing |

## Testing the API

You can test the API endpoints using:
- **Postman**: Import the endpoints and test manually
- **cURL**: Use curl commands to test endpoints
- **Frontend**: The React app automatically calls these endpoints

### Example cURL requests:

**Sign Up:**
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "employeeId": "EMP001",
    "email": "emp1@company.com",
    "password": "password123",
    "role": "employee"
  }'
```

**Sign In:**
```bash
curl -X POST http://localhost:5000/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "emp1@company.com",
    "password": "password123"
  }'
```

## Database Setup

Ensure MongoDB is running:

### Local MongoDB
```bash
# On Windows
mongod

# On macOS/Linux
brew services start mongodb-community
# or
sudo systemctl start mongod
```

The server will automatically:
1. Connect to MongoDB
2. Create the `dayflow_hrms` database
3. Create the `users` collection
4. Create a unique index on the email field

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running on `mongodb://localhost:27017/`
- Check the `MONGO_URL` in `.env` file
- Verify MongoDB is installed and running

### Port Already in Use
- Change the `PORT` in `.env` to an available port
- Or kill the process using port 5000

### JWT Secret Not Set
- The server uses a default secret in development
- **IMPORTANT**: Change the JWT_SECRET in production `.env` file

## Frontend Integration

The React frontend is configured to:
- Send requests to `http://localhost:5000/api`
- Store JWT tokens in localStorage
- Use the tokens for authenticated requests
- Handle authentication errors gracefully

## Production Deployment

Before deploying to production:
1. Change `JWT_SECRET` to a secure random string
2. Update `MONGO_URL` to your production MongoDB instance
3. Set `NODE_ENV=production`
4. Use a process manager like PM2 to keep the server running
5. Implement HTTPS and other security measures
6. Set appropriate CORS origins

## License
MIT
