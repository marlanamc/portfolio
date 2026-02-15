# Recruiter Evaluation Report: Marlana Creed Portfolio Website

**Evaluation Date:** February 2026
**Evaluator Perspective:** Technical recruiter screening for mid-to-senior roles
**Time Spent:** Simulated 5-10 minute scan with deeper dive into case studies

---

## 1. First Impressions

### Immediate Observations

**The Identity Crisis Problem:** The website has conflicting positioning between the page title/meta data ("Operations & Implementation Specialist") and the bulk of the actual content (software building, learning games, full-stack development). The hero section says "Operations & Implementation Specialist" but then immediately shows 350+ users supported and describes building an LMS, games, and ADHD tools.

This creates immediate confusion. Within 10 seconds, I cannot answer the question: **Is this person a developer, a teacher, an operations person, or a coach?**

**What I Actually Understand:**
- This person builds educational technology
- They have real users and shipped products
- They're in the Boston area
- They have some kind of economics background

**What Remains Unclear:**
- What role they want
- Whether they're a developer seeking developer roles or an operator seeking ops roles
- How the ADHD coaching fits in
- Whether the teaching is current employment or just context

### Speed of Comprehension

The hero headline "I launch systems, support users, and make sure things actually work" is generic enough to describe almost anyone from a customer success rep to a DevOps engineer. The stats (350+ users, 8+ years in operations) don't clarify the target role.

**Verdict:** This website requires more cognitive work than a recruiter will give it. The value proposition doesn't land in 10 seconds.

---

## 2. What's Working Well

### Evidence of Actual Shipping

The project portfolio is unusually concrete. These aren't mockups or tutorial projects:
- Live URLs (myesolclass.com, ebhcsjobboard.web.app, time-map-seven.vercel.app)
- Real user counts (50+ students, 350+ users, 26 weekly active users)
- Specific impact metrics ("reduced communication overhead by 70%", "replaced 5+ Google Classrooms")

This is better evidence than most portfolios provide.

### Strong Case Studies

The individual project pages (ESOL LMS, School Job Board, The Garden Fence) are well-structured:
- Problem → Solution → Technical Implementation → Impact
- Specific technical choices explained with rationale
- Screenshots that show real, functional products

The School Job Board case study in particular demonstrates:
- Understanding of user roles and permissions
- Security considerations (Firestore rules, role-based access)
- Iterative development based on user feedback
- Clear before/after impact

### Technical Depth Where It Counts

The tech stack is current and credible:
- Next.js, TypeScript, PostgreSQL, Prisma
- Firebase (Auth, Firestore, Storage) with proper security rules
- Supabase with Row Level Security
- PWA development, offline-first architecture
- WCAG 2.1 AA compliance

This isn't a bootcamp portfolio. The projects show actual architectural thinking.

### User-Centered Thinking

The Build Log demonstrates genuine product thinking:
- Observing real problems in the classroom
- Analyzing why students struggle
- Designing solutions based on cognitive constraints
- Planning features before building

This is the kind of thinking product teams want.

---

## 3. Head-Scratching Moments

### The Operations vs. Developer Disconnect

The page title says "Operations & Implementation Specialist" but:
- The About section talks about teaching yourself to code
- The skills section is all React, TypeScript, PostgreSQL
- The projects are all software development
- The "Why Work With Me" section says "I Ship Constantly" and "I Build Complete Products"

If someone is positioning for operations, why is the entire portfolio about building software?

### The ADHD Coaching Sidebar

The ADHD coaching framework project is impressive as product design work, but it raises questions:
- Is this person running a coaching business on the side?
- Does "Navigating the Storm" mean they're currently coaching clients?
- Is this a passion project, a side business, or past work?

A recruiter might wonder: Is this candidate fully committed to a full-time role, or are they splitting focus?

### The Teaching Context

The ESOL teaching appears throughout but its role is unclear:
- Is this current employment?
- Is this volunteer work?
- Are these tools built for a job, or built independently?
- Will this person be available full-time if hired?

### Inconsistent User Numbers

- "50+ ESOL students" in one place
- "26 students" elsewhere
- "88+ activities" consistently

