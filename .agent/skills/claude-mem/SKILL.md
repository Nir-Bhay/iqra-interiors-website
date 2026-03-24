---
name: claude-mem
version: 1.0.0
description: |
  Persistent memory and context management skill adapted from claude-mem.
  Helps maintain continuity across sessions by capturing observations,
  generating summaries, and making them available for future work.
  Use when you need to preserve project knowledge, track decisions,
  or retrieve past context.
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - AskUserQuestion
---

# Claude-Mem: Persistent Memory System

Adapted from [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) for workspace context management.

## Purpose

Maintain continuity of knowledge across sessions by:
1. **Capturing observations** - Key decisions, patterns discovered, solutions found
2. **Generating summaries** - Semantic summaries of work done
3. **Retrieving context** - Making past knowledge available in future sessions

---

## When to Use This Skill

- Starting work on an existing project (recall past context)
- Making architectural decisions (document the reasoning)
- Finding solutions to hard bugs (save for future reference)
- Completing major milestones (summarize what was accomplished)
- Switching between projects (maintain separate contexts)

---

## Memory Categories

### 1. Observations
Quick captures of what happened during a session:
- Tool usage patterns
- Files modified
- Errors encountered and fixed
- Decisions made

### 2. Summaries
Higher-level semantic descriptions:
- Session summaries (what was accomplished)
- Project summaries (current state of work)
- Feature summaries (how something was implemented)

### 3. Context Priming
Information automatically injected at session start:
- Recent session summaries
- Active project state
- Pending tasks and blockers

---

## Progressive Disclosure Pattern

To manage token costs, retrieve memory in layers:

### Layer 1: Index (~50-100 tokens/result)
Get compact list of what's available:
- Session IDs and dates
- Summary titles
- Observation counts

### Layer 2: Timeline (~100-200 tokens/result)
Chronological context around specific points:
- What happened before/after
- Related observations

### Layer 3: Full Details (~500-1000 tokens/result)
Complete observation content:
- Only fetch for specifically relevant items
- Always batch multiple requests

---

## Memory Storage Locations

For this workspace, memory is stored in:

```
Career-Vault/
├── 00 Dashboard/          # Active context, current state
├── 99 Archive/            # Historical observations
profile_data/
├── timeline.md            # Chronological record
└── gaps_improvements.md   # Identified areas for growth
```

---

## Best Practices

### Capture Decisions, Not Just Actions
Bad: "Modified auth.js"
Good: "Switched from JWT to session-based auth because mobile clients had token refresh issues"

### Use Specific Details
Bad: "Fixed the bug"
Good: "Fixed layout thrashing in form-fill by batching DOM reads before writes"

### Link Related Observations
Reference past observations when they're relevant to current work.

### Prune Stale Context
Mark old observations as resolved/superseded to keep active context fresh.

---

## Privacy Control

Use `<private>` tags to exclude sensitive content from storage:

```
<private>
API_KEY=sk-xxxxxxxxxxxxx
</private>
```

Content within these tags won't be persisted to memory.

---

## Reference

Based on [claude-mem](https://github.com/thedotmack/claude-mem) by Alex Newman (@thedotmack).
Original project provides persistent memory compression for Claude Code.
