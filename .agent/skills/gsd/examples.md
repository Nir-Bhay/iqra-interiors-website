---
name: gsd-examples
description: Real-world examples of GSD task execution across different scenarios
type: examples
---

# GSD - Real-World Examples

This document demonstrates how the GSD skill handles various real-world tasks.

## 📱 Example 1: Adding a Contact Form

### User Request:
```
"gsd add a simple contact form to my website"
```

### GET Phase:
```
🎯 GET - Task Definition
**Task:** Add a contact form with name, email, and message fields
**Scope:** Single form component, basic validation
**Done means:** Contact form appears on page with working validation
```

### START Phase:
```
🚀 START - Execution
**Approach:** Create reusable ContactForm component with basic form validation
**Files involved:**
- Create: components/ContactForm.jsx
- Update: pages/contact.jsx (or add form to existing page)
```

### DONE Phase:
```
✅ DONE - Completion
**What was done:**
- Created ContactForm component with name, email, and message fields
- Added client-side validation (required fields, email format)
- Styled to match existing design system

**How to verify:**
1. Navigate to the contact page
2. Try submitting empty form → should show validation errors
3. Fill in all fields → form should be submit-ready
4. Check that email field validates format

**Next steps:**
- Connect to backend API for form submission
- Add success/error state handling
- Implement spam protection
```

---

## 🎨 Example 2: Fixing Mobile Layout

### User Request:
```
"gsd fix mobile layout on my homepage - content is overlapping"
```

### GET Phase:
```
🎯 GET - Task Definition
**Task:** Fix content overlap issue on mobile view of homepage
**Scope:** Homepage mobile-specific layout fixes only
**Done means:** Homepage displays correctly on mobile without overlap
```

### START Phase:
```
🚀 START - Execution
**Approach:** Inspect current mobile styles, adjust padding/margins and breakpoints
**Files involved:**
- Check: component files for problematic sections
- Update: CSS/Tailwind classes for mobile breakpoints
```

### DONE Phase:
```
✅ DONE - Completion
**What was done:**
- Identified overlapping containers in hero and featured sections
- Adjusted mobile breakpoints (sm:) for proper stacking
- Fixed padding and margin conflicts on small screens
- Ensured touch-friendly element sizes (minimum 44px)

**How to verify:**
1. Open website on mobile device or browser mobile view
2. Resize to < 640px width
3. Check that all content stacks vertically without overlap
4. Ensure buttons and links are easily tappable

**Next steps:**
- Test on actual mobile devices
- Consider mobile-specific UX improvements
```

---

## ⚡ Example 3: Performance Optimization

### User Request:
```
"gsd optimize my images - they're loading slowly"
```

### GET Phase:
```
🎯 GET - Task Definition
**Task:** Optimize images for faster loading
**Scope:** Image optimization only, no layout changes
**Done means:** Images load faster while maintaining visual quality
```

### START Phase:
```
🚀 START - Execution
**Approach:** Analyze current images, compress and format-optimize
**Files involved:**
- Analyze: public/images directory
- Optimize: Image files (compression, modern formats)
- Update: Image components for lazy loading
```

### DONE Phase:
```
✅ DONE - Completion
**What was done:**
- Compressed all images (reduced file size by ~40%)
- Converted to modern formats (WebP where supported)
- Added responsive image loading (proper sizing)
- Implemented lazy loading for below-fold images

**How to verify:**
1. Clear browser cache
2. Load page and observe image loading speed
3. Check Network tab - images should load faster
4. Visual quality should remain the same

**Next steps:**
- Monitor performance metrics
- Consider CDN implementation
- Add image srcsets for responsive loading
```

---

## 🔍 Example 4: Debug Functionality

### User Request:
```
"gsd fix the broken search functionality - it returns no results"
```

### GET Phase:
```
🎯 GET - Task Definition
**Task:** Fix search functionality that's not returning results
**Scope:** Search feature bug fix only
**Done means:** Search returns relevant results when queried
```

### START Phase:
```
🚀 START - Execution
**Approach:** Debug search logic, identify why no results return
**Files involved:**
- Check: Search component files
- Debug: API/search logic
- Update: Bug fixes for search functionality
```