These aren't contradictions, but the shifting numbers make it harder to quickly grasp scale.

### The "At a Glance" Section

> "Right now: Building a Superlatives Vocab Game · Next: Medical Instructions Guide"

This signals ongoing commitment to ESOL tools. For a developer role, this might seem tangential. For an EdTech role, it's perfect. The section doesn't help clarify target employers.

---

## 4. Green Flags

### Evidence of Ownership and Follow-Through

- Built and deployed multiple production systems
- Real users actively using the tools
- Iterative improvement based on feedback
- Documentation and handover guides created for stakeholders

This person finishes what they start.

### Systems Thinking

The ADHD Coaching Framework shows sophisticated systems design:
- 15 interconnected levels with clear dependencies
- Progressive scaffolding
- Evidence-based design choices
- Integration of multiple tools (Stripe, Resend, iCal, Notion)

Even if the coaching itself isn't relevant, this demonstrates ability to design complex, interconnected systems.

### Technical Implementation + Domain Expertise

The combination of building the software AND being the subject matter expert is rare. This person isn't guessing what users need—they're in the classroom observing problems.

### Accessibility Focus

- WCAG 2.1 AA compliance
- 100/100 Lighthouse accessibility scores
- Specific accommodation features (Lexend font, high contrast, keyboard navigation)

This shows attention to detail and awareness of inclusive design.

### Works Independently

All projects appear to be solo work:
- "Full-Stack Developer"
- "Lead Developer & Creator"
- "Creator & Full-Stack Developer"

This is a double-edged sword (see Red Flags), but it does show self-direction and ability to ship without a team.

---

## 5. Red Flags or Risks

### No Team Experience Visible

Every project is solo. A hiring manager might ask:
- Can this person work in a codebase they didn't architect?
- Do they accept code review feedback?
- Can they collaborate on technical decisions?
- Have they ever shipped with a team?

### No Professional Software Employment History

The website shows no W-2 software development experience. Everything is:
- Tools built for their teaching job
- Side projects
- Coaching infrastructure

For senior roles, this is a significant gap. For mid-level roles, it raises questions about onboarding.

### Unclear Professional Status

Is this person:
- Currently employed as a teacher?
- Looking for full-time software work?
- Running a coaching business?
- All of the above?

The ambiguity is a risk. Companies want to know candidates are fully available and committed.

### The "Mission-Driven" Emphasis

Phrases like "I Care About the Mission" and building for "real people with real constraints" could signal:
- Strong culture fit for mission-driven companies (green flag)
- Potential misfit for commercial/enterprise software (yellow flag)
- Possible expectations around meaningful work that corporate environments may not meet

### AI-Assisted Development Mention

> "Built with AI-assisted rapid prototyping to solve real pedagogical problems"

Some teams value this. Others will wonder how much of the code this person actually wrote and whether they can work without AI tooling.

### The Resume Linking Issue

Two different resume links appear:
- `Marlana Creed_Resume.pdf` (hero section)
- `/job_applications/Marlana_Creed_Technical_Roles_Resume.html` (contact section)

This suggests multiple versions being maintained, which is fine, but the inconsistency looks unpolished.

---

## 6. Role Fit Analysis

### Strong Fit

**EdTech Companies (Developer or Product Roles)**
- Domain expertise + technical skills
- Understanding of learning design
- User research built into their workflow
- Passion for the space is obvious

**Startups Needing Generalists**
- Full-stack capability
- Ships independently
- Product thinking + technical execution
- Comfortable with ambiguity

**Developer Advocacy / Developer Relations**
- Strong communication in written form
- Teaching background
- Technical credibility
- Content creation experience (Build Log)

**Implementation / Solutions Engineering**
- Technical depth
- User-facing experience
- Documentation skills
- Systems integration experience

### Possible Fit (Would Require Reframing)

**Mid-Level Frontend or Full-Stack Developer**
- Has the skills
- Would need to emphasize team collaboration readiness
- Would need to de-emphasize teaching/coaching
- Would compete against candidates with more traditional backgrounds

**Product Management (Junior-Mid)**
- Strong user research instincts
- Ships product, not just specs
- Would need to reframe as PM track, not IC developer

