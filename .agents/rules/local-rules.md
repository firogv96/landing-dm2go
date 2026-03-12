---
trigger: always_on
---

# Local Rules — Fleet Management SaaS Landing Page

## Context

This workspace belongs to a **SaaS landing page for truck fleet management**.

The product positioning is based on these core value propositions:

- **simplicity of use**
- **centralization of functions in one place**
- **flexibility through cloud access**
- **availability across multiple device types**

The goal of this landing page is **not to educate beginners**, but to communicate product strengths to an audience that already understands this type of solution and the operational context. The selling point is that this product is **simpler, more flexible, and more centralized** than competing tools.

All implementation decisions must reinforce that positioning.

---

## 1. Approved Design Must Not Be Changed

- **Do not change the current visual design of the site.**  
  The design is already approved by the client.

- **Do not redesign layouts, sections, visual hierarchy, composition, spacing logic, or visual storytelling without explicit user approval.**

- **Do not replace, reinterpret, or “modernize” approved UI decisions just for aesthetic preference.**

- **If it is already approved and functioning visually, preserve it.**

---

## 2. Safe Structural Improvements Are Allowed

- **If the project structure or file organization can be improved without changing the approved content, layout, or interface behavior, it should be improved.**

- **Allowed improvements include**:
  - splitting oversized files
  - reorganizing folders for clarity
  - extracting reusable utilities
  - separating styles, helpers, constants, and animation logic
  - improving naming consistency
  - reducing structural clutter

- **These improvements must remain invisible to the client-facing experience.**  
   They must not alter approved design, content, or interaction outcomes.
  s

---

## 3. Approved Content and Storytelling Must Be Preserved

- **Do not weaken, hide, minimize, or deprioritize the storytelling assets already present in the landing page.**

- **Images are important and must remain legible and visible.**  
  They are part of the client’s communication strategy and must not be visually suppressed.

- **Do not reduce the role of imagery in favor of excessive text, decoration, overlays, or layout changes.**

- **The interface must continue to communicate the product as simple, centralized, and flexible.**

---

## 4. Animation Optimization Without Changing the Approved Experience

- **If animations can be simplified, cleaned up, or optimized internally without changing their visible result, timing intention, or approved behavior, do it.**

- **Do not change the animation concept itself if it has already been approved by the client.**

- **Allowed improvements include**:
  - removing redundant animation logic
  - consolidating repeated motion patterns
  - improving performance
  - reducing implementation complexity
  - cleaning up sequencing logic
  - making animation code easier to maintain

- **Not allowed**:
  - changing the motion language
  - changing the storytelling role of animations
  - changing approved transitions just for technical preference

---

## 5. Performance, Readability, and Information Delivery Are Priorities

- **Maximize performance wherever possible without altering the approved design or messaging.**

- **Maximize code readability and maintainability.**

- **Maximize clarity of information delivery for the end user.**  
  The landing page must communicate the product value quickly and clearly.

- **Every implementation choice should support**:
  - fast rendering
  - clean code structure
  - understandable content flow
  - reduced technical clutter
  - clear reading and scanning behavior

---

## 6. Cross-Device and Cross-Resolution Consistency Is Mandatory

- **Prioritize coherent rendering across multiple devices, screen sizes, and resolutions.**

- **The goal is not pixel perfection in every environment, but the highest possible visual and structural consistency across modern devices.**

- **Layouts, typography, spacing, imagery, and interactions must remain as stable and understandable as possible across**:
  - desktop
  - laptop
  - tablet
  - mobile
  - varied viewport sizes

- **Do not introduce solutions that look good only in one target resolution while degrading the rest.**

- **Responsive behavior must preserve design intent and storytelling coherence.**

---

## 7. Simplicity First

- **Keep every implementation simple and functional.**

- **Do not over-engineer solutions.**

- **If a new solution is more complicated than the current one and does not provide a clear practical improvement, discard it.**

- **If a more complex solution is genuinely better and justified, do not apply it silently.**  
  Explain the reasons to the user and let the user decide.

- **Complexity must never be introduced for elegance, novelty, or developer preference alone.**

---

## 8. Positioning Consistency

- **All implementation choices must support the product narrative:**
  - simpler than competitors
  - more flexible than competitors
  - more centralized than competitors

- **Do not introduce UX, content structure, or interface behaviors that make the product feel dense, fragmented, or harder to understand.**

- **The page must feel operationally clear, direct, and unified.**

---

## 9. Protected Areas

The following must be treated as protected unless the user explicitly asks otherwise:

- approved visual design
- approved section structure and content
- approved animations as experienced by the user
- approved imagery prominence
- approved content direction and storytelling logic

---

## Final Rule

When choosing between:

- preserving the approved design and improving only internal structure, or
- changing visible behavior for technical preference,

**preserve the approved user-facing result and improve only what can be safely improved underneath.**

When choosing between:

- a more complex technical solution, or
- a simpler solution that achieves the same approved outcome,

**choose the simpler solution.**