### DONE Phase:
```
✅ DONE - Completion
**What was done:**
- Identified that search query was not being passed correctly
- Fixed parameter passing between search input and API
- Added fallback handling for empty queries
- Tested with various search terms

**How to verify:**
1. Type in search bar and submit
2. Should see relevant results for existing content
3. Test edge cases (empty query, special characters, no results)
4. Check that search is case-insensitive (if intended)

**Next steps:**
- Add search result highlighting
- Implement search suggestions
- Consider search analytics
```

---

## 🎨 Example 5: Add Dark Mode

### User Request:
```
"gsd add a dark mode toggle to my website"
```

### GET Phase:
```
🎯 GET - Task Definition
**Task:** Add dark/light mode toggle functionality
**Scope:** Theme toggle, basic dark mode styles
**Done means:** Users can switch between light and dark themes
```

### START Phase:
```
🚀 START - Execution
**Approach:** Create theme context, toggle component, update styles
**Files involved:**
- Create: context/ThemeContext.jsx
- Create: components/ThemeToggle.jsx
- Update: CSS/Tailwind classes for dark mode
- Update: Root layout for theme provider
```

### DONE Phase:
```
✅ DONE - Completion
**What was done:**
- Created ThemeContext for state management
- Built ThemeToggle component with sun/moon icons
- Applied dark mode classes using Tailwind's dark: prefix
- Added smooth transitions for theme switching
- Persisted theme preference in localStorage

**How to verify:**
1. Find the toggle button in navigation/header
2. Click to switch between light and dark modes
3. All text and backgrounds should invert appropriately
4. Refresh page - theme preference should be remembered
5. Check that colors meet contrast requirements in both modes

**Next steps:**
- Add more dark mode color refinements
- Consider system preference detection
- Add animation to theme switch
```

---

## 🔐 Example 6: Add Contact Form Validation

### User Request:
```
"gsd add validation to my contact form - prevent spam submissions"
```

### GET Phase:
```
🎯 GET - Task Definition
**Task:** Add form validation to contact form including spam prevention
**Scope:** Frontend validation and basic spam protection
**Done means:** Form validates properly and resists basic spam attempts
```

### START Phase:
```
🚀 START - Execution
**Approach:** Add validation rules, honeypot field, rate limiting hints
**Files involved:**
- Update: ContactForm component
- Update: Form submission logic
```

### DONE Phase:
```
✅ DONE - Completion
**What was done:**
- Added real-time validation for email format and required fields
- Implemented honeypot technique (hidden field to trap bots)
- Added client-side rate limiting (debounce submission attempts)
- Improved form feedback messages
- Added visual validation indicators (error/success states)

**How to verify:**
1. Try submitting empty form → validation errors should appear
2. Enter invalid email → should show format error
3. Submit valid data → form should process normally
4. Try rapid submissions → should be throttled
5. Check that honeypot field is hidden from users

**Next steps:**
- Add CAPTCHA for advanced spam protection
- Implement server-side validation
- Add form analytics
- Consider reCAPTCHA integration
```

---

## 📊 GSD Pattern Summary

| Pattern | Common Tasks | Typical Time | Output |
|---------|--------------|--------------|--------|
| **UI Fix** | Layout, styling, responsive issues | 15-30 min | Fixed visual component |
| **Feature Add** | New button, form, simple functionality | 30-60 min | Working feature |
| **Bug Fix** | Broken functionality, logic errors | 20-45 min | Resolved issue |
| **Optimization** | Performance improvements | 30-90 min | Faster/better performance |
| **Integration** | Connect two components/features | 45-90 min | Working integration |

---

## 🎯 Key Learnings from Examples

1. **Always start with GET** - Define what done looks like before starting
2. **Be specific about scope** - Prevent scope creep by clarifying boundaries
3. **Focus on the minimal viable solution** - Get it working, then refine
4. **Provide clear verification steps** - User should be able to test easily
5. **Suggest next steps thoughtfully** - Only recommend relevant improvements
6. **Communicate progress** - Let user know what you're doing at each phase

---

## ⚡ Quick Decision Tree

```
User Request
    ↓
Is it a single, focused task?
    ├─ NO → Use project-planner or app-builder
    └─ YES → Can it be completed in < 2 hours?
              ├─ NO → Break down into smaller GSD tasks
              └─ YES → Use GSD workflow!

GSD Workflow:
GET (Define) → START (Execute) → DONE (Verify)
```

---