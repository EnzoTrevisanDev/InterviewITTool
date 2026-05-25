# ADR 0005 — Socket.IO

# Status
Accepted

# Context

Realtime synchronization is required.

# Decision

Use Socket.IO for MVP realtime.

# Consequences

Pros:
- easy implementation
- mature ecosystem
- reconnect support

Cons:
- future migration to CRDT possible