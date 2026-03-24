---
name: gsd-implementation
description: Technical implementation guide for the GSD skill - how to execute GSD tasks effectively
type: guide
---

# GSD - Implementation Guide

This guide explains how to effectively execute GSD tasks from a technical perspective.

## 🎯 GSD Technical Workflow

### Phase 1: GET - Technical Analysis

**What to Check:**
```bash
# 1. Understand the codebase structure
ls -la                          # See directory structure
cat package.json               # Understand dependencies and scripts
cat tailwind.config.js         # If using Tailwind, check configuration
```

**Questions to Resolve:**
- Where does this feature belong in the existing structure?
- What patterns are already used in the codebase?
- Are there any configuration files I need to understand?
- What dependencies are available?

### Phase 2: START - Technical Execution

**File Reading Strategy:**
```bash
# Use specific patterns, not broad searches
# GOOD:
Read: components/Navigation.jsx
Glob: **/contact*              # Find contact-related files
Grep: "function handleSubmit"  # Find form handling logic

# AVOID:
Read: entire codebase
Glob: **/*.jsx               # Too broad
```

**Code Modification Principles:**
1. **Read before editing** - Always Read the file first
2. **Match existing patterns** - Use the same style, imports, structure
3. **Edit over Write** - Use Edit tool for changes, Write only for new files
4. **Test incrementally** - Verify each change works

**Common START Scenarios:**

| Scenario | Action | Example |
|----------|--------|---------|
| New component | Create file, export, import | `Write: components/NewComponent.jsx` |
| Modify existing component | Read file, Edit specific changes | `Edit: components/Old.jsx` (old→new) |
| Add feature to page | Read page, Edit to include feature | `Edit: pages/home.jsx` (add import+usage) |
| Fix styling | Read styled components, Edit classes | `Edit: styles.css` (update selectors) |

### Phase 3: DONE - Technical Verification

**Verification Tests:**
```bash
# 1. Check file was created/modified
ls -lah path/to/file

# 2. Validate syntax (if applicable)
npm run lint                   # Check for linting errors
npm run type-check            # If TypeScript project

# 3. Build test (optional but recommended)
npm run build                 # Ensure build succeeds
```

**Common Verification Commands:**
```bash
# Next.js
npm run dev                   # Start dev server
npm run build                 # Test build

# React/Vite
npm run dev
npm run build

# General
npm test                      # If tests exist
npm run lint                  # Check code quality
```

## 🔧 File Operations Reference

### Creating New Files

**Best Practice:**
```javascript
// 1. Read similar existing file first
Read: components/ContactForm.jsx

// 2. Create new file following same pattern
Write: components/SearchForm.jsx
// Use the same imports, structure, and style
```

**File Naming Conventions:**
```javascript
// Components: PascalCase
components/ContactButton.jsx
components/HeaderSection.jsx

// Pages: kebab-case (if file-based routing)
pages/contact-us.jsx
pages/about-us.jsx

// Utilities: camelCase
utils/formatDate.js
utils/validateEmail.js
```

### Editing Existing Files

**Edit Tool Usage:**
```javascript
// 1. Read the file first
Read: components/Navigation.jsx

// 2. Use Edit with specific old_string/new_string
Edit: components/Navigation.jsx
old_string: "const navItems = ['Home', 'About']"
new_string: "const navItems = ['Home', 'About', 'Contact']"
```

**Safe Editing Tips:**
- Include enough context in old_string to make it unique
- Preserve exact indentation and formatting
- Don't modify more than necessary

### Finding Related Files

**Glob Patterns:**
```bash
# Find all components
**/*.jsx
**/components/*.jsx

# Find configuration files
**/*.config.js
**/*.json

# Find specific features
**/*search*          # Search-related files
**/*contact*         # Contact-related files
**/*auth*           # Authentication files
```

**Grep Patterns:**
```bash
# Find function definitions
"function handleSubmit"

# Find component usage
"<ContactForm"

# Find hooks usage
"useEffect"
"useState"

# Find API calls
"fetch("
"axios."
```

## 🎯 Common GSD Implementation Patterns

### Pattern 1: Adding a New Component

```bash
# 1. Find similar component for reference
Glob: **/Button*.jsx

# 2. Read to understand pattern
Read: components/Button.jsx

# 3. Create new component following pattern
Write: components/ContactForm.jsx
// Match imports, structure, styling approach

# 4. Find where to use it
Grep: "<Button"                  # Find button usage
Read: pages/home.jsx             # Check if should be used here

# 5. Add import and usage
Edit: pages/home.jsx
// Add: import ContactForm from '../components/ContactForm'
// Add: <ContactForm /> where needed
```

### Pattern 2: Fixing Styling Issues

