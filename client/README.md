# CloserKit Frontend

![CloserKit Banner](./screenshots/banner.png)

CloserKit is an AI-powered proposal generation platform designed to help freelancers, agencies, and businesses quickly create personalized website development proposals.

The frontend provides a complete dashboard experience where users can manage clients, generate AI proposals, and organize their sales workflow.

Built with React, Tailwind CSS, and modern frontend practices.

---

# Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Development Progress](#development-progress)
- [Authentication System](#authentication-system)
- [Dashboard](#dashboard)
- [Project Management](#project-management)
- [AI Proposal Workflow](#ai-proposal-workflow)
- [Pitch Management](#pitch-management)
- [UI and Design System](#ui-and-design-system)
- [Challenges](#challenges)

---

# Overview

CloserKit frontend is the user interface for an AI proposal generation SaaS application.

The goal was to create a clean, professional workflow:

1. User creates an account.
2. User manages client projects.
3. User provides business information.
4. AI generates a personalized proposal.
5. Generated proposals are saved and managed from the dashboard.

The application focuses on reducing repetitive proposal writing and helping developers/agencies improve their client outreach process.

---

# Features

## Authentication

- User registration
- User login
- Persistent authentication
- Protected routes
- User session handling
- Logout functionality

Implemented using:

- React Context API
- JWT authentication
- Axios interceptors

---

## Dashboard

The dashboard provides an overview of user activity.

Features:

- Total projects count
- Total generated proposals
- Recent activity feed
- Quick navigation to projects and proposals

Dashboard API integration was added to display real user data.

---

## Project Management

Users can create and manage client projects.

Features:

- Create projects
- View projects
- Edit projects
- Delete projects
- Store business information

Project fields:

- Business name
- Website
- Industry
- City
- Phone number
- Notes

The phone number is stored for future CRM features but is not sent to the AI generation system.

---

## AI Proposal Generation

Users can generate personalized website proposals from project data.

Workflow:

```

Project Data
|
|
Generate Request
|
|
OpenAI API
|
|
Saved Pitch
|
|
Proposal Viewer

```

Generated proposals include:

- Greeting
- Business problem
- Suggested solution
- Benefits
- Call to action

---

# Pitch Management

Generated proposals are saved and displayed in a proposal history view.

Features:

- View saved proposals
- Copy proposal text
- Delete proposals
- Delete all proposals
- Proposal modal viewer
- Timeline/log style display

Future features:

- PDF export
- Email sending
- Proposal status tracking

---

# Tech Stack

## Frontend

- React
- React Router
- Tailwind CSS
- Axios
- React Icons
- Vite

## Backend Integration

- REST API
- JWT Authentication
- MongoDB data storage
- OpenAI API

---

# Project Structure

```

src
|
├── api
│   └── axios.js
|
├── components
│   |
│   ├── layout
│   │   ├── Header.jsx
│   │   └── Layout.jsx
│   |
│   ├── projects
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectForm.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── DeleteModal.jsx
│   │   └── ProposalModal.jsx
│   |
│   ├── pitches
│   │   ├── PitchCard.jsx
│   │   ├── PitchList.jsx
│   │   └── EmptyPitches.jsx
│   |
│   └── common
│
├── context
│   └── AuthContext.jsx
|
├── pages
│   |
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Projects.jsx
│   ├── Pitches.jsx
│   ├── Login.jsx
│   └── Register.jsx
|
├── routes
│   └── ProtectedRoute.jsx
|
└── App.jsx

```

---

# Development Progress

## Phase 1: Project Setup

Completed:

- React + Vite setup
- Tailwind CSS configuration
- React Router implementation
- Component structure planning

---

## Phase 2: Authentication

Completed:

- Login page
- Registration page
- Auth Context
- Protected routes
- User session persistence

---

## Phase 3: Application Layout

Completed:

- Responsive navbar
- Desktop navigation
- Mobile hamburger menu
- User menu
- Logout functionality

Design direction:

- Green
- White
- Gray
- Red accents

---

## Phase 4: Project System

Completed:

- Project listing
- Project creation modal
- Project editing
- Delete confirmation modal
- Business information storage

---

## Phase 5: AI Proposal System

Completed:

- Generate proposal button
- AI request handling
- Proposal modal
- Loading skeleton state
- Saved proposal storage

---

## Phase 6: Proposal History

Completed:

- Proposal timeline layout
- Proposal preview
- Copy functionality
- Delete functionality
- Full proposal viewer

---

# UI Design System

Main colors:

```

Primary:
Green

Background:
White

Secondary:
Gray

Danger:
Red

```

Typography:

Recommended:

- Headings: Manrope
- Body: Inter

Design goals:

- Professional SaaS appearance
- Minimal spacing
- Fast information scanning
- Clean dashboard experience

---

# Challenges

## Authentication Flow

Managing protected routes and keeping authentication state synchronized required careful handling between:

- React Context
- Local storage
- API requests

---

## AI Response Handling

Generated proposals can take several seconds.

Implemented:

- Loading states
- Skeleton UI
- Modal-based viewing

---

## Component Communication

Managing state between:

- Projects page
- Project cards
- Proposal modal
- Pitch history

required designing reusable components with clear props.

---

# Future Improvements

## User Experience

- Add animations using Framer Motion
- Add better loading states
- Add toast notifications
- Improve empty states
- Add onboarding flow

---

## Authentication

Future security improvements:

- Google OAuth login
- Email verification
- Password reset
- Two-factor authentication
- Profile management

---

## Proposal Features

Planned:

- Export proposal as PDF
- Download proposal templates
- Proposal editing before sending
- Proposal sharing links
- Email proposals directly
- Track proposal views

---

## CRM Features

Potential additions:

- Client pipeline
- Lead status
- Follow-up reminders
- WhatsApp integration
- Contact management
- Notes history

---

## Dashboard Improvements

Future dashboard features:

- Charts and analytics
- Proposal conversion tracking
- Monthly activity reports
- Revenue tracking

---

## AI Improvements

Possible enhancements:

- Multiple proposal tones
- Different industries templates
- Custom brand voice
- AI follow-up messages
- Cold outreach generation

---
