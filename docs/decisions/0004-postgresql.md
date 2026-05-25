# ADR 0004 — PostgreSQL

# Status
Accepted

# Context

The platform requires:
- transactional consistency
- relational data
- mature tooling

# Decision

Use PostgreSQL as primary database.

# Consequences

Pros:
- reliability
- Prisma support
- scalability

Cons:
- replay analytics may outgrow it later