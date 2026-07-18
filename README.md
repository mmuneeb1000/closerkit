# CloserKit

AI-powered proposal generation SaaS built using the **MERN stack** (MongoDB, Express.js, React, Node.js).

CloserKit is designed to help freelancers, agencies, and web developers automate client outreach by generating personalized website development proposals, managing client projects, and organizing proposal history.

The project is being developed with a real SaaS product mindset. While it started as a development project, the long-term goal is to evolve CloserKit into a genuine product that helps professionals streamline their sales and client acquisition workflow.
LIVE SITE = https://closerkit.netlify.app

---

# Table of Contents

- [Overview](#overview)
- [Product Vision](#product-vision)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Application Architecture](#application-architecture)
- [Development Progress](#development-progress)
- [Backend Development](#backend-development)
- [Frontend Development](#frontend-development)
- [Security](#security)
- [Challenges](#challenges)
- [Future Improvements](#future-improvements)
- [Installation](#installation)
- [Credits](#credits)

---

# Overview

Finding clients and writing personalized proposals can be time-consuming for freelancers and agencies.

CloserKit solves this problem by combining:

- Client project management
- AI-generated proposals
- Proposal history
- Dashboard analytics
- Future CRM functionality

The core workflow:

```

User
|
Create Account
|
Create Client Project
|
Add Business Information
|
Generate AI Proposal
|
Save Proposal History
|
Manage Client Outreach

```

The application uses OpenAI to generate professional proposals based on client information while storing all generated responses for future access.

---

# Product Vision

CloserKit is being built as a genuine SaaS product rather than a simple AI wrapper.

The long-term vision is to create a complete client acquisition platform for freelancers and agencies.

Future product direction:

- AI proposal generation
- Lead management
- Client relationship management
- Follow-up automation
- Proposal analytics
- Team collaboration
- Subscription plans
- Usage-based AI credits

The architecture has been designed with scalability in mind, allowing additional SaaS features to be introduced over time.

---

# Features

## Authentication

Implemented:

- User registration
- User login
- JWT authentication
- Protected routes
- Persistent sessions
- Logout functionality

Future improvements:

- Google OAuth
- Email verification
- Password reset
- Two-factor authentication

---

## Client Project Management

Users can create and manage client projects.

Stored information:

- Business name
- Website
- Industry
- City
- Phone number
- Additional notes

Features:

- Create projects
- View projects
- Update projects
- Delete projects

The phone number field is stored for future CRM functionality and is not included in AI proposal generation.

---

## AI Proposal Generation

Users can generate customized proposals using project information.

Generated proposals include:

- Client greeting
- Identified business problem
- Suggested solution
- Benefits
- Call to action

The generated response is stored in the database and linked to the related project.

---

## Proposal Management

Users can:

- View saved proposals
- Copy proposal content
- Delete proposals
- Review proposal history
- Open full proposals in a modal viewer

Future improvements:

- PDF export
- Proposal editing
- Email sending
- Proposal templates
- Proposal tracking

---

## Dashboard

Dashboard provides an overview of user activity.

Current features:

- Total projects
- Total generated proposals
- Recent activity

Future improvements:

- Analytics charts
- Conversion tracking
- Revenue tracking
- Client pipeline overview

---

# Tech Stack

CloserKit is built using the MERN stack.

## MongoDB

Used for:

- User accounts
- Client projects
- Generated proposals
- Application data storage

## Express.js

Used for:

- REST API development
- Authentication routes
- Business logic
- Backend services

## React

Used for:

- User interface
- Dashboard
- Project management
- Proposal workflow

## Node.js

Used for:

- Backend runtime
- API server
- Application services

---

## Additional Technologies

Frontend:

- React Router
- Tailwind CSS
- Axios
- React Icons
- Vite

Backend:

- Mongoose
- JWT
- Helmet
- Express Rate Limit
- OpenAI API

Database:

- MongoDB Atlas

Deployment:

- Frontend hosting
- Render backend deployment
- MongoDB Atlas database

---

# Application Architecture

```

CloserKit

client/
|
├── components
│ |
│ ├── layout
│ │ ├── Header.jsx
│ │ └── Layout.jsx
│ |
│ ├── projects
│ │ ├── ProjectCard.jsx
│ │ ├── ProjectForm.jsx
│ │ ├── ProjectModal.jsx
│ │ ├── DeleteModal.jsx
│ │ └── ProposalModal.jsx
│ |
│ ├── pitches
│ │ ├── PitchCard.jsx
│ │ ├── PitchList.jsx
│ │ └── EmptyPitches.jsx
│ |
│ └── common
|
├── pages
│ ├── Home.jsx
│ ├── Dashboard.jsx
│ ├── Projects.jsx
│ ├── Pitches.jsx
│ ├── Login.jsx
│ └── Register.jsx
|
├── context
│ └── AuthContext.jsx
|
└── routes
└── ProtectedRoute.jsx

server/

├── controllers
│ ├── authController.js
│ ├── projectController.js
│ ├── pitchController.js
│ └── dashboardController.js
|
├── models
│ ├── User.js
│ ├── Project.js
│ └── Pitch.js
|
├── routes
|
├── services
│ └── openaiService.js
|
├── middleware
|
└── server.js

```

---

# Development Progress

## Phase 1: Project Foundation

Completed:

- MERN stack setup
- Backend server configuration
- MongoDB connection
- React application setup
- Routing structure
- Component architecture

---

# Backend Development

## Server Setup

Completed:

- Express server
- Environment variables
- MongoDB Atlas connection
- API route structure

---

## Authentication System

Implemented:

Endpoints:

```

POST /api/auth/register

POST /api/auth/login

GET /api/auth/me

```

Features:

- Password hashing
- JWT generation
- Protected API access
- User authentication middleware

---

## Database Models

### User Model

Stores:

- Name
- Email
- Password
- Account information

### Project Model

Stores:

- Business information
- Client details
- User ownership

### Pitch Model

Stores:

- Generated proposal
- AI prompt
- AI model
- Related project
- Creation history

---

## API Development

Implemented:

### Projects

```

GET /api/projects

POST /api/projects

PUT /api/projects/:id

DELETE /api/projects/:id

```

### Pitches

```

GET /api/pitches

POST /api/pitches/proposal

DELETE /api/pitches/:id

```

### Dashboard

```

GET /api/dashboard

```

---

# Frontend Development

## Application Setup

Completed:

- React + Vite setup
- Tailwind CSS configuration
- React Router setup
- Axios API integration

---

## Authentication UI

Built:

- Login page
- Register page
- Auth Context
- Protected routes
- User session handling

---

## Layout System

Implemented:

- Responsive navigation
- User menu
- Logout functionality
- Mobile navigation

---

## Project Dashboard

Built:

- Project listing
- Create project modal
- Edit functionality
- Delete confirmation
- Client information management

---

## Proposal Workflow

Built:

- AI generation trigger
- Loading skeleton states
- Proposal modal
- Saved proposal history
- Copy functionality

---

# Security

Implemented:

- JWT authentication
- Protected routes
- Helmet middleware
- Express rate limiting
- Environment variable protection
- User-based database queries

Security improvements planned:

- OAuth login
- Account verification
- Advanced permissions
- Audit logging

---

# Challenges

## AI Response Handling

Challenge:

AI responses are asynchronous and may take several seconds.

Solution:

Implemented:

- Loading states
- Skeleton UI
- Modal feedback
- Database persistence

## State Management

Managing communication between:

- Projects
- Proposal generation
- Proposal history
- Dashboard

required reusable components and structured state management.

## User Data Security

Ensuring users only access their own data required:

- User ownership checks
- Protected API routes
- Database filtering

---

# Future Improvements

## SaaS Features

Planned:

- Subscription system
- Stripe payments
- Usage limits
- User profiles
- Team accounts

## CRM Features

Planned:

- Lead tracking
- Client pipeline
- Follow-up reminders
- WhatsApp integration
- Contact management

## AI Improvements

Planned:

- Multiple proposal styles
- Industry-specific templates
- Custom brand voice
- AI follow-up messages
- Outreach generation

## Proposal Improvements

Planned:

- PDF downloads
- Proposal templates
- Proposal editing
- Email delivery
- View tracking

---

# Installation

Clone the repository:

```bash
git clone https://github.com/mmuneeb1000/closerkit.git
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# Credits

Developed by:

## M. Muneeb

Frontend Developer

GitHub:

[https://github.com/mmuneeb1000](https://github.com/mmuneeb1000)

Built with:

- MongoDB
- Express.js
- React
- Node.js
- OpenAI API
- Tailwind CSS

---

# License

This project is currently developed as a portfolio project and an early-stage SaaS product concept.
