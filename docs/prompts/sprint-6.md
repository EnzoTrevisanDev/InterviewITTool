Read all architecture and rules documentation first.

Current Sprint:
Sprint 6 - Replay System

Goal:
Implement interview replay engine.

Requirements:
- capture typing events
- save replay events
- replay timeline
- replay player
- playback controls

Replay Events:
- typed_character
- deleted_character
- pasted_code
- switched_tab
- run_code

Constraints:
- keep replay event-based
- avoid excessive abstractions

Deliverables:
- replay module
- replay storage
- replay player
- timeline controls