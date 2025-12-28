# project-mern

A full-stack MERN (MongoDB, Express, React, Node.js) application.

## Description

This is a MERN Project built with modern web technologies for building scalable web applications.

## Author

**Kamran Ahmad Khan**

## Tech Stack

- **MongoDB** - NoSQL database
- **Express.js** - Backend framework
- **React** - Frontend library
- **Node.js** - Runtime environment

## Features

- RESTful API with Express
- MongoDB database integration with Mongoose
- JWT authentication
- Password encryption with bcrypt
- CORS enabled
- Environment variable configuration
- Hot reload for development

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed and running
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Kamran-Khan1/GoalSetter.git
cd GoalSetter
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

## Running the Application

### Development Mode

Run backend server with hot reload:

```bash
npm run server
```

Run frontend development server:

```bash
npm run client
```

### Production Mode

Start the application:

```bash
npm start
```

Build the frontend:

```bash
npm run build
```

## Dependencies

- **bcrypt** - Password hashing
- **colors** - Terminal string styling
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **express** - Web framework
- **express-async-handler** - Async error handling
- **jsonwebtoken** - JWT authentication
- **mongodb** - MongoDB driver
- **mongoose** - MongoDB ODM

## License

ISC

## Contributing

Feel free to submit issues and pull requests.

## Contact

For any questions or suggestions, please contact kamrangpai@gmail.com.
