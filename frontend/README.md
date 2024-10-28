# Task Manager Application

## Overview
This Task Manager application is built using React, Material-UI, and Axios. It provides a user-friendly interface to manage tasks by allowing users to add, edit, delete, and mark tasks as completed. The app also supports file uploads for tasks, displays tasks in a table format, and includes a loading indicator.

## Features
- **Add Task:** Allows users to add new tasks with a title, description, deadline, and status.
- **Edit Task:** Enables editing of existing tasks.
- **Delete Task:** Allows users to delete tasks after confirmation.
- **Mark as Done:** Changes the status of a task to "DONE."
- **File Upload:** Upload PDF files to associate with tasks.
- **Download File:** Allows users to download uploaded files.
- **Loading Indicator:** Displays a loading spinner while data is being fetched.
- **Responsive Design:** Ensures a smooth experience on all screen sizes.


## Getting Started

### Prerequisites
- **Node.js** (>=14.x)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_name>
```
2.Install dependencies**:
```bash
npm install
```
3. Set up environment variables:
.Create an .env file at the root level of your project.
.Define your API base URL as REACT_APP_API_BASE_URL.

**Running the Application**
To start the development server, run:
```bash
npm start
``
**Building for Production**
To create a production build, run:
```bash
npm run build
```