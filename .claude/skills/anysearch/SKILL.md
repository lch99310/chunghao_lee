---
name: anysearch
description: Query the AnySearch web search API. Trigger when the user asks to "search the web", "look up", "find recent info about X", "what's the latest on …", or otherwise wants fresh information from the open web that isn't in the codebase or training data.
---

# AnySearch

AnySearch is a hosted web-search API. Call it with `curl` from Bash.

## Auth

The API key lives in the `ANYSEARCH_API_KEY` environment variable. Never read, log, echo, or commit this value. If it is unset, stop and tell the user to set it in their user-level `~/.claude/settings.json` env (or the web environment's env vars) — do not prompt them to paste it into the chat.

## Endpoint

`POST https://api.anysearch.com/v1/search`

Headers:
- `Authorization: Bearer $ANYSEARCH_API_KEY`
- `Content-Type: application/json`

Body fields:
- `query` (string, required) — the search query.
- `max_results` (int, optional) — cap on results, default 5.
- `domains` (array of strings, optional) — restrict to categories such as `tech`, `academic`.

## Example

```bash
curl -sS -X POST https://api.anysearch.com/v1/search \
  -H "Authorization: Bearer $ANYSEARCH_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "What is quantum computing?",
    "max_results": 5
  }'
```

## Usage notes

- Build the JSON body with a heredoc or `jq -n` when the query contains quotes or shell metacharacters — never interpolate untrusted text directly into the `-d` string.
- Summarize results for the user; do not dump raw JSON unless they ask.
- If the API returns a non-2xx status, surface the status code and error body rather than retrying blindly.
