# ADR 0001 — Modular Monolith

# Status
Accepted

# Context

The platform is in MVP stage.

Microservices would introduce:
- deployment complexity
- operational overhead
- slower development

# Decision

Use modular monolith architecture.

Modules:
- auth
- organizations
- challenges
- sessions
- replay
- runner

# Consequences

Pros:
- faster iteration
- simpler deployment
- easier debugging

Cons:
- future service extraction required