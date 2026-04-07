# Telegram-Style Web App Master Checklist

This document compiles all requirements discussed in chat so you can hand it to Claude (or any coding assistant) as a full implementation brief.

---

## 1) Goal and Target References

- Build a Telegram-style web app experience with polished UI/UX details.
- Use these references as baseline direction:
  - `https://github.com/telegram-mini-apps-dev/TelegramUI.git`
  - `https://github.com/TelegramOrg/Telegram-web-z.git`
- From provided screenshot evidence, ensure the **Form component group** is covered in full.

---

## 2) Must-Have Form Component Set (from screenshot)

Implement and document all of these components with consistent APIs and states:

- [ ] Checkbox
- [ ] Chip
- [ ] ColorInput
- [ ] FileInput
- [ ] Input
- [ ] Multiselect
- [ ] Multiselectable
- [ ] PinInput
- [ ] Radio
- [ ] Rating
- [ ] Select
- [ ] Selectable
- [ ] Slider
- [ ] Switch
- [ ] Textarea

For **every** form component above, include:
- [ ] Default state
- [ ] Hover / focus / active states
- [ ] Disabled state
- [ ] Read-only state (where applicable)
- [ ] Validation states (error/success/warning if used)
- [ ] Helper text and label behavior
- [ ] Keyboard interaction support
- [ ] Accessibility labels/roles

---

## 3) Design System Requirements

- [ ] Telegram-like typography hierarchy (titles/body/meta)
- [ ] Spacing scale (4/8-based or equivalent)
- [ ] Radius and elevation/shadow tokens
- [ ] Semantic color tokens (bg/surface/text/border/accent/destructive/success)
- [ ] Light and dark themes
- [ ] High contrast compatibility
- [ ] Motion rules (standard + reduced motion mode)

---

## 4) Core UI Building Blocks

- [ ] Button variants (primary/secondary/ghost/destructive/loading)
- [ ] Icon button and action button patterns
- [ ] List item primitives (chat row, settings row, action row)
- [ ] Avatar + badge + online indicator
- [ ] Tabs/segmented controls
- [ ] Dropdown/menu/context-menu
- [ ] Modal / drawer / popover / tooltip
- [ ] Toast/snackbar notifications
- [ ] Skeleton loaders and shimmer placeholders
- [ ] Empty states and error states

---

## 5) Telegram-Style Chat Experience Checklist

### Chat List
- [ ] Chat list with unread counters
- [ ] Pinned chat support
- [ ] Muted/archived indicators
- [ ] Last message preview and time
- [ ] Search/filter support

### Chat View
- [ ] Message grouping (same sender/time windows)
- [ ] Timestamps and read status
- [ ] Reply, forward, edit, delete actions
- [ ] Reactions
- [ ] Date separators
- [ ] Unread jump anchor

### Composer
- [ ] Text input with autosize behavior
- [ ] Attachment entry point
- [ ] Emoji/sticker/GIF placeholder integration points
- [ ] Voice note UI placeholder
- [ ] Sending states (idle/sending/failed/retry)

### Realtime-Style Interaction
- [ ] Typing indicator
- [ ] Presence indicators (online/last seen style)
- [ ] Optimistic message rendering
- [ ] Loading older messages with pagination/infinite scroll

---

## 6) Profile and Identity Features (Little UX Details Included)

- [ ] Profile photo upload/change/remove
- [ ] Name/username/bio editing
- [ ] About/status text section
- [ ] Shared media/links/files tabs
- [ ] Mutual chats/groups/contacts section
- [ ] Quick action buttons (message/call/share)
- [ ] Privacy-aware visibility for profile fields
- [ ] Block/report user actions

---

## 7) Settings and Privacy

- [ ] Notification preferences
- [ ] Theme and appearance controls
- [ ] Chat background/wallpaper options (if included)
- [ ] Privacy controls (last seen/profile/photo visibility)
- [ ] Session/device management placeholder
- [ ] Security action confirmations for destructive operations

