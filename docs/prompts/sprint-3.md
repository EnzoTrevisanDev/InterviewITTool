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
Sprint 3 - Interview Sessions

Goal:
Create interview session lifecycle.

Requirements:
- create interview sessions
- candidate access flow
- session state tracking
- session expiration
- save candidate progress
- recruiter session dashboard

Session Status:
- CREATED
- STARTED
- FINISHED
- EXPIRED

Technical Rules:
- use DTO validation
- keep services modular
- keep controllers thin

Constraints:
- DO NOT implement Monaco yet
- DO NOT implement replay yet
- DO NOT implement Docker runner yet

Deliverables:
- session module
- session APIs
- candidate session page
- recruiter session list
- Prisma schema updates

At the end:
- explain implementation
- explain DB changes
- explain routes added