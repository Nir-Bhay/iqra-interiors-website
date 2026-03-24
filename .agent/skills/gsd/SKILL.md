---
name: gsd
description: Get Started Done - A focused workflow for rapid task completion. Helps users define, start, and complete individual tasks efficiently with clear checkpoints and minimal overhead.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Agent
---

# GSD - Get Started Done

> The **Get Started Done** skill helps you complete tasks efficiently with a clear, focused workflow.

## 🎯 What is GSD?

GSD is a productivity workflow that turns vague ideas into completed tasks through three distinctive phases:

1. **GET** - Define and understand the task
2. **START** - Begin execution with clear direction
3. **DONE** - Complete and verify the outcome

## 🚀 When to Use GSD

| User Request Scenario | Use GSD? | Why |
|---------------------|----------|-----|
| "Add a contact form to my website" | ✅ **YES** | Clear, bounded task |
| "Fix the broken login button" | ✅ **YES** | Specific problem to solve |
| "Refactor this function to be cleaner" | ✅ **YES** | Well-defined scope |
| "Build me a complete e-commerce platform" | ❌ **NO** | Too large - use project-planner instead |
| "Analyze my entire codebase" | ❌ **NO** | Research task - use explorer-agent instead |
| "Help me decide which database to use" | ❌ **NO** | Decision task - use planning skills instead |

## 📋 GSD Workflow Phases

### Phase 1: GET (Define & Understand)

Before starting work, ensure you understand:

**Questions to Ask (if unclear):**
- What specific outcome are you looking for?
- Are there any constraints or preferences?
- Where should this be implemented?
- What does "done" look like?

**GET Phase Output:**
```
✅ Task: [Clear, actionable description]
✅ Scope: [What's included/excluded]
✅ Acceptance Criteria: [How we'll know it's done]
✅ Priority: [P0-Immediate, P1-Important, P2-Nice-to-have]
```

### Phase 2: START (Begin Execution)

Once the task is defined, start with a clear approach:

**START Phase Actions:**
- Identify existing code that needs modification (if any)
- Determine the minimal viable approach
- Create or modify necessary files
- Implement the core functionality first

**START Principle:** Start with the simplest working version, then refine.

### Phase 3: DONE (Complete & Verify)

Verify completion before marking the task as done:

**DONE Phase Checklist:**
- [ ] Core functionality works as expected
- [ ] Code follows existing patterns in the codebase
- [ ] No obvious errors or warnings
- [ ] Task matches acceptance criteria
- [ ] If applicable: tested in browser/runtime

## 🎯 GSD Command Examples

```
# Usage:
User: "gsd add a dark mode toggle to my website"

# Example GSD flow:
GET: "I'll add a dark/light mode toggle to your website's navigation"
START: "Creating theme context, toggle component, and updating navbar"
DONE: "✅ Dark mode toggle added! Users can now switch between themes"

User: "gsd fix the mobile responsiveness on my homepage"

GET: "I'll fix mobile layout issues on your homepage"
START: "Reviewing current mobile styles, adjusting breakpoints and layout"
DONE: "✅ Mobile responsiveness fixed! Layout now works on all screen sizes"

User: "gsd optimize my images for faster loading"

GET: "I'll help optimize the images on your website"
START: "Analyzing current images, compressing and format-optimizing"
DONE: "✅ Images optimized! Loading time improved by X%"
```

## 🔧 Technical Implementation

### File Reading Strategy
- **Be specific:** Read only files directly relevant to the task
- **Pattern matching:** Use glob patterns to find related files efficiently
- **Context:** Read related configuration files when needed (package.json, tailwind.config, etc.)

### Code Modifications
- **Minimal changes:** Only modify what's necessary for the task
- **Consistent style:** Match existing code patterns and conventions
- **Test incrementally:** Verify each change works before moving on

### Verification
- **Visual check:** If UI-related, describe what the user should see
- **Functional test:** Verify the feature works as expected
- **Error-free:** No console errors or warnings

## 🚦 GSD vs Other Skills

| Skill | Best For | Workflow Size | Approval Needed |
|-------|----------|---------------|-----------------|
| **GSD** | Single, focused tasks | Minutes to hours | ❌ No |
| Project Planner | Multi-feature, complex projects | Hours to days | ✅ Yes |
| Explorer Agent | Codebase analysis & discovery | Variable | ❌ No |
| App Builder | Creating new applications | Hours to days | ✅ Yes |

## 📝 GSD Template

When users invoke GSD, use this response pattern:

```markdown
## 🎯 GET - Task Definition
**Task:** [Clear description]
**Scope:** [Boundaries]
**Done means:** [Acceptance criteria]

## 🚀 START - Execution
**Approach:** [Implementation strategy]
**Files involved:** [List of files to work with]
[Implementation steps]

## ✅ DONE - Completion
**What was done:** [Summary of changes]
**How to verify:** [Instructions for user to test]
**Next steps:** [Optional recommendations]
```

## 🎓 Best Practices

1. **Be Specific:** Vague tasks lead to unclear outcomes
2. **Stay Focused:** Don't scope creep - stick to the defined task
3. **Communicate Progress:** Let the user know what you're doing
4. **Verify Results:** Don't mark done until you've confirmed it works
5. **Learn Patterns:** Match existing code style and conventions
6. **Ask When Unclear:** Better to clarify than to make wrong assumptions

## ⚡ Quick Command Reference

Users can invoke GSD with patterns like:
- `gsd [task description]`
- `gsd fix [specific issue]`
- `gsd add [feature]`
- `gsd optimize [component]`

## 🔗 Related Skills & Agents

| Skill/Agent | When to Use Instead | Why |
|-------------|---------------------|-----|
| `app-builder` | Creating new applications | Full project setup needed |
| `project-planner` | Multi-step, complex features | Requires detailed planning |
| `frontend-specialist` | Complex UI/UX work | Specialized knowledge needed |
| `backend-specialist` | API/database work | Backend expertise required |
| `explorer-agent` | Analyzing codebase structure | Research-focused task |

## 🎯 Success Metrics

A successful GSD execution results in:
- ✅ Task completed within reasonable time
- ✅ Acceptance criteria met
- ✅ No breaking changes to existing functionality
- ✅ Code follows project conventions
- ✅ User can verify the result easily

---