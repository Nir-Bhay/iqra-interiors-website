# MODEL INTELLIGENCE — OpenClaw Auto-Routing Brain
> Last Updated: 2026-03-22 | Always read this before delegating to subagents.

This file teaches OpenClaw which model to pick for which task.
Every agent and subagent must consult this routing table before spawning.

---

## ⚡ QUICK ROUTING TABLE (Use This First)

| Task Type | Best Model | Why |
|-----------|-----------|-----|
| 🔢 Math / Logic / Reasoning | `deepseek/deepseek-r1:free` | MATH-500: 97.3%, AIME: 79.8% — king of pure reasoning |
| 💻 Hard Coding / SWE Tasks | `nvidia/nemotron-3-super-120b-a12b` | SWE-bench 60.47% — best open model for real-world code |
| 🤖 Agentic / Multi-step Planning | `nvidia/nemotron-3-super-120b-a12b` | PinchBench #1 at 85.6% — built for agent orchestration |
| 🧑‍💻 Repo-level Coding (big projects) | `qwen/qwen3-coder-480b-a35b:free` | 480B param coder, 262k context, strongest free coding model |
| 🌐 Web Research / Browsing Agent | `moonshotai/kimi-k2-thinking` (Nvidia) | BrowseComp 60.2% > GPT-5. Best at autonomous web tasks |
| 👁️ Vision / Image Analysis | `nvidia/nemotron-nano-12b-2-vl:free` | Multimodal — video understanding + document intelligence |
| 📚 Long Document / Big Context | `nvidia/nemotron-3-super-120b-a12b` | 1M token context via Nvidia direct |
| ✍️ Creative Writing / Long Form | `stepfun/step-3.5-flash:free` | 1.52 Trillion param model, expert at nuanced writing |
| 💬 General Chat / Quick Answers | `meta-llama/llama-3.3-70b-instruct:free` | GPT-4 level quality, fast, free, stable |
| ⚡ Ultra-Fast Lightweight Tasks | `z-ai/glm-4.5-air:free` | Tiny, fast, free — for simple questions |
| 🔍 Deep Research Reports | `nvidia/nemotron-3-super-120b-a12b` | #1 on DeepResearch Bench and DeepResearch Bench II |
| 🔐 Security / Red Team | `deepseek/deepseek-r1:free` | Logical, analytical, great for systematic attack thinking |

---

## 📖 MODEL PROFILES (Deep Dive)

### 🟣 Nemotron 3 Super — The Orchestrator
- **Provider:** OpenRouter (free) + Nvidia Direct API
- **Model IDs:** `nvidia/nemotron-3-super-120b-a12b:free` (OpenRouter) | `nvidia/nemotron-3-super-120b-a12b` (Nvidia)
- **Architecture:** Hybrid Mamba-Transformer MoE. 120B active / 508B total. LatentMoE = 4x more experts at same compute cost.
- **Context:** 262k (OpenRouter) → 1M (Nvidia direct)
- **Strengths:**
  - SWE-bench Verified: **60.47%** — ranked #1 among all open models
  - PinchBench (agent testing): **85.6%** — #1 open model
  - DeepResearch Bench: **#1 leaderboard position**
  - 2.2x faster throughput than GPT-OSS-120B
- **Use when:** orchestrating subagents, complex software engineering, deep research, high-stakes reasoning
- **Subagent role:** Primary Orchestrator / Research Lead

---

### 🔵 Kimi K2 Thinking — The Autonomous Explorer
- **Provider:** Nvidia Direct API
- **Model ID:** `moonshotai/kimi-k2-thinking`
- **Architecture:** 1 Trillion total params MoE, 32B active per token
- **Context:** 262,144 tokens (K2.5) / 256k heavy mode
- **Strengths:**
  - BrowseComp (autonomous web research): **60.2% vs GPT-5's 54.9%**
  - Humanity's Last Exam (with tools): **44.9% vs GPT-5's 41.7%**
  - LiveCodeBench: **85.0%** (competitive coding)
  - Vision-language tasks: leads on VideoMMMU + OCRBench
  - Price: 10x cheaper than Claude for API calls
- **Use when:** web search agents, multi-step tool use, visual input needed, long agentic workflows
- **Subagent role:** Web Researcher / Vision Specialist / Agentic Executor

---

