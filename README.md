# Task Management Application

This project is a Task Management Application that allows users to create, manage, and organize tasks efficiently. It includes a frontend built with React and Material UI, and a backend API built with Node.js and Express for task management and file uploads.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

The Task Management Application allows users to:
- Add new tasks with details like title, description, deadline, and status.
- Edit, delete, and mark tasks as complete.
- Upload files (PDF) associated with tasks.
- View tasks in a tabular format with various task statuses.

## Features

### Frontend
- Interactive UI built with React and Material UI.
- Task management (create, edit, delete, and mark as done).
- File upload functionality for each task.
- Real-time updates on the task list.
- Fully responsive for various screen sizes.

### Backend
- RESTful API using Express for task data management.
- File upload functionality using Multer for handling PDF uploads.
- MongoDB as the database to store tasks data.

---

## Tech Stack

- **Frontend**: React, Material UI, Axios
- **Backend**: Node.js, Express, MongoDB, Multer
- **Database**: MongoDB

---

## Frontend Setup

1. **Install dependencies**: Open the frontend directory and run the following command:
    ```bash
    npm install
    ```

2. **Run the development server**:
    ```bash
    npm start
    ```
    By default, the app will be available at `http://localhost:3000`.

3. **Environment Variables**:
    - Configure the backend API base URL in a `.env` file at the root of the frontend project:
    ```plaintext
    REACT_APP_API_BASE_URL=http://localhost:5000/api
    ```

---

## Backend Setup

1. **Install dependencies**: Open the backend directory and run the following command:
    ```bash
    npm install
    ```

2. **Set up environment variables**: Create a `.env` file in the root of the backend project with the following details:
    ```plaintext
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/taskdb
    ```

3. **Run the server**:
    ```bash
    npm start
    ```
    The server should now be running at `http://localhost:5000`.

4. **API Testing**:
    You can test API endpoints using Postman or any other API testing tool.

---

## Usage

1. Open the frontend application and navigate to the Task Manager page.
2. Use the “Add Task” button to create new tasks.
3. Use the table actions to edit, delete, or mark tasks as complete.
4. Uploaded files will be available for download through the download icon in the task table.

---


---

## API Endpoints

| Method | Endpoint           | Description                       |
|--------|---------------------|-----------------------------------|
| GET    | `/api/tasks`       | Fetch all tasks                  |
| POST   | `/api/tasks`       | Create a new task                |
| PATCH  | `/api/tasks/:id`   | Update a task                    |
| DELETE | `/api/tasks/:id`   | Delete a task                    |
| PATCH  | `/api/tasks/:id/status` | Update task status          |

---

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.

---

## License

This project is open-source and available under the MIT License.
