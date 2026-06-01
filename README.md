# Habit Tracker

A full-stack Habit Tracker application built using Node.js, Express.js, EJS, MongoDB Atlas, and Mongoose.

## Features

* Add multiple habits
* Track habits for the last 7 days
* Three habit statuses:

  * Done ✅
  * Not Done ❌
  * None ⭕
* Toggle habit status with a single click
* Store habit data in MongoDB Atlas
* Delete habits
* Responsive dashboard UI
* MVC Architecture

---

## Tech Stack

### Frontend

* EJS
* HTML
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

---

## Folder Structure

```txt
Habit-Tracker
│
├── config
│   └── mongoose.js
│
├── controllers
│   └── habitController.js
│
├── models
│   └── Habit.js
│
├── routes
│   └── habitRoutes.js
│
├── views
│   └── home.ejs
│
├── public
│   └── css
│       └── style.css
│
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project folder:

```bash
cd Habit-Tracker
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=8000

MONGO_URI=your_mongodb_atlas_connection_string
```

---

## Run Project

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

---

## MongoDB Setup

1. Create a MongoDB Atlas account.
2. Create a cluster.
3. Create a database user.
4. Add Network Access:

```txt
0.0.0.0/0
```

5. Copy the connection string.
6. Add it to the `.env` file.

---

## MVC Architecture

### Model

Handles database operations.

```txt
models/Habit.js
```

### View

Handles UI rendering.

```txt
views/home.ejs
```

### Controller

Handles application logic.

```txt
controllers/habitController.js
```

### Routes

Handles URL endpoints.

```txt
routes/habitRoutes.js
```

---

## Available Routes

### Home Page

```http
GET /
```

### Create Habit

```http
POST /create
```

### Toggle Habit Status

```http
GET /toggle/:habitId/:date
```

### Delete Habit

```http
GET /delete/:id
```

---

## Author

Akash Mondkar
