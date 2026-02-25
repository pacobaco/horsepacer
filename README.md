# HORSE Pacer Platform

## Overview

HORSE Pacer is a challenge-based learning marketplace where coaches create tasks and learners pay to unlock step-by-step coaching.

Core concept:

Coach performs → Learner unlocks steps → Learner matches challenge → Skills earned

---

## Features

- User accounts
- Task marketplace
- Step-based coaching
- Pay-per-step learning
- Stripe payments
- Progress tracking

---

## Project Structure

horse-pacer/

frontend/
React user interface

backend/
Node.js API

database/
PostgreSQL schema

.env
Environment variables

README.md

---

## Installation

### 1. Clone Project

git clone https://github.com/yourname/horse-pacer

cd horse-pacer

---

### 2. Install Backend

cd backend

npm install

Start server:

node server.js

Backend runs on:

http://localhost:5000

---

### 3. Install Frontend

cd frontend

npm install

Start frontend:

npm start

Frontend runs on:

http://localhost:3000

---

## Database Setup

Install PostgreSQL.

Create database:

horsepacer

Run schema:

database/schema.sql

---

## Environment Variables

Create a .env file:

DB_PASSWORD=yourpassword
STRIPE_KEY=your_stripe_key
JWT_SECRET=yoursecret

---

## API Endpoints

GET /tasks
Returns all tasks

POST /auth/login
Login user

POST /payments/checkout
Create payment session

---

## Stripe Setup

Create Stripe account.

Create API key.

Add to .env file.

Replace:

YOUR_KEY

Inside:

backend/routes/payments.js

---

## Development Stack

Frontend

- React
- React Router
- Axios

Backend

- Node.js
- Express

Database

- PostgreSQL

Payments

- Stripe

---

## Deployment

Recommended hosting:

Frontend

Vercel or Netlify

Backend

Render or Railway

Database

Supabase or PostgreSQL

---

## Future Features

- Coach dashboards
- Automatic step unlocking
- Ratings
- Leaderboards
- Mobile app

---

## License

MIT License