```bash
# 1. Identify the problematic elements
Grep: "className"                # Find style classes
Read: components/Header.jsx      # Read component with issue

# 2. Check styling approach
Glob: **/*.css                   # Check if using CSS modules
Glob: tailwind.config.js         # Check if using Tailwind

# 3. Fix specific styling issue
Edit: components/Header.jsx
// Adjust classNames, add responsive classes

# 4. Verify mobile/desktop
// Check viewport-specific classes (sm:, md:, lg:)
```

### Pattern 3: Adding Form Validation

```bash
# 1. Find existing form handling
Grep: "handleSubmit|onSubmit"
Read: components/ContactForm.jsx

# 2. Check validation approach
Grep: "validate|validation"

# 3. Add validation logic
Edit: components/ContactForm.jsx
// Add validation functions, error states

# 4. Update UI for validation feedback
Edit: components/ContactForm.jsx
// Add error message display, visual indicators
```

### Pattern 4: Performance Optimization

```bash
# 1. Identify performance bottlenecks
Grep: "useState|useEffect"       # Check for inefficient re-renders
Glob: **/images/*                # Find unoptimized images

# 2. Optimize components
Edit: components/MyComponent.jsx
// Add useMemo, useCallback, or React.memo

# 3. Optimize images
Read: public/images/large-image.jpg
// Convert to WebP, add lazy loading

# 4. Verify improvements
npm run build                    # Check bundle size
```

## 🚨 Common Pitfalls & Solutions

### Pitfall 1: Not Understanding Project Structure

**Problem:** Guessing where to put files or import from

**Solution:**
```bash
# Always explore first
ls -la                          # Directory structure
cat package.json               # Dependencies and structure
Glob: **/*.jsx                 # Find all component files
```

### Pitfall 2: Breaking Existing Functionality

**Problem:** Changing code that affects other parts

**Solution:**
```bash
# Search for usage before modifying
Grep: "functionName"           # Find all usages
Grep: "<ComponentName"         # Find all component usages

# Test after changes
npm run dev                    # Check if everything still works
```

### Pitfall 3: Not Following Project Conventions

**Problem:** Using different styles, imports, or patterns

**Solution:**
```bash
# Read similar code first
Read: components/SimilarComponent.jsx
// Match: imports, exports, structure, styling
```

### Pitfall 4: Incomplete Testing

**Problem:** Marking done without proper verification

**Solution:**
```bash
# Always verify
npm run build                  # Build must succeed
npm run dev + manual test      # Runtime must work
// Check specific functionality described in GET phase
```

## 📊 GSD File Operation Quick Reference

| Operation | Tool | When to Use |
|-----------|------|-------------|
| **Understand structure** | `Glob`, `Read package.json` | Starting GSD task |
| **Find code patterns** | `Grep`, `Glob`, `Read` | Before implementing |
| **Create new file** | `Write` | New component/page/utility |
| **Modify existing file** | `Edit` | Updating functionality |
| **Check usage** | `Grep` | Before modifying code |
| **Verify implementation** | `Read`, `Bash (npm commands)` | DONE phase |

## 🎯 Success Checklist for Each Phase

### GET Phase:
- [ ] Understood the task requirements
- [ ] Identified scope and boundaries
- [ ] Defined acceptance criteria
- [ ] Located relevant files in codebase

### START Phase:
- [ ] Read necessary files before editing
- [ ] Matched existing code patterns
- [ ] Implemented minimal viable solution
- [ ] Followed project conventions

### DONE Phase:
- [ ] Core functionality works
- [ ] Code matches expected patterns
- [ ] No obvious errors/warnings
- [ ] User can verify the result
- [ ] Tested in appropriate environment

## 🔍 Debugging GSD Execution

**If something doesn't work:**

1. **Check file exists:** `ls -la path/to/file`
2. **Verify imports:** Check if imports point to correct files
3. **Check syntax:** `npm run lint` or build
4. **Validate logic:** Read the modified code to ensure logic is correct
5. **Test manually:** Run dev server and test the feature

**Common GSD Failures:**
- ❌ File not found → Check path and create if needed
- ❌ Import errors → Verify file exists and export is correct
- ❌ Build fails → Fix syntax or dependency issues
- ❌ Runtime errors → Check console for error messages

---

## 🚀 Pro Tips

1. **Start small:** Implement the simplest version first
2. **Iterate:** Get it working, then improve
3. **Communicate:** Tell user what you're doing and why
4. **Document:** If logic is complex, add brief comments
5. **Test early:** Don't wait until DONE to test
6. **Be consistent:** Match existing patterns exactly

---

This guide ensures GSD tasks are executed efficiently and correctly every time.