---

## 8) UX Micro-Polish Checklist

- [ ] Smooth hover/focus/press feedback
- [ ] Clean transitions between list/detail panes
- [ ] Context menus on message/chat/profile objects
- [ ] Undo support for destructive actions where possible
- [ ] Smart defaults and remembered user preferences
- [ ] Mobile-friendly gesture affordances
- [ ] Proper touch target sizes

---

## 9) Accessibility Checklist

- [ ] Full keyboard navigation for interactive UI
- [ ] Visible focus indicators
- [ ] Semantic HTML and ARIA where needed
- [ ] Color contrast compliance
- [ ] Screen-reader labels for icons and controls
- [ ] Form error messaging readable by assistive tech

---

## 10) Responsive and Layout Behavior

- [ ] Desktop split-pane layout
- [ ] Tablet adaptive layout
- [ ] Mobile single-pane stack navigation
- [ ] Sidebar collapse/expand behavior
- [ ] Route/deep-link compatibility (`chat/:id`, `profile/:id`, etc.)
- [ ] 404 and route-level error handling

---

## 11) Data, State, and API Layer

- [ ] Typed API contracts
- [ ] Distinguish server state vs local UI state
- [ ] Loading/error/empty states for each async boundary
- [ ] Retry + timeout strategy
- [ ] Pagination strategy for long lists/messages
- [ ] Offline/poor network UX fallback

---

## 12) Performance Checklist

- [ ] Route/component code splitting
- [ ] Virtualized long lists where needed
- [ ] Image optimization and lazy loading
- [ ] Avoid unnecessary rerenders in chat-heavy screens
- [ ] Bundle analysis and chunk optimization pass

---

## 13) Security and Safety Basics

- [ ] Input sanitization for user-rendered content
- [ ] Safe file upload validation (type/size)
- [ ] Secure session/token handling
- [ ] Confirm dialogs for destructive/high-risk actions
- [ ] No secrets exposed in client code

---

## 14) Quality, Testing, and Validation

- [ ] Unit tests for reusable components
- [ ] Integration tests for chat/profile/settings flows
- [ ] Accessibility tests for critical screens
- [ ] Visual regression snapshots for core UI
- [ ] End-to-end smoke tests for key user journey

---

## 15) Developer Experience and Delivery

- [ ] Consistent lint/format setup
- [ ] Build command remains green
- [ ] Component usage documentation
- [ ] CI checks for build/test/lint (as available)
- [ ] Release checklist with versioning/changelog notes

---

## 16) Prioritized Execution Plan (P0 / P1 / P2)

### P0 (Critical Foundation)
- [ ] Design system tokens + theming baseline
- [ ] Full form component set from screenshot
- [ ] Chat list + chat view + composer fundamentals
- [ ] Accessibility basics (focus, keyboard, labels)
- [ ] Responsive core layout

### P1 (Feature Completeness)
- [ ] Profile and settings modules
- [ ] Message reactions + advanced actions
- [ ] Presence/typing indicators
- [ ] Error/empty/skeleton/loading polish
- [ ] Performance pass for large lists/chunks

### P2 (Advanced Polish)
- [ ] Rich interactions and gesture enhancements
- [ ] Visual regression and deeper E2E coverage
- [ ] Advanced privacy/session UX
- [ ] Further micro-animation and refinement

---

## 17) Notes About Provided Screenshots

- The visible screenshot confirms the Form navigation list and was incorporated exactly.
- Two screenshot URLs were provided but unavailable for direct rendering in this environment due image-limit constraints.
- If you share those images later, append any missing UI details to this file under:
  - `Section 4 (Core UI Building Blocks)`
  - `Section 5 (Chat Experience)`
  - `Section 6 (Profile and Identity)`

---

## 18) Final Hand-off Instruction (Copy to Claude)

Use this checklist as a strict implementation brief.  
Build incrementally in P0 → P1 → P2 order, and do not skip component states, accessibility, responsive behavior, and micro-interaction polish.

