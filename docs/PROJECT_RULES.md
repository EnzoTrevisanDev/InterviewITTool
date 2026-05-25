# Project Rules

# Main Goal

Build a SaaS platform for technical interviews.

The system must allow:
- coding interviews
- interview replay
- secure code execution
- candidate analytics
- whiteboard challenges

---

# MVP Goal

The first version must ONLY focus on:
- coding interviews
- challenge management
- replay timeline
- secure execution

DO NOT implement advanced whiteboard execution yet.

---

# Core Principles

## Simplicity First

Prefer:
- explicit code
- readable modules
- direct implementations

Avoid:
- magic abstractions
- generic factories
- unnecessary interfaces
- enterprise architecture patterns

---

# Architecture Constraints

## MUST USE

- Next.js
- NestJS
- Prisma
- PostgreSQL
- Redis
- Socket.IO
- Docker

---

## MUST NOT USE

- Kubernetes
- GraphQL
- Microservices
- Event sourcing everywhere
- CQRS
- Complex DDD patterns

---

# Backend Rules

- Controllers stay thin
- Services contain business logic
- DTO validation required
- Use Prisma ORM
- Use modular architecture

---

# Frontend Rules

- App Router only
- Tailwind only
- TypeScript everywhere
- Minimal UI
- Responsive by default

---

# Execution Rules

CRITICAL:

Candidate code execution must:
- run in isolated Docker containers
- be resource limited
- be ephemeral
- be monitored

Never:
- execute code in API server
- allow unrestricted networking
- allow filesystem access

---

# Replay Rules

Replay must be event-based.

Examples:
- typed_character
- deleted_character
- pasted_code
- switched_tab
- run_code

Never save replay as final state only.

---

# AI Rules

AI should:
- assist recruiters
- summarize interviews
- provide suspicious activity signals

AI should NEVER:
- make final hiring decisions
- permanently block candidates
- claim certainty about AI usage

---

# Performance Rules

- Avoid unnecessary rerenders
- Avoid excessive abstractions
- Prefer simple SQL queries
- Use indexes where necessary

---

# UI Rules

Avoid:
- excessive animations
- cluttered dashboards
- corporate-heavy design

Prefer:
- clean layouts
- fast interactions
- keyboard-first UX

---

# Important

If uncertain:
prefer simplicity over abstraction.