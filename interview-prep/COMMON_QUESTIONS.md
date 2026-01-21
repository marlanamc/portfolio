# Interview Talking Points & Common Answers

## 📋 Quick Reference Guide

**Your Core Story:** Technical Support & Implementation Specialist with a modern full-stack toolkit (Next.js, TypeScript, SQL). MS Economics background, data analyst experience, and a passion for EdTech. Built production apps solving real problems for real users.

**Your Strength:** Bridging the gap between code and users, full-stack implementation, understanding complex systems deeply

**Your Unique Angle:** Teacher who codes = understand users + can build the tools they need

---

## 🎯 THE BIG 5 QUESTIONS (MEMORIZE THESE)

### 1. "Tell me about yourself" (60-90 seconds)

**Your Answer:**

"I'm a Technical Support & Implementation Specialist with a Master's in Economics from Georgia Tech. I started my career as a data analyst, working at places like Homesite Insurance where I built risk tracking systems, and Grand Circle Corporation where I developed SQL-based reporting and Tableau dashboards.

While teaching adult ESOL part-time, I discovered a gap between what educators needed and what existing tools provided. So I started building—I've now shipped 10 web applications, including a full-stack learning management system built with Next.js and TypeScript that 50+ students use weekly.

My background gives me a unique combination: the analytical thinking from economics, the technical skills from building production-grade full-stack apps, and the deep user empathy from teaching. I'm looking for a technical support or implementation role where I can application this combination to help users succeed with complex tools."

**Why this works:**

- ✅ Shows progression (data analyst → developer)
- ✅ Mentions credentials (MS, Georgia Tech, real companies)
- ✅ Highlights unique value (teacher + coder)
- ✅ States what you want clearly

---

### 2. "Why are you leaving teaching?" / "Why the career path?"

**Your Answer:**

"I haven't left teaching—I teach two evenings a week and also serve as a **Developer** for the school, building custom tools to support my students. I realized my real passion is building technology that scales impact beyond just my classroom.

When I built my quiz platform and saw it save me 10+ hours a week while improving student outcomes, I realized: this is what I want to do full-time. Build technology that makes education better.

My role as a developer within the school has been perfect because it keeps me connected to real users—I get immediate feedback on what works and what doesn't—but I'm ready to focus full-time on technical implementation and support."

**Why this works:**

- ✅ Reframes teaching as an asset, not something you're "leaving"
- ✅ Shows motivation (impact at scale)
- ✅ Explains the gap logically
- ✅ Positions teaching as user research

**Alternative (if they seem concerned about commitment):**

"I'm fully committed to transitioning into full-time development. Teaching two evenings a week won't interfere with a 9-5 role, and I'm willing to step away from teaching entirely for the right opportunity. I've been building independently for two years because I genuinely love it—I'm ready to do this professionally."

---

### 3. "Walk me through your most complex project"

**Your Answer: THE QUIZ PLATFORM (Always lead with this)**

"I built a complete learning management system for my ESOL students because static tools couldn't handle the interactive practice we needed.

**The Problem:** I needed a way to track 50+ students' progress across complex verb conjugations. Initially, I built a prototype in Python, but I recently re-architected it into a modern full-stack application to support better scaling and gamification.

**The Solution:** I built the current version using **Next.js 16, TypeScript, and PostgreSQL**.

_Architecture:_

- **Frontend/Backend:** Next.js App Router for server-side rendering and API routes.
- **Database:** PostgreSQL managed via Prisma ORM for type-safe data access.
- **Authentication:** NextAuth.js for secure role-based access control (Teacher vs. Student).
- **Gamification:** A points and achievement system to drive student engagement.

**The Technical Challenges:**

1. **Type Safety and Scaling:** Moving from a simple Python script to a TypeScript/Prisma architecture allowed me to manage complex relationships between students, classes, and assignment progress without data integrity issues.

2. **User Experience & Performance:** I used Tailwind CSS and Framer Motion to create a responsive, mobile-first UI that works smoothly even on low-bandwidth connections, which is critical for my students.

3. **Gamification Logic:** Implementing a points ledger and streak system required careful database design to ensure real-time updates without performance lag.

**The Impact:**

- 50+ students using it weekly.
- 70% reduction in my administrative overhead compared to manual grading.
- Student engagement increased significantly due to the immediate feedback and gamification features.

**What I Learned:**

- Mastered the Next.js ecosystem (App Router, Server Components).
- Implementing secure Authentication and RBAC.
- Designing schema for complex, relational data with Prisma.
- Iterating based on real user feedback every week.

It's live at **myesolclass.com** if you want to see it."