### Likely Rejection

**Senior Software Engineer (IC5+)**
- No visible experience in large codebases
- No team-scale experience
- No evidence of technical leadership in engineering orgs

**Staff/Principal Engineer**
- Same as above, more pronounced

**Traditional Enterprise Companies**
- Background is too unconventional
- No corporate experience visible
- EdTech/education focus may seem niche

---

## 7. Self-Disqualification Signals

### Overly Specific Positioning

The phrase "ESOL students working 2+ jobs" is used frequently. This specificity:
- Demonstrates deep user empathy (good)
- May make non-education employers feel like a bad fit
- Narrows the applicant pool unnecessarily

### The Coaching Disclosure

Mentioning running "Navigating the Storm" coaching could signal:
- Side business that competes for time
- Potential distraction from full-time work
- Entrepreneurial tendencies that might lead to leaving

This isn't necessarily disqualifying, but it's information that could be framed more strategically.

### Teaching as Primary Identity

The website positions teaching as central to identity. For software roles, this should probably be:
- Context for domain expertise, not identity anchor
- Past experience informing current skills, not ongoing activity

### "Looking for a solid role building useful products"

This phrasing is honest but slightly weak. "Solid role" and "useful products" are vague. What role specifically? What kind of products? What kind of company?

---

## 8. Recommendations

### High-Impact, Low-Effort Changes

1. **Resolve the title confusion immediately.** Pick one positioning:
   - If targeting developer roles: "Full-Stack Developer | EdTech Focus"
   - If targeting ops/implementation: Remove the coding-heavy portfolio
   - Current hybrid is confusing

2. **Add a clear "What I'm Looking For" section.**
   > "Currently seeking: Mid-level Full-Stack Developer roles at mission-driven companies building educational or accessibility-focused products. Open to startup or established teams. Boston or remote."

3. **Reframe the ADHD coaching as past/complete project.**
   Change "I also run 'Navigating the Storm'" to "I also built 'Navigating the Storm'—a structured support system..."

   This turns ongoing business into shipped project.

4. **Add one explicit reference to team collaboration.**
   Even if most work is solo, add something like:
   - "Collaborated with 12 advisors to gather requirements..."
   - "Incorporated feedback from teaching colleagues..."

5. **Fix the resume link inconsistency.**

### Moderate-Effort Improvements

6. **Add a "Professional Experience" section.**
   Even if it's teaching, frame it as employment:
   > "ESOL Instructor, East Boston Harborside Community School (2023-Present)"
   > - Built internal tools serving 350+ students
   > - Led implementation of centralized bulletin board system

   This shows employment history, not just projects.

7. **Reduce ESOL-specific language on homepage.**
   The case studies can be detailed. The homepage should be broader:
   - "Learning management system" instead of "ESOL Learning Hub"
   - "Educational tools" instead of "grammar games"

8. **Add explicit tech stack summary at the top.**
   > "Tech: React, Next.js, TypeScript, PostgreSQL, Firebase, Supabase"

   Let recruiters ctrl+F for keywords.

### Optional Polish

9. **Add a brief "How I Work" section for skeptical hiring managers:**
   > "While my projects have been solo, I've worked with stakeholders (advisors, students, directors) to gather requirements, incorporate feedback, and create documentation. I'm actively looking for a team environment where I can contribute and learn from others."

10. **Consider removing or minimizing the "Free Resources" section.**
    It's generous but doesn't help hiring. It adds noise.

---

## Summary Assessment

**Candidate Viability:** This candidate has real skills, real products, and real users. The portfolio demonstrates legitimate technical capability and product thinking.

**Primary Risk:** Unclear positioning and unconventional background will cause some recruiters to pass without digging deeper.

**Recommendation:** Worth considering for EdTech roles, startup generalist positions, or implementation/solutions engineering. Would require phone screen to clarify availability and team-readiness for developer roles.

**Pass/Proceed Decision:** Proceed to phone screen if hiring for EdTech or mission-driven startup. Pass if hiring for traditional enterprise engineering roles unless specifically seeking unconventional backgrounds.

---

*Report generated for internal recruiter use. Not for distribution to candidate.*
