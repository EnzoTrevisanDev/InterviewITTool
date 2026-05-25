Read these files first:

- README.md
- CLAUDE.md
- PROJECT_RULES.md
- docs/architecture.md
- docs/database.md
- docs/api.md
- docs/roadmap.md
- docs/decisions/*

Current Sprint:
Sprint 1 - Foundation

Goal:
Create the initial SaaS platform foundation.

Requirements:
- setup monorepo structure
- configure Next.js app
- configure NestJS API
- configure Prisma
- configure PostgreSQL connection
- configure Redis connection
- create authentication system
- create organization module
- create protected dashboard
- configure Docker Compose

Technical Rules:
- use TypeScript
- use Prisma
- use NestJS modules
- use Tailwind
- use App Router
- avoid any
- avoid overengineering

Constraints:
- DO NOT implement future sprints
- DO NOT add Kubernetes
- DO NOT add GraphQL
- DO NOT create microservices
- DO NOT create unnecessary abstractions

Deliverables:
- working monorepo
- auth system
- organizations CRUD
- login page
- dashboard page
- protected routes
- Prisma schema
- DTO validation
- docker setup

At the end:
- explain folder structure
- explain architecture decisions
- explain how to run locally
