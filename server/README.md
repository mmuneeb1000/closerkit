# CloserKit Backend

A production-ready backend API for **CloserKit**, an AI-powered proposal and pitch generation SaaS platform.

CloserKit helps businesses and freelancers create personalized client proposals using AI. Users can manage their leads/projects, generate professional pitches with OpenAI, and store their generated content securely.

This repository contains the backend API built with Node.js, Express, MongoDB, and JWT authentication.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Authentication Flow](#authentication-flow)
- [Database Models](#database-models)
- [Deployment](#deployment)
- [Security](#security)
- [Future Improvements](#future-improvements)
- [Credits](#credits)

---

## Features

- User authentication with JWT
- Secure password hashing with bcrypt
- Protected API routes
- User-specific project management
- Full project CRUD operations
- AI-powered proposal generation using OpenAI API
- Store generated pitches in MongoDB
- Environment-based configuration
- Production middleware setup
  - Helmet security headers
  - Rate limiting
  - CORS configuration

---

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt
- OpenAI API

### Security & Deployment

- Helmet
- Express Rate Limit
- CORS
- Render
- dotenv

---

## Project Structure

```

server/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── projectController.js
│   └── pitchController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Project.js
│   └── Pitch.js
│
├── routes/
│   ├── authRoutes.js
│   ├── projectRoutes.js
│   └── pitchRoutes.js
│
├── services/
│   └── openaiService.js
│
├── utils/
│   └── generateToken.js
│
├── server.js
├── package.json
└── .env

```

---

# Getting Started

## Prerequisites

Make sure you have installed:

- Node.js
- MongoDB Atlas account
- OpenAI API key

---

## Installation

Clone the repository:

```bash
git clone https://github.com/mmuneeb1000/closerkit.git
```

Navigate to the backend:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```bash
touch .env
```

Add your environment variables.

Start development server:

```bash
npm run dev
```

Start production server:

```bash
npm start
```

---

# Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
CLIENT_URL=your_frontend_url
NODE_ENV=development
```

---

# API Endpoints

## Authentication

### Register User

```
POST /api/auth/register
```

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

### Login User

```
POST /api/auth/login
```

Request:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "id": "user_id",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "jwt_token"
}
```

---

## Projects

All project routes require:

```
Authorization: Bearer TOKEN
```

### Create Project

```
POST /api/projects
```

### Get Projects

```
GET /api/projects
```

### Get Single Project

```
GET /api/projects/:id
```

### Update Project

```
PUT /api/projects/:id
```

### Delete Project

```
DELETE /api/projects/:id
```

---

## AI Pitch Generation

Generate an AI proposal:

```
POST /api/pitches/proposal
```

Request:

```json
{
  "projectId": "project_id"
}
```

The API:

1. Finds the user's project
2. Sends project information to OpenAI
3. Generates a personalized proposal
4. Saves the pitch in MongoDB
5. Returns the generated content

---

# Authentication Flow

CloserKit uses JWT-based authentication.

Flow:

```
User Login
    |
    ↓
Server validates credentials
    |
    ↓
JWT Token Generated
    |
    ↓
Client stores token
    |
    ↓
Token sent with requests
    |
    ↓
Middleware verifies token
    |
    ↓
Protected route access granted
```

---

# Database Models

## User

Stores account information.

```js
{
  (name, email, password);
}
```

---

## Project

Stores client/business information.

```js
{
  (user, businessName, website, industry, city, notes);
}
```

---

## Pitch

Stores AI-generated content.

```js
{
  (user, project, type, prompt, response, model);
}
```

---

# Deployment

The backend is deployed using Render.

Production requirements:

- MongoDB Atlas connection
- Environment variables configured
- OpenAI API key added
- CORS configured for frontend URL

Deployment commands:

Build:

```bash
npm install
```

Start:

```bash
npm start
```

---

# Security

Implemented security measures:

- Password hashing with bcrypt
- JWT authentication
- Protected routes
- Helmet security middleware
- Rate limiting
- Environment variable protection
- MongoDB authentication

Sensitive files are excluded using `.gitignore`.

---

# Future Improvements

Planned improvements:

- User dashboard
- Proposal editor
- Proposal templates
- PDF export
- Email generation
- WhatsApp outreach messages
- Pitch analytics
- Subscription system
- Usage limits for AI generations

---

# Credits

## Developer

Built and developed by **M. Muneeb**

Frontend Developer

GitHub:
[https://github.com/mmuneeb1000](https://github.com/mmuneeb1000)

---

## Project

CloserKit is an AI-powered SaaS project created to help freelancers and businesses generate professional client pitches faster using modern web technologies and artificial intelligence.
