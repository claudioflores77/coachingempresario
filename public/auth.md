# AI Agent Authentication & Registration Instructions

Welcome to Claudio Flores - Consultoría Estratégica Empresarial (`coachingempresario.lovable.app`).

## Public Access Model
This site and its public API endpoints are freely accessible to AI agents without required credentials or tokens.

## Agent Capabilities & Resources
- **API Catalog**: `/.well-known/api-catalog`
- **MCP Server Card**: `/.well-known/mcp/server-card.json`
- **Agent Skills Index**: `/.well-known/agent-skills/index.json`
- **ARD Manifest**: `/.well-known/ai-catalog.json`

## Registration Procedure for Agents
1. Agents do not require an API key or registration token for public information retrieval.
2. If programmatic booking or consultation requests are submitted via WebMCP or API tools, standard public schema validation applies.
3. OAuth / OIDC discovery metadata is served at `/.well-known/openid-configuration`, `/.well-known/oauth-authorization-server`, and `/.well-known/oauth-protected-resource`.
