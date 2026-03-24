---
name: diagram-generation
description: Expert strategies for generating technical architecture diagrams. Covers Mermaid.js code, Excalidraw sketches, and Generative AI (Midjourney/DALL-E) prompts for modern, holographic, or corporate visuals.
---

# Diagram Generation Skill

This skill helps convert technical architecture into visual prompts.

## 🧠 Core Principles

1.  **Accuracy First**: The data flow must be logically correct before making it pretty.
2.  **Style Matching**:
    *   *Engineering Docs* → Mermaid / PlantUML (Code-based, version control friendly).
    *   *Social Media/Whiteboarding* → Excalidraw (Hand-drawn, approachable).
    *   *Marketing/Hero Images* → Generative AI (Holographic, 3D, Isometric).

## 🛠️ Prompt Strategies

### 1. The "Code-to-Visual" Pipeline (Generative AI)
When asking an AI (like Midjourney/DALL-E) for an architecture diagram, use this structure:
*   **Subject**: "Isometric 3D architecture diagram of a [Web App/System]..."
*   **Components**: "...featuring modules for [Component A, Component B] connected by [Glowing Data Streams/Pipes]..."
*   **Style**: "...Rendered in [Cyberpunk/Glassmorphism/Blueprint] style. Dark background, Neon [Blue/Purple] accents."
*   **Tech Specs**: "Unreal Engine 5 render, 8k resolution, highly detailed, volumetric lighting."

### 2. The "Schema-to-Code" Pipeline (Mermaid/Excalidraw)
When generating code for diagrams:
*   **Flow**: Define `Left -> Right` or `Top -> Bottom` explicit flow.
*   **Grouping**: Use `subgraph` to group logical layers (e.g., "Frontend", "Backend", "Database").
*   **Styling**: Apply classes for consistent colors (e.g., `classDef storage fill:#f9f,stroke:#333;`).

## 🔍 Architecture Analysis Checklist
Before writing a prompt, extract these 4 layers:
1.  **Interface Layer**: Where does the user interact? (CLI, Web UI, Mobile).
2.  **Logic Layer**: Where is the thinking done? (API Key, Lambdas, Parsers).
3.  **Data Layer**: Where is state stored? (SQL, LocalStorage, Redis).
4.  **External Services**: What 3rd party tools are called? (Stripe, OpenAI, Firebase).
