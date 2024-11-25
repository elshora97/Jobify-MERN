# Jobify - MERN Application for Job Opportunities

Jobify is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to help individuals manage job opportunities effectively. Users can track job applications, view job statuses, and maintain an organized workflow for their job search journey.

## Features

- **User Authentication**: Secure login and registration with JWT-based authentication.
- **Job Management**: Add, edit, delete, and filter job listings.
- **Job Status Tracking**: Track the status of applications (e.g., Applied, Interviewing, Rejected, Accepted).
- **User Dashboard**: Personalized dashboard showing job stats and application history.
- **Responsive Design**: Fully responsive UI built with React and Tailwind CSS.

---

## Tech Stack

### Frontend
- **React**: Dynamic user interface development.
- **Tailwind CSS**: Styling and responsive design.
- **Context API / Redux**: State management (optional).

### Backend
- **Node.js**: Server-side runtime environment.
- **Express.js**: Lightweight web framework for APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ORM for MongoDB for schema definitions and validation.

---

## Installation Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/elshora97/Jobify-MERN.git
   cd Jobify-MERN

2. Create a .env file in the root:
PORT = 5000
NODE_ENV = development
MONGO_URI = your_mongo_db_connection_string
JWT_SECRET= your_secret_key
JWT_EXPIRES_IN=
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=

3.Run the application:
 ```bash
   npm run dev