**Why this works:**

- ✅ Shows technical depth (database, backend, frontend, deployment)
- ✅ Shows problem-solving (auto-grading challenge)
- ✅ Shows user thinking (two interfaces)
- ✅ Shows real impact (metrics)
- ✅ Shows you can articulate technical decisions

---

### 4. "What are your strengths?"

**Your Answer:**

"Three things:

**One: Problem-solving with code.** When I see a problem, I don't just complain—I build a solution. Every project I've built came from identifying a real need: educators frustrated with Google Forms, job seekers needing organization, people with ADHD needing better tools.

**Two: User empathy.** My teaching background means I deeply understand end users. I'm not just coding in a vacuum—I'm building for real people, getting feedback, and iterating. That makes me effective at building products people actually want to use.

**Three: Self-directed learning.** I taught myself Python, built 10 production apps, and figured out deployment, databases, and frontend frameworks on my own. When I need to learn something new for a project, I just do it. That means I can contribute quickly even in areas where I don't have deep expertise yet."

**Why this works:**

- ✅ Three specific, evidence-backed strengths
- ✅ Shows initiative
- ✅ Demonstrates value to the company

---

### 5. "What are your weaknesses?"

**Your Answer:**

"I'd say two things:

**One: I don't have formal CS training.** I learned by building, not through algorithms classes. So if you ask me to implement quicksort on a whiteboard, I'd struggle. But I'm great at figuring out what algorithm to use by reading documentation and understanding the problem.

**Two: I'm still building depth in some areas.** For example, I know React well enough to ship apps, but I haven't dug deep into performance optimization or advanced hooks patterns. I'm aware of these gaps and actively working on them.

The good news is I learn really fast when I need to. When I needed auto-grading for my quiz platform, I researched string matching algorithms and implemented one in a weekend. Give me a problem and I'll figure it out."

**Why this works:**

- ✅ Honest but not disqualifying
- ✅ Shows self-awareness
- ✅ Ends on a strength (fast learner)
- ✅ Gives concrete examples

**Alternative weakness:**

"I sometimes over-engineer solutions because I find the technical challenges interesting. For example, when building my job tracker, I spent time implementing CSV import when I could've just manually added jobs. I'm learning to balance 'what's technically cool' with 'what adds real value.'"

---

## 💼 PROJECT-SPECIFIC TALKING POINTS

### **Quiz Platform (Lead with this 80% of the time)**

**Quick pitch:**
"Full-stack LMS with Python/Flask backend, auto-grading, teacher dashboard, and 50+ real users."

**Technical deep-dive (if they ask):**

- **Database schema:** Students table, Quizzes table, Results table with foreign keys
- **Auto-grading logic:** String normalization + fuzzy matching for common typos
- **Authentication:** Session-based with Flask-Login
- **Deployment:** PythonAnywhere with gunicorn
- **Frontend:** Jinja templates + vanilla JavaScript

**Problem-solving story:**
"The trickiest part was auto-grading. Students would type 'runing' instead of 'running', and I didn't want to mark them wrong for typos. I implemented a Levenshtein distance check with a threshold—if they're within 2 characters, I flag it for review instead of auto-failing."

**Impact metrics:**

- 50 students per semester
- 14 weeks of curriculum
- 10+ hours/week saved on grading
- Higher engagement than Google Forms

---

### **Job Application Tracker**

**Quick pitch:**
"React + Firebase tracker with gamification features. Built it while job searching to stay organized."

**Technical deep-dive:**

- **Frontend:** React with hooks (useState, useEffect)
- **Backend:** Firebase Firestore for data, Firebase Auth for Google login
- **Features:** CRUD operations, CSV import/export, filtering, timer, reward system
- **Deployment:** GitHub Pages

**Problem-solving story:**
"I added gamification because job searching is demoralizing. The timer tracks how long you spend applying, and there's a reward system—after 10 applications, you 'earn' a coffee. It's silly but it helped me stay motivated through 150+ applications."

**Impact:**

- Used personally for 100+ applications
- Helped me stay organized and motivated
- CSV import saved hours of manual entry

---

### **ADHD First Aid Kit**

**Quick pitch:**
"React app with accessibility-first design for people with ADHD. Focus timers, task organizers, sensory-friendly UI."

**Technical deep-dive:**

- **React** with component-based architecture
- **Accessibility:** WCAG 2.1 compliance, reduced motion support, high contrast
- **UX research:** User-tested with neurodivergent individuals
- **Deployment:** Vercel

