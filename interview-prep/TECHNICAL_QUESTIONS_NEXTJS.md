# Next.js & TypeScript Technical Interview Prep

## 🧩 Core Concepts (Next.js 16+)

### 1. App Router vs. Pages Router

**Q: What are the main differences between the App Router and the Pages Router?**
**A:** The App Router (introduced in Next.js 13) uses React Server Components by default. It supports nested layouts, simplified data fetching with `async/await` in components, and better performance through smaller client-side bundles. The directory structure is based around `page.tsx` and `layout.tsx` files.

### 2. Server Components vs. Client Components

**Q: When should you use a Client Component?**
**A:** Use Client Components (`"use client"`) when you need:

- Interactivity (hooks like `useState`, `useEffect`).
- Access to browser-only APIs (e.g., `localStorage`).
- Event listeners (`onClick`, etc.).
  Keep as many components as possible as Server Components to reduce the JavaScript sent to the client.

### 3. Data Fetching

**Q: How do you fetch data in the App Router?**
**A:** You can fetch data directly inside Server Components using `fetch` with `async/await`. Next.js extends the native `fetch` API to provide automatic caching and revalidation. You no longer need `getStaticProps` or `getServerSideProps`.

### 4. Middleware

**Q: What is the purpose of Middleware in Next.js?**
**A:** Middleware allows you to run code before a request is completed. It's often used for authentication (checking JWTs), redirects, and adding custom headers. In your LMS, you might use it to protect routes based on user roles.

---

## 🏗️ The LMS Stack (Next.js + Prisma + PostgreSQL)

### 1. Prisma ORM

**Q: Why use Prisma over raw SQL?**
**A:** Prisma provides a type-safe API for database access. It auto-generates TypeScript types based on your schema, which prevents run-time errors. It also provides a visual tool (Prisma Studio) and simplifies migrations.

### 2. NextAuth.js

**Q: How does NextAuth.js handle security?**
**A:** It handles session management (JWT or database sessions), provides built-in providers (Credentials, Google, etc.), and ensures CSRF protection. In your LMS, it manages the distinction between `TEACHER` and `STUDENT` roles.

### 3. PostgreSQL

**Q: Why choose PostgreSQL for this project?**
**A:** For a production LMS, PostgreSQL offers robust relational features, strong ACID compliance, and handles complex queries (like progress tracking across many assignments) much better than SQLite.

---

## ⚡ Technical Challenges in your LMS

### "How do you handle real-time progress updates?"

"I use Prisma to update the `ActivityProgress` table whenever a student submits an answer. Because I'm using Next.js Server Actions, the UI can re-validate the data immediately without a manual page refresh, ensuring the teacher sees the latest progress."

### "How do you handle mobile accessibility?"

"I used Tailwind CSS for a mobile-first responsive design. For users with low-bandwidth, I optimized images using the `next/image` component and kept the client-side JavaScript minimal by leveraging Server Components."

### "Explain your RBAC (Role-Based Access Control) implementation."

"I use NextAuth's `session` callback to attach the user's role to the session object. I then check this role in both Middleware (for route protection) and individual Server Components to ensure students can't access teacher dashboards."
