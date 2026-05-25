# API Documentation

# Base URL

/api/v1

---

# Authentication

## POST /auth/register

Creates a new user.

Request:
{
  "email": "user@email.com",
  "password": "password",
  "name": "John"
}

Response:
{
  "user": {},
  "token": ""
}

---

## POST /auth/login

Authenticates user.

---

## GET /auth/me

Returns current authenticated user.

---

# Organizations

## POST /organizations

Creates organization.

---

## GET /organizations

Lists organizations.

---

## GET /organizations/:id

Returns organization details.

---

# Challenges

## POST /challenges

Creates challenge.

Fields:
- title
- description
- type
- starterCode
- language
- difficulty

---

## GET /challenges

List challenges.

---

## GET /challenges/:id

Get challenge details.

---

## PATCH /challenges/:id

Update challenge.

---

## DELETE /challenges/:id

Delete challenge.

---

# Interview Sessions

## POST /sessions

Creates interview session.

---

## GET /sessions/:id

Returns session details.

---

## PATCH /sessions/:id/code

Updates candidate code.

---

## POST /sessions/:id/run

Executes code.

---

## POST /sessions/:id/finish

Finishes session.

---

# Replay Events

## POST /sessions/:id/events

Stores replay events.

---

## GET /sessions/:id/replay

Returns replay timeline.

---

# Execution

## POST /runner/execute

Executes code in isolated environment.

Request:
{
  "language": "typescript",
  "code": "",
  "tests": ""
}

Response:
{
  "stdout": "",
  "stderr": "",
  "success": true,
  "executionTime": 100
}

---

# Health

## GET /health

Returns API health.

---

# Error Format

{
  "statusCode": 400,
  "message": "Validation failed",
  "error": "Bad Request"
}

---

# API Rules

- REST only
- JSON responses
- JWT authentication
- Validation required
- Versioned endpoints