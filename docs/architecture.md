# Architecture

# Overview

The platform is a SaaS application for technical interviews.

It allows organizations to:
- create coding challenges
- create interview sessions
- evaluate candidates
- replay candidate behavior
- execute code securely
- analyze interview activity

The system architecture follows:
- modular monolith
- domain-driven modules
- scalable infrastructure boundaries
- event-based replay tracking

---

# High-Level Architecture

Frontend:
- Next.js
- React
- Tailwind
- Zustand

Backend:
- NestJS
- Prisma
- PostgreSQL
- Redis
- BullMQ

Execution:
- Docker sandbox containers

Realtime:
- Socket.IO

Storage:
- PostgreSQL
- Redis
- S3-compatible object storage

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
  architecture.md
  api.md
  database.md
  roadmap.md

---

# Core Domains

## Authentication
Handles:
- login
- signup
- sessions
- permissions

---

## Organizations
Handles:
- companies
- recruiter management
- organization roles

---

## Challenges
Handles:
- coding challenges
- whiteboard challenges
- challenge templates

---

## Interview Sessions
Handles:
- candidate interview lifecycle
- session states
- code persistence
- session metadata

---

## Replay Engine
Handles:
- event timeline
- typing replay
- interaction tracking

---

## Execution Engine
Handles:
- secure code execution
- test execution
- container lifecycle

---

# Frontend Architecture

Uses:
- App Router
- React Server Components
- Client Components only when necessary

State:
- React Query for server state
- Zustand for local state

---

# Backend Architecture

Structure:
/modules
  /auth
  /organizations
  /challenges
  /sessions
  /runner
  /replay

Each module contains:
- controller
- service
- dto
- repository
- entities

---

# Realtime Architecture

Socket.IO is used for:
- live code saving
- typing events
- whiteboard sync
- replay streaming

Realtime events are persisted asynchronously.

---

# Replay Event Architecture

Replay is event-driven.

Examples:
- typed_character
- deleted_code
- pasted_code
- switched_tab
- run_code

Events are append-only.

---

# Execution Architecture

Candidate code is executed in:
- isolated Docker containers
- temporary environments
- restricted resource limits

Containers are:
- ephemeral
- network-restricted
- CPU-limited
- memory-limited

---

# Security Principles

Never:
- execute code inside API containers
- allow privileged containers
- expose host filesystem
- trust client input

Always:
- validate DTOs
- sanitize outputs
- rate limit endpoints

---

# Scaling Strategy

Initial:
- modular monolith
- single database
- single Redis instance

Future:
- Kubernetes
- dedicated execution cluster
- event streaming
- ClickHouse analytics

---

# Infrastructure Strategy

Development:
- Docker Compose

Production:
- containerized services
- managed PostgreSQL
- managed Redis
- autoscaled runners

---

# Design Philosophy

The platform should feel:
- fast
- modern
- developer-centric
- minimal

Inspired by:
- GitHub
- Linear
- Vercel