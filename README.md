# React + TypeScript + Vite

# Todo App (Frontend and Backend)

This is a simple **Todo** application built with **Node.js**, **TypeScript**, **SQLite** for the backend, and a future **frontend** to be developed. The purpose of this project is to learn and apply **TypeScript**.

The **backend** provides a RESTful API to manage todos, while the **frontend** will allow users to interact with the backend and visualize their todos.

## Features

- **Backend**:
  - Create, update, delete, and retrieve todos
  - Built using **Node.js**, **Express**, and **SQLite**
  - Implements CRUD operations for todo management

- **Frontend**:
  - Interactive user interface (to be developed)
  - Display todos, allow adding, editing, and deleting todos
  - Login and signup pages to authenticate users
  

## Backend Overview

The backend handles all CRUD operations related to the todo list and interacts with an **SQLite** database. The routes provided by the API are as follows:

### Authentication Routes
- **POST `/auth/signup`**: Create a new user (sign up)
- **POST `/auth/login`**: Login and get a JWT token

### Example Protected Route
- **GET `/protected`**: Access protected data (requires authentication)

### Todo Routes
- **POST `/todos`**: Create a new todo.
- **GET `/todos`**: Retrieve all todos.
- **GET `/todos/:id`**: Retrieve a single todo by ID.
- **PATCH `/todos/:id`**: Update the status of a todo (mark it as completed).
- **DELETE `/todos/:id`**: Delete a todo by ID.

**Note**: The authentication system and the todo routes are **not yet connected**. For now, can be tested separately, as the todo routes are not yet protected by JWT authentication. Both the **authentication routes** and the **todos routes** have been **tested using Postman**.


## Frontend
  - Interactive user interface : The frontend currently includes the ability to display and delete todos.
  - Display and deleting todos: These functionalities are implemented using **Context API** for state management.
  - Login and signup pages to authenticate users (to be developed)
  - **Backend Integration**: Currently, the frontend is not yet connected to the backend. The functionalities (adding, editing, deleting todos) need to be connected with the backend using **HTTP requests** to persist data in the database.