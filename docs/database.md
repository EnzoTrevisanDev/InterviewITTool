# Database

# Main Database

PostgreSQL

Purpose:
- transactional data
- users
- organizations
- interviews
- challenges

---

# Cache

Redis

Purpose:
- sessions
- queues
- realtime state

---

# Future Analytics Database

ClickHouse

Purpose:
- replay analytics
- behavior analysis
- event aggregation

---

# Main Tables

## users

Fields:
- id
- email
- passwordHash
- name
- createdAt
- updatedAt

---

## organizations

Fields:
- id
- name
- slug
- createdAt
- updatedAt

---

## organization_members

Fields:
- id
- userId
- organizationId
- role

Roles:
- OWNER
- ADMIN
- RECRUITER

---

## challenges

Fields:
- id
- organizationId
- title
- description
- type
- difficulty
- starterCode
- language
- createdById

Types:
- CODE
- WHITEBOARD
- QUIZ

---

## interview_sessions

Fields:
- id
- challengeId
- candidateEmail
- status
- startedAt
- finishedAt

Status:
- CREATED
- STARTED
- FINISHED
- EXPIRED

---

## session_code_snapshots

Fields:
- id
- sessionId
- code
- language
- createdAt

---

## replay_events

Fields:
- id
- sessionId
- eventType
- payload
- timestamp

Examples:
- typed_character
- deleted_code
- pasted_code
- switched_tab

---

# Relationships

users
  ↳ organization_members
  ↳ organizations

organizations
  ↳ challenges

challenges
  ↳ interview_sessions

interview_sessions
  ↳ replay_events

---

# Database Rules

- use UUID or CUID
- always include timestamps
- soft delete only when necessary
- use indexes for replay queries

---

# Future Database Plans

Future additions:
- analytics tables
- AI scoring tables
- event partitioning
- ClickHouse integration