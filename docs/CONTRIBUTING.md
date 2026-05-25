# Contributing

Thank you for contributing to Interview Platform.

---

# Project Philosophy

This project prioritizes:
- simplicity
- maintainability
- production readiness
- developer experience
- fast iteration

Avoid overengineering.

---

# Tech Stack

Frontend:
- Next.js
- React
- TypeScript
- Tailwind

Backend:
- NestJS
- Prisma
- PostgreSQL
- Redis

Infrastructure:
- Docker
- Docker Compose

---

# Coding Standards

## General Rules

- Use TypeScript everywhere
- Avoid `any`
- Keep files small
- Prefer composition over inheritance
- Prefer explicit code over magic abstractions
- Keep modules isolated
- Use consistent naming

---

# Frontend Rules

- Use App Router
- Prefer Server Components
- Use Client Components only when necessary
- Use React Query for server state
- Use Zustand only for local state
- Avoid excessive useEffect
- Keep components reusable but not overabstracted

---

# Backend Rules

Structure:

/modules
  /module-name
    controller
    service
    dto
    repository

Rules:
- Controllers must stay thin
- Business logic belongs in services
- Prisma access only inside repositories/services
- Validate all DTOs
- Never trust client input

---

# Database Rules

- Always include timestamps
- Use UUID or CUID IDs
- Prefer explicit relations
- Add indexes for critical queries
- Avoid premature optimization

---

# Git Rules

## Branch Naming

feature/*
fix/*
refactor/*
docs/*

Examples:
- feature/auth-system
- fix/session-timeout
- refactor/challenge-service

---

# Commit Convention

feat:
fix:
refactor:
docs:
style:
test:
chore:

Examples:
- feat: add challenge creation
- fix: replay event duplication
- refactor: simplify auth middleware

---

# Pull Requests

Every PR should:
- explain changes
- explain reasoning
- include screenshots if UI changes
- avoid unrelated refactors

---

# Security Rules

CRITICAL:

Candidate code execution must NEVER:
- run inside API containers
- access host filesystem
- run privileged containers
- have unrestricted network access

Always:
- use Docker isolation
- validate input
- sanitize output
- apply resource limits

---

# Architecture Rules

Do NOT:
- create microservices
- add Kubernetes early
- add GraphQL
- create unnecessary abstractions
- create generic repositories
- create enterprise patterns without need

Prefer:
- modular monolith
- explicit modules
- simple code
- readable code

---

# UI Philosophy

The platform should feel:
- modern
- minimal
- fast
- developer-focused

Inspired by:
- GitHub
- Linear
- Vercel