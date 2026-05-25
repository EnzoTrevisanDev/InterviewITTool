# Interview Platform

IMPORTANT:
Before writing any code, read ALL documentation inside `/docs`.

Required reading:
- docs/architecture.md
- docs/database.md
- docs/api.md
- docs/roadmap.md
- docs/stack.md
- docs/product.md
- docs/PROJECT_RULES.md
- docs/CONTRIBUTING.md
- docs/decisions/*

---

# Overview

Interview Platform is a SaaS platform for technical interviews.

The platform allows companies and recruiters to:
- create coding challenges
- create whiteboard challenges
- evaluate candidates
- replay candidate sessions
- analyze coding behavior
- execute code securely in isolated containers

The main goal is:
"understand candidate reasoning instead of only final answers"

---

# Product Vision

This platform combines concepts from:
- HackerRank
- CoderPad
- Excalidraw
- Miro

But adds:
- replay system
- behavioral analytics
- AI-assisted fraud signals
- whiteboard execution visualization

---

# Architecture Philosophy

CRITICAL:
Do NOT overengineer.

This project MUST begin as:
- modular monolith
- simple architecture
- production-ready
- scalable later

Avoid:
- premature microservices
- Kubernetes
- event sourcing everywhere
- excessive abstractions
- unnecessary patterns

Always:
- prefer explicit code
- prefer readable modules
- prefer simple architecture

---

# Tech Stack

Frontend:
- Next.js
- React
- TypeScript
- Tailwind
- Zustand
- TanStack Query

Backend:
- NestJS
- Prisma
- PostgreSQL
- Redis
- BullMQ

Realtime:
- Socket.IO

Editor:
- Monaco Editor

Whiteboard:
- Excalidraw

Infrastructure:
- Docker
- Docker Compose

---

# Monorepo Structure

/apps
  /web
  /api
  /runner

/packages
  /ui
  /types
  /eslint-config
  /tsconfig

/docs
  /decisions
  /examples
  /prompts
  /tasks

---

# Coding Standards

## General Rules

- Use TypeScript everywhere
- Avoid `any`
- Prefer explicit typing
- Keep files small
- Keep modules isolated
- Prefer composition over inheritance
- Keep functions focused
- Avoid unnecessary abstractions

---

# Frontend Rules

- Use App Router
- Prefer Server Components
- Use Client Components only when necessary
- Avoid unnecessary useEffect
- Use React Query for server state
- Use Zustand only for local UI state
- Keep UI responsive
- Keep components reusable but simple

---

# Backend Rules

Use modular architecture.

Each module should contain:
- controller
- service
- dto
- repository

Rules:
- controllers stay thin
- business logic belongs in services
- validate DTOs using class-validator
- never access database directly from controllers
- use Prisma for DB access

---

# Database Rules

PostgreSQL is the source of truth.

All tables should include:
- createdAt
- updatedAt

Use:
- UUID
or
- CUID

Avoid:
- premature optimization
- unnecessary joins
- complex event sourcing

---

# Security Rules

CRITICAL:

Candidate code execution MUST NEVER:
- run inside API containers
- access host filesystem
- run privileged containers
- have unrestricted networking

Execution must happen in:
- isolated Docker containers
- ephemeral environments
- resource-limited containers

Always:
- sanitize input
- validate DTOs
- limit resources
- log execution attempts

---

# MVP Scope

The initial MVP includes:
- authentication
- organizations
- challenge management
- coding interview sessions
- Monaco editor
- realtime autosave
- Docker code execution
- replay timeline
- recruiter dashboard

The MVP excludes:
- Kubernetes
- advanced AI analysis
- CRDT sync
- collaborative editing
- distributed execution clusters
- advanced whiteboard simulation

---

# Domain Models

## User

Represents platform users.

Roles:
- ADMIN
- RECRUITER
- CANDIDATE

---

## Organization

Represents companies using the platform.

---

## Challenge

Represents coding or whiteboard challenges.

Types:
- CODE
- WHITEBOARD
- QUIZ

---

## InterviewSession

Represents a candidate interview attempt.

Tracks:
- status
- code
- replay events
- execution results

---

## ReplayEvent

Stores timeline events.

Examples:
- typed_character
- deleted_code
- pasted_code
- run_code
- switched_tab

Replay must be event-driven.

---

# Sprint Rules

IMPORTANT:
Implement ONLY the requested sprint.

Never:
- implement future sprints early
- create abstractions for future features
- build systems not requested yet

Prefer:
- iterative delivery
- focused implementations
- minimal complexity

---

# UI Philosophy

The UI should feel:
- modern
- minimal
- fast
- clean
- developer-focused

Avoid:
- excessive animations
- cluttered dashboards
- enterprise-heavy design

Inspired by:
- Linear
- Vercel
- GitHub

---

# Performance Rules

- Minimize rerenders
- Avoid premature optimization
- Use lazy loading when appropriate
- Memoize only when necessary

---

# Testing Rules

Write:
- unit tests for services
- integration tests for critical flows

Avoid:
- excessive mocks
- brittle tests

---

# API Standards

Use:
- REST API
- JSON responses
- versioned routes

Avoid:
- GraphQL
- RPC abstractions

---

# Naming Conventions

Files:
- kebab-case

Components:
- PascalCase

Variables:
- camelCase

Constants:
- UPPER_SNAKE_CASE

---

# Final Rule

If uncertain:
prefer simplicity over abstraction.