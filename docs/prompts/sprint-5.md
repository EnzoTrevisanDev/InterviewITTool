Read all architecture and rules documentation first.

Current Sprint:
Sprint 5 - Code Execution

Goal:
Create secure code execution engine.

Requirements:
- Docker-based execution
- isolated containers
- execution timeout
- memory limits
- test execution
- execution logs

Security Rules:
- containers must be ephemeral
- no privileged containers
- restricted network
- restricted filesystem

Constraints:
- DO NOT implement Kubernetes
- DO NOT implement distributed runners

Deliverables:
- runner service
- execution API
- Docker integration
- execution result UI