**Problem-solving story:**
"The biggest challenge was cognitive load. People with ADHD get overwhelmed by visual noise. I stripped the UI down to essentials—large buttons, clear hierarchy, no animations unless requested. User testing showed this approach worked way better than a 'normal' design."

---

### **Educational Games (Supporting work)**

**Quick pitch:**
"Built 6 JavaScript games for ESOL students: verb conjugation practice, number recognition, sentence building."

**Why mention these:**
"These show I can build quickly and ship frequently. Each game took 4-6 hours from idea to deployment. I built them based on what my students struggled with, got immediate feedback, and iterated."

---

## 🧠 BEHAVIORAL QUESTIONS

### "Tell me about a time you failed"

**Your Answer:**

"When I first deployed my quiz platform, I didn't think about what happens when 50 students all submit quizzes at the same time. The database locked up during the first live quiz and students got error messages.

I had to quickly switch to a batch processing approach where submissions queue and process sequentially instead of all at once. I also added better error handling so students would see 'Your quiz is being processed' instead of a scary error.

It taught me to think about scale earlier, not just 'does it work for one user.' Now I always ask: what happens if 10x users hit this at once?"

---

### "Tell me about a time you had to learn something quickly"

**Your Answer:**

"When I decided to build the quiz platform, I knew Flask basics but had never done user authentication or auto-grading.

I gave myself a weekend. I read Flask documentation, watched a few tutorials on session management, and started building. By Sunday night I had a working prototype with login and one quiz.

The key was focusing on 'good enough to test' rather than 'perfect.' I shipped the MVP, got student feedback, then improved it. That approach—ship, learn, iterate—is how I've learned most of my skills."

---

### "Tell me about a time you disagreed with someone"

**Your Answer (if asked):**

"When building the quiz platform, another teacher suggested I add a leaderboard to motivate students. I disagreed because in my experience, public rankings demotivate struggling students.

I explained my reasoning and proposed an alternative: private progress tracking where students see their own improvement over time. We went with that approach and student feedback has been positive—they like seeing their growth without comparison pressure.

I'm comfortable pushing back when I think it's best for users, but I always try to understand the underlying goal and find an alternative solution."

---

### "Why do you want to work here?"

**RESEARCH THE COMPANY AND CUSTOMIZE THIS**

**Template:**

"Three reasons:

**One:** [Something specific about their product/mission]. I've actually used [their product] and [specific thing you liked].

**Two:** [Something about their tech stack or approach]. I saw you're using [tech they use] which aligns with my experience, and I'm excited to learn [tech they use that you don't know].

**Three:** [Something about company stage/culture]. I'm looking for [specific thing: learning environment/impact/whatever] and [company] seems like the right place for that."

**Example for Duolingo:**

"Three reasons:

One: I believe language learning should be accessible to everyone. I teach ESOL to adult immigrants who often can't afford traditional classes. Duolingo democratizes that access. I've recommended it to dozens of students.

Two: You're doing interesting technical work at scale—over 500 million users, which means you're solving problems I've only dealt with at small scale. I want to learn from that.

Three: I love that you're mission-driven but also product-focused. You care about engagement and retention because it directly impacts learning outcomes. That balance appeals to me."

---

## 🛠️ TECHNICAL QUESTIONS (PYTHON FOCUS)

### "Explain how you'd [build some feature]"

**Framework for answering:**

1. **Clarify requirements:** "Just to make sure I understand, you want [restate]?"
2. **Think out loud:** "Okay, I'd approach this by..."
3. **Start simple:** "First, the simplest version would be..."
4. **Iterate:** "Then I'd add..."
5. **Consider edge cases:** "I'd also need to handle..."

**Example:**

**Q:** "How would you build a feature that sends email reminders to students?"

**A:**

"Let me think through this. So we want to email students before their quiz deadline, right? Any specific timing, like 24 hours before?

Okay, here's how I'd approach it:

**Simple version first:**
I'd add a `deadline` field to the Quiz model, then create a script that runs daily, checks which quizzes have deadlines in the next 24 hours, finds students who haven't completed them, and sends emails.

For email, I'd use Flask-Mail or a service like SendGrid. Store email templates so I can customize them.

**Then improve it:**

- Add a 'notification preferences' field so students can opt in/out
- Add a second reminder at 1 week before
- Log all sent emails so we don't double-send

**Edge cases to handle:**

- What if the student completed it right before the script runs?
- What if email delivery fails?
- Timezone issues—students in different zones

I'd probably use Celery for the task queue so emails send asynchronously and don't block the main app.

Does that approach make sense?"

---

### Common Python Questions

**Q: "What's the difference between a list and a tuple?"**

"Lists are mutable—you can change them after creation. Tuples are immutable. I use lists when I need to modify data, tuples when I want to ensure data doesn't change, like for dictionary keys."

---

**Q: "Explain decorators"**

"Decorators are functions that wrap other functions to modify their behavior. In Flask, I use @app.route to define URL endpoints. It's basically saying 'when someone visits this URL, run this function.' I've also used decorators for authentication—@login_required checks if a user is logged in before allowing access to a view."

---

**Q: "What's a dictionary comprehension?"**

"It's a concise way to create dictionaries. Instead of a for loop, you can write `{key: value for item in iterable}`. I use them all the time. For example, in my quiz platform, I might do `{student.id: student.name for student in students}` to create a quick lookup dictionary."

---

**Q: "How do you handle errors in Python?"**

"Try-except blocks. In my quiz platform, when a student submits a quiz, I wrap the database write in try-except in case there's a connection issue. If it fails, I catch the exception, log it, and show the user a friendly error message instead of crashing."

---

## 💬 QUESTIONS TO ASK THEM (Always have 3 ready)

### About the Role:

- "What would my first project be?"
- "What does success look like in this role after 3 months? 6 months?"
- "What's the team structure? Who would I work with most closely?"
- "What's your tech stack and why did you choose it?"

### About the Team:

- "What do you like about working here?"
- "How does the team handle code review?"
- "What's the onboarding process for new developers?"
- "How much collaboration vs independent work is this role?"

### About the Company:

- "What are the biggest technical challenges right now?"
- "How do you balance new features with technical debt?"
- "What's the company culture around learning and growth?"

### About Them:

- "What brought you to this company?"
- "What's been your favorite project here?"

---

## 🚩 RED FLAGS (Walk Away If You See These)

- ❌ "We'll teach you to code" (scam)
- ❌ Unpaid trial period
- ❌ No clear job description
- ❌ "Equity only" for first 6 months
- ❌ Below $50K salary (you can do better)
- ❌ Interviewer is rude or dismissive
- ❌ "We're a family" (usually means no boundaries)

---

## ✅ GREEN FLAGS (Take These Seriously)

- ✅ Clear description of role and expectations
- ✅ Team seems genuinely excited about their work
- ✅ They ask about your learning goals
- ✅ Transparent about salary range
- ✅ They respect your time (scheduled interviews, prompt responses)
- ✅ $60K+ salary or $40+/hr contract
- ✅ Clear path to growth

---

## 🎯 CLOSING STRONG

At the end of every interview:

**Say this:**

"I'm really excited about this opportunity. Based on what we discussed, I think my experience with [specific thing you talked about] would let me contribute quickly, and I'm excited to learn [specific thing they mentioned].

Is there anything else you'd like to know about my background or experience?"

**Then:**

"What are the next steps in the process?"

**After the interview:**

Send thank-you email within 24 hours:

```
Subject: Thank you - [Your Name] - [Position]

Hi [Name],

Thank you for taking the time to speak with me today about the [Position] role. I enjoyed learning about [specific thing they mentioned] and I'm even more excited about the opportunity.

Our conversation about [specific project or challenge they mentioned] particularly resonated with me, given my experience with [your relevant experience].

I'm confident I could contribute to [specific team goal they mentioned], and I'd love the opportunity to join the team.

Please let me know if you need any additional information from me.

Best regards,
Marlana Creed
```

---

## 📞 SALARY NEGOTIATION

**When they ask your expectations:**

"Based on my research for junior to mid-level Python developer roles in [location], I'm targeting $70-85K for full-time, or $45-60/hour for contract work. But I'm open to discussing the full compensation package."

**If they make an offer:**

1. **Thank them:** "Thank you, I'm excited about this!"
2. **Ask for time:** "Can I have 48 hours to review?"
3. **Research:** Check Glassdoor, Levels.fyi
4. **Counter if low:** "I was hoping for closer to $X given my experience. Is there flexibility?"
5. **Accept or walk:** If they won't budge and it's too low, it's okay to decline

**Minimum acceptable:**

- Salary: $60K (lower only if amazing learning opportunity)
- Contract: $40/hr

---

## 🎬 PRACTICE SCHEDULE

**Day 1-2:** Read through this document 3x
**Day 3-4:** Practice "Tell me about yourself" and Quiz Platform story out loud 10x each
**Day 5:** Record yourself answering all Big 5 questions
**Ongoing:** After each interview, add notes: "They asked X, here's what I should've said"

---

**YOU GOT THIS. You have great projects, great experience, and a great story. Now you just need to tell it confidently.**