### 🟠 DeepSeek R1 — The Pure Reasoner
- **Provider:** OpenRouter (free)
- **Model ID:** `deepseek/deepseek-r1:free`
- **Architecture:** MoE 671B total, 164k context, Chain-of-Thought built-in
- **Strengths:**
  - MATH-500: **97.3%** (beats OpenAI o1's 96.4%)
  - AIME 2024: **79.8%** (beats OpenAI o1's 79.2%)
  - SWE-Bench: **49.2%** (comparable to o1)
  - Transparent reasoning — shows its thinking chain
- **Use when:** math problems, logic puzzles, deep analytical breakdowns, academic-grade reasoning
- **Subagent role:** Math & Logic Expert / Deep Thinker

---

### 🟡 Qwen3 Coder 480B — The Code Beast
- **Provider:** OpenRouter (free)
- **Model ID:** `qwen/qwen3-coder-480b-a35b:free`
- **Architecture:** 480B total, 35B active MoE, 262k context
- **Strengths:**
  - Strongest free coding model on OpenRouter (2026 Q1)
  - Function calling, tool use, long-context repo navigation
  - Multi-file code writing across large codebases
- **Use when:** writing entire apps, refactoring big projects, function-level precision work
- **Subagent role:** Code Generator / Repo Navigator

---

### 🟢 Meta Llama 3.3 70B — The Stable All-Rounder
- **Provider:** OpenRouter (free)
- **Model ID:** `meta-llama/llama-3.3-70b-instruct:free`
- **Context:** 65,536 tokens
- **Strengths:** GPT-4 level quality, multilingual, reliable, very consistent output
- **Use when:** general chat, writing, summarization, everyday tasks
- **Subagent role:** Reliable Generalist / Chat Agent

---

### 🔴 StepFun 3.5 Flash — The Heavy Writer
- **Provider:** OpenRouter (free) + Kilocode
- **Model ID:** `stepfun/step-3.5-flash:free`
- **Architecture:** 1.52 Trillion total parameters — one of the largest free models ever
- **Context:** 256k tokens
- **Strengths:** Long-form content, nuanced writing, complex instruction following
- **Use when:** long reports, detailed creative writing, complex multi-section documents
- **Subagent role:** Content Writer / Long-form Specialist

---

### ⚡ GLM 4.5 Air — The Speed Demon
- **Provider:** OpenRouter (free)
- **Model ID:** `z-ai/glm-4.5-air:free`
- **Context:** 131k tokens
- **Strengths:** Ultra-fast, lightweight, agent-friendly (built for agentic apps)
- **Use when:** quick questions, lightweight tools, rapid responses
- **Subagent role:** Quick Responder / Lightweight Tool

---

## 🤖 SUBAGENT DELEGATION RULES

When OpenClaw spawns a subagent, it *must* select the model based on the task:

```
Task Analysis → Identify primary need:
├── "solve this math problem" → deepseek-r1 (Reasoner)
├── "write this code / fix this bug" → nemotron-super or qwen3-coder (Engineer)
├── "research this topic online" → kimi-k2-thinking (Explorer)
├── "orchestrate multiple agents" → nemotron-super (Orchestrator)
├── "analyze this image/video" → nemotron-nano-12b-2-vl (Vision)
├── "write a long document" → stepfun-3.5-flash (Writer)
├── "chat casually / quick answer" → llama-3.3-70b (Generalist)
└── "anything else" → kilo/auto (Kilo's auto-router picks)
```

---

## 🔑 API PROVIDERS REFERENCE

| Provider | Base URL | Auth Profile |
|----------|----------|--------------|
| **KiloCode** | https://api.kilo.ai/api/gateway/ | `kilocode:default` |
| **OpenRouter** | https://openrouter.ai/api/v1 | key in auth.json |
| **Nvidia NIM** | https://integrate.api.nvidia.com/v1 | `nvidia:default` |

---

## 📦 ALL CONFIGURED FREE MODELS (Full Inventory)

### KiloCode Provider (Gateway: https://api.kilo.ai/api/gateway/)

| Model Name | Model ID | Speciality |
|---|---|---|
| Kilo Auto | `kilo/auto` | Smart auto-router — use as default |
| Kilo Auto Free | `kilo-auto/free` | Free tier auto-router |
| Kilo Auto Frontier | `kilo-auto/frontier` | Premium tier auto-router |
| Nemotron 3 Super (free) | `nvidia/nemotron-3-super-120b-a12b:free` | Coding + Agentic #1 |
| MiMo-V2-Pro (free) | `xiaomi/mimo-v2-pro:free` | Coding + Reasoning |
| CoreThink (free) | `corethink:free` | General reasoning |
| Arcee Trinity Large Preview | `arcee-ai/trinity-large-preview:free` | Long context |
| MiniMax M2.5 (free) | `minimax/minimax-m2.5:free` | Writing + Chat |
| Giga Potato (free) | `giga-potato:free` | Experimental |
| DeepSeek R1 0528 (free) | `deepseek/deepseek-r1-0528:free` | Latest reasoning model |
| Qwen3 Coder (free) | `qwen/qwen3-coder:free` | Coding |
| Spectre (free) | `spectre:free` | Mistral-based, 256k context |
| StepFun 3.5 Flash (free) | `stepfun/step-3.5-flash:free` | Long writing, 1.52T model |
| Free Models Router | `openrouter/free` | OpenRouter auto-free |

### OpenRouter Provider (Gateway: https://openrouter.ai/api/v1)

| Model Name | Model ID | Context | Best For |
|---|---|---|---|
| StepFun: Step 3.5 Flash | `stepfun/step-3.5-flash:free` | 256k | Long writing (1.52T model) |
| NVIDIA Nemotron 3 Super | `nvidia/nemotron-3-super-120b-a12b:free` | 262k | Coding, Agentic, Research |
| Arcee AI: Trinity Large | `arcee-ai/trinity-large-preview:free` | 131k | General assistant |
| Z.ai: GLM 4.5 Air | `z-ai/glm-4.5-air:free` | 131k | Fast lightweight tasks |
| NVIDIA Nemotron 3 Nano 30B | `nvidia/nemotron-3-nano-30b-a3b:free` | 256k | Agentic, developer tasks |
| Arcee AI: Trinity Mini | `arcee-ai/trinity-mini:free` | 131k | Small but capable |
| NVIDIA Nemotron Nano 9B V2 | `nvidia/nemotron-nano-9b-v2:free` | 128k | Lightweight reasoning |
| NVIDIA Nemotron Nano 12B VL | `nvidia/nemotron-nano-12b-2-vl:free` | 128k | **Vision, images, video** |
| Qwen3 Next 80B Instruct | `qwen/qwen3-next-80b-a3b-instruct:free` | 262k | Balanced performance |
| Qwen3 Coder 480B A35B | `qwen/qwen3-coder-480b-a35b:free` | 262k | **Big codebase coding** |
| Meta Llama 3.3 70B | `meta-llama/llama-3.3-70b-instruct:free` | 65k | GPT-4 level generalist |
| MiniMax M2.5 | `minimax/minimax-m2.5:free` | 196k | Chat + writing |
| Google Gemini 2.0 Flash | `google/gemini-2.0-flash-exp:free` | 1M | **1M context, multimodal** |
| Google Gemini 2.0 Pro Exp | `google/gemini-2.0-pro-exp-02-05:free` | 2M | **2M context, best Gemini** |
| NVIDIA Nemotron 4 340B | `nvidia/nemotron-4-340b-instruct:free` | 4k | Heavyweight reasoning |
| DeepSeek R1 | `deepseek/deepseek-r1:free` | 64k | **Math + Pure reasoning** |
| DeepSeek V3 | `deepseek/deepseek-chat:free` | 64k | Coding + reasoning |
| Mistral Small 3 24B | `mistralai/mistral-small-24b-instruct-2501:free` | 32k | Fast, reliable assistant |
| Qwen 2.5 Coder 32B | `qwen/qwen-2.5-coder-32b-instruct:free` | 32k | Code generation |
| OpenRouter Auto-Free | `openrouter/free` | 200k | Random free model |

### Nvidia NIM Provider (Gateway: https://integrate.api.nvidia.com/v1)

| Model Name | Model ID | Best For |
|---|---|---|
| Kimi K2 Thinking | `moonshotai/kimi-k2-thinking` | **Agentic, web research, vision** |
| Nemotron 3 Super | `nvidia/nemotron-3-super-120b-a12b` | **Coding, orchestration, 1M context** |

---

## 📌 IMPORTANT NOTES

1. OpenRouter free models have rate limits: ~20 req/min, 50 req/day without $10 credit.
2. For Nvidia direct API: Kimi K2 Thinking and Nemotron Super bypass OpenRouter rate limits.
3. KiloCode's `kilo/auto` dynamically routes to the best model — use as default for everything.
4. `openrouter/free` auto-router randomly picks a free model — good for testing but unpredictable.
5. Always prefer a specialist model over a generalist when the task type is clear.
6. Default model for all sessions and tools: **`kilo/auto`**
