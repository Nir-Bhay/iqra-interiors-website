---
name: obsidian-architect
description: Expert in structuring Obsidian vaults, creating atomic notes, and designing visual dashboards using Canvas.
---

# Obsidian Architect Skill

This skill provides guidelines and tools for transforming flat markdown content into a highly interconnected, "second brain" style Obsidian vault.

## Core Principles

1.  **Atomic Notes**: Break down large documents into small, single-concept files.
    *   *Bad*: `experience.md` containing all jobs.
    *   *Good*: `01 Experience/Google.md`, `01 Experience/Microsoft.md`.
2.  **MOC (Map of Content)**: detailed index notes that link to atomic notes.
3.  **Visual Dashboards**: Use `.canvas` files to visualize relationships, timelines, and knowledge graphs.
4.  **Tagging & Linking**: Use `[[WikiLinks]]` for connections and `#tags` for status/category.
    *   *Rule*: Always link "proper nouns" (Technologies, Companies, People) to their own notes.

## Directory Structure Standard

```text
root/
├── 00 Dashboard/       # Canvas files and entry points
├── 01 Experience/      # Work history atomic notes
├── 02 Projects/        # Project atomic notes
├── 03 Skills/          # Technology & Skill atomic notes
├── 04 Education/       # Degrees & Certifications
├── 99 Archive/         # Old/Flat files
└── Assets/             # Images/Attachments
```

## Canvas Generation Protocol

When creating a canvas:
1.  **JSON Structure**: Use the valid `nodes` and `edges` JSON format.
2.  **Layout Strategy**:
    *   **Timeline**: Horizontal flow (Left -> Right).
    *   **Clusters**: Group related notes (e.g., "Tech Stack" cluster).
    *   **Colors**: Use semantic colors (Red=Critical, Green=Done, Blue=Info).
3.  **Nodes**: Explicitly sized (width: 400, height: 200 is a good standard for text cards).

## Scripts

- `canvas_generator.py`: Helper script to generate valid `.canvas` JSON.
