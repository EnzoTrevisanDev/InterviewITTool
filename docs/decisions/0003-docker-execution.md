# ADR 0003 — Docker Sandbox Execution

# Status
Accepted

# Context

Candidate code execution is dangerous.

# Decision

Use isolated Docker containers for execution.

Execution containers must:
- be ephemeral
- have memory limits
- have CPU limits
- have restricted network

# Consequences

Pros:
- isolation
- security
- scalability

Cons:
- infrastructure cost
- orchestration complexity