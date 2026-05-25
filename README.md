# Interview Platform

Interview Platform is a SaaS platform for technical interviews.

The platform helps companies:
- create coding challenges
- run technical interviews
- replay candidate sessions
- analyze candidate behavior
- execute code securely
- evaluate reasoning instead of only final answers

---

# Vision

The goal is to create a modern technical interview platform inspired by:
- HackerRank
- CoderPad
- Excalidraw
- Miro

But focused on:
- replay systems
- candidate reasoning
- behavioral analytics
- secure code execution

---

# Tech Stack

Frontend:
- Next.js
- React
- Tailwind
- TypeScript

Backend:
- NestJS
- Prisma
- PostgreSQL
- Redis

Infrastructure:
- Docker
- Docker Compose

Editor:
- Monaco Editor

Realtime:
- Socket.IO

---

# Project Structure

/apps
  /web
  /api
  /runner

/packages
  /ui
  /types

/docs
  architecture.md
  api.md
  database.md
  roadmap.md
  stack.md
  product.md

---

# Documentation

Main docs:
- docs/architecture.md
- docs/database.md
- docs/api.md
- docs/roadmap.md
- docs/stack.md
- docs/product.md

Rules:
- docs/PROJECT_RULES.md
- docs/CONTRIBUTING.md

Architecture decisions:
- docs/decisions/

AI prompts:
- docs/prompts/

Sprint checklists:
- docs/tasks/

Examples:
- docs/examples/

---

# Development Setup

## Requirements

- Node.js 22+
- Docker
- Docker Compose
- PostgreSQL
- Redis

---

# Install

```bash
npm install