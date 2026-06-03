# Campus Notifications Microservice Frontend

## Overview

This repository contains the frontend implementation for the Afford Medical Technologies assessment.

The project includes a reusable logging middleware that integrates with the Afford Evaluation Service and will be used throughout the application to record important events, API interactions, warnings, errors, and user actions.

---

## Tech Stack

* React
* Vite
* JavaScript
* Axios

---

## Project Structure

```text
src/
├── config/
├── logger/
│   └── logger.js
├── components/
├── pages/
├── services/
├── App.jsx
└── main.jsx
```

---

## Logging Middleware

A reusable logging utility has been implemented.

Function Signature:

```javascript
Log(stack, level, packageName, message)
```

Example:

```javascript
await Log(
  "frontend",
  "info",
  "page",
  "Application started successfully"
);
```

---

## Supported Values

### Stack

```text
frontend
```

### Level

```text
debug
info
warn
error
fatal
```

### Package

```text
api
component
hook
page
state
style
```

---

## Setup Instructions

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## Environment Configuration

Create your token configuration before running the application.

Example:

```javascript
export const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";
```

Note: Access tokens and secrets should never be committed to version control.

---

## Challenges Faced and Resolutions

### Access Token Expiration

During development, API requests to the notification service occasionally returned **401 Unauthorized** errors.

#### Cause

The access token provided by the authentication service has a limited validity period and expired during testing.

#### Resolution

* Re-authenticated using the provided authentication endpoint.
* Generated a fresh access token.
* Updated the token configuration in `src/config/token.js`.
* Restarted the application and verified successful API communication.

#### Outcome

Notification fetching, logging, and Stage 1 functionality resumed successfully after token renewal.
