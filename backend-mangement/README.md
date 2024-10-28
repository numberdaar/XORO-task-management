# Backend Management System

This is a backend management system using Node.js, Express, MongoDB, and Mongoose, with file uploads using `multer` and data validation using `Joi`. The project allows task management, including creating, updating, retrieving, and deleting tasks. Tasks can have an attached PDF file, stored in memory.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/numberdaar/XORO-task-management
   cd backend-management
   ```
2. **Install dependencies**:
```bash
npm install
```

**Configuration**
Environment Variables: Create a .env file in the root directory with the following variables:
```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

**Starting the Server**:

For production:
```bash
npm start
```
For development (with nodemon):
```bash
npm run dev
```