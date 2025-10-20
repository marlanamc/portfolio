# Python Technical Interview Prep

## 🐍 Python-Specific Questions You Might Get

Since Python is your strength, lean into it. Here's what to study.

---

## ✅ CONCEPTS YOU KNOW (Review these)

### **1. Lists vs Tuples vs Sets vs Dictionaries**

**Lists:** `[1, 2, 3]` - Ordered, mutable, allows duplicates
**Tuples:** `(1, 2, 3)` - Ordered, immutable, allows duplicates
**Sets:** `{1, 2, 3}` - Unordered, mutable, NO duplicates
**Dicts:** `{'a': 1}` - Key-value pairs

**When to use each:**
- List: When you need ordered collection you'll modify
- Tuple: When you need ordered collection that won't change (like coordinates)
- Set: When you need unique items or fast membership testing
- Dict: When you need to look up values by key

**Example from your code:**
"In my quiz platform, I use a dictionary to store verb forms: `{'v1': 'bite', 'v2': 'bit', 'v3': 'bitten'}` because I need to look up each form by name."

---

### **2. List Comprehensions**

**Basic:**
```python
squares = [x**2 for x in range(10)]
```

**With condition:**
```python
evens = [x for x in range(10) if x % 2 == 0]
```

**Dict comprehension:**
```python
{student.id: student.name for student in students}
```

**Your example:**
"I use list comprehensions constantly. In my quiz platform, I might do `[quiz for quiz in quizzes if quiz.deadline > today]` to get upcoming quizzes."

---

### **3. Functions & Arguments**

**Positional vs Keyword:**
```python
def greet(name, message="Hello"):
    return f"{message}, {name}"

greet("Marlana")  # Positional
greet(name="Marlana", message="Hi")  # Keyword
```

***args and **kwargs:**
```python
def log(*args, **kwargs):
    # args is a tuple of positional arguments
    # kwargs is a dict of keyword arguments
    pass
```

---

### **4. Decorators (Important for Flask)**

**What they are:**
Functions that wrap other functions to modify behavior.

**Flask example:**
```python
@app.route('/quiz')
def show_quiz():
    return render_template('quiz.html')
```

**The @app.route is a decorator that says "when someone visits /quiz, run this function"**

**Authentication decorator you might build:**
```python
def login_required(f):
    def wrapper(*args, **kwargs):
        if not session.get('user_id'):
            return redirect('/login')
        return f(*args, **kwargs)
    return wrapper

@app.route('/dashboard')
@login_required
def dashboard():
    return "You're logged in!"
```

**Your answer if asked:**
"I use decorators all the time in Flask. @app.route defines URL endpoints, and I've built custom decorators for authentication to check if a user is logged in before allowing access to certain views."

---

### **5. Error Handling**

```python
try:
    result = risky_operation()
except ValueError as e:
    print(f"Got a value error: {e}")
except Exception as e:
    print(f"Something went wrong: {e}")
finally:
    cleanup()  # Always runs
```

**Your example:**
"In my quiz platform, when students submit answers, I wrap the database write in try-except. If the database is temporarily unavailable, I catch the exception, log it, and show a user-friendly error message instead of crashing."

---

### **6. Classes & Objects**

**Basic class:**
```python
class Student:
    def __init__(self, name, email):
        self.name = name
        self.email = email

    def send_reminder(self):
        send_email(self.email, "Quiz due soon!")
```

**Your example:**
"In my quiz platform, I have a Student class with methods like `get_completed_quizzes()` and `calculate_average_score()`. It keeps the code organized and makes it easy to add student-related functionality."

---

### **7. String Methods**

```python
text.lower()       # "HELLO" → "hello"
text.strip()       # "  hi  " → "hi"
text.split()       # "a b c" → ['a', 'b', 'c']
text.replace(old, new)
text.startswith('prefix')
```

**Your example:**
"For auto-grading, I normalize student answers with `.lower().strip()` before comparing to correct answers, so 'Bite' and 'bite' are both accepted."

---

### **8. Working with Files**

```python
with open('data.txt', 'r') as f:
    content = f.read()

with open('output.txt', 'w') as f:
    f.write('Hello')
```

**The `with` statement ensures file closes even if there's an error.**

---

### **9. Lambda Functions**

```python
square = lambda x: x**2
students.sort(key=lambda s: s.score)
```

**Short anonymous functions. Useful for quick operations.**

---

### **10. Map, Filter, Reduce**

```python
# Map: apply function to each item
scores = [85, 90, 78]
grades = list(map(lambda x: 'A' if x >= 90 else 'B', scores))

# Filter: keep items matching condition
passing = list(filter(lambda x: x >= 60, scores))

# Reduce: combine items (need to import)
from functools import reduce
total = reduce(lambda a, b: a + b, scores)
```

**Though list comprehensions are often clearer:**
```python
grades = ['A' if x >= 90 else 'B' for x in scores]
passing = [x for x in scores if x >= 60]
```

---

## 🔥 FLASK-SPECIFIC QUESTIONS

### **1. "How does routing work in Flask?"**

"Flask uses decorators to map URLs to functions. When you write `@app.route('/quiz')`, you're telling Flask 'when someone visits /quiz, call this function.' You can also capture URL parameters like `@app.route('/quiz/<int:quiz_id>')` to get dynamic routes."

---

### **2. "Explain Flask templates (Jinja2)"**

"Flask uses Jinja2 for templating. You can pass data from Python to HTML templates. For example, in my quiz platform, I do `render_template('quiz.html', verbs=verb_list)` and then in the template I can loop through verbs with `{% for verb in verbs %}`.

It keeps logic in Python and presentation in HTML, which makes code cleaner."

---

### **3. "How do you handle form data?"**

"I use `request.form` to get POST data. When a student submits a quiz, I get their answers with `answer = request.form.get('v1')`, validate it, then save to database. I also use CSRF protection to prevent form attacks."

---

### **4. "How does session management work?"**

"Flask sessions store data on the client side in a signed cookie. When a user logs in, I store their user ID in the session: `session['user_id'] = user.id`. Then on protected routes, I check if that exists. Sessions are secure because Flask signs them with a secret key."

---

### **5. "How would you deploy a Flask app?"**

"I deploy on PythonAnywhere which uses a WSGI server. For other deployments, you'd use Gunicorn or uWSGI as the WSGI server, maybe Nginx as a reverse proxy. You'd also want to use environment variables for secrets instead of hardcoding them, and use a production database like PostgreSQL instead of SQLite."

---

## 📊 DATABASE QUESTIONS

### **1. "What's the difference between SQL and NoSQL?"**

"SQL databases (like PostgreSQL, MySQL) have structured tables with relationships. NoSQL (like MongoDB, Firebase) are more flexible with document storage.

I use SQL when data has clear relationships—like students taking quizzes, where I need to join tables. I'd use NoSQL for more flexible data or when I need to scale horizontally quickly.

My quiz platform uses SQLite (SQL) because I have clear relationships: students have many quiz results, quizzes have many verbs."

---

### **2. "Explain your database schema for the quiz platform"**

"I have three main tables:

**Students table:**
- id (primary key)
- name
- email

**Quizzes table:**
- id
- week_number
- due_date
- verbs (could be JSON or separate table)

**Results table:**
- id
- student_id (foreign key to Students)
- quiz_id (foreign key to Quizzes)
- answers (JSON or separate fields for v1, v2, v3, etc.)
- score
- submitted_at

This lets me query things like 'get all results for student X' or 'get average score for quiz Y'."

---

### **3. "How do you prevent SQL injection?"**

"I use parameterized queries. Instead of doing `f"SELECT * FROM students WHERE name = '{name}'"` which is vulnerable, I do `cursor.execute('SELECT * FROM students WHERE name = ?', (name,))`. The database library handles escaping properly.

If I were using an ORM like SQLAlchemy, it does this automatically."

---

## ⚡ CODING CHALLENGES (Practice These)

### **Easy (You Should Nail These)**

**1. Reverse a string**
```python
def reverse_string(s):
    return s[::-1]
```

**2. Check if a string is a palindrome**
```python
def is_palindrome(s):
    return s == s[::-1]
```

**3. Find the largest number in a list**
```python
def find_max(numbers):
    return max(numbers)
    # Or manually:
    # max_num = numbers[0]
    # for num in numbers:
    #     if num > max_num:
    #         max_num = num
    # return max_num
```

**4. Sum all numbers in a list**
```python
def sum_list(numbers):
    return sum(numbers)
    # Or: return sum([num for num in numbers])
```

**5. Filter even numbers**
```python
def get_evens(numbers):
    return [n for n in numbers if n % 2 == 0]
```

**6. Count occurrences of a character in a string**
```python
def count_char(string, char):
    return string.count(char)
    # Or manually:
    # count = 0
    # for c in string:
    #     if c == char:
    #         count += 1
    # return count
```

---

### **Medium (Practice These)**

**1. Remove duplicates from a list**
```python
def remove_duplicates(lst):
    return list(set(lst))  # Loses order
    # Or keep order:
    seen = set()
    result = []
    for item in lst:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result
```

**2. Merge two dictionaries**
```python
def merge_dicts(dict1, dict2):
    return {**dict1, **dict2}
    # Or: dict1.update(dict2); return dict1
```

**3. Find the second largest number**
```python
def second_largest(numbers):
    unique = list(set(numbers))
    unique.sort()
    return unique[-2] if len(unique) >= 2 else None
```

**4. Group words by length**
```python
def group_by_length(words):
    result = {}
    for word in words:
        length = len(word)
        if length not in result:
            result[length] = []
        result[length].append(word)
    return result
```

**5. Flatten a nested list**
```python
def flatten(nested):
    result = []
    for item in nested:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result
```

---

## 🎯 HOW TO APPROACH CODING CHALLENGES

**1. Clarify the problem**
"Just to confirm, you want me to [restate problem]? Any constraints on input size or special cases?"

**2. Think out loud**
"Okay, here's how I'd approach this..."

**3. Start with brute force**
"The simplest way would be to [simple approach]. That would be O(n²) time complexity."

**4. Optimize if needed**
"To make it faster, I could use a dictionary to track..."

**5. Write the code**
Talk while you code. Explain your thinking.

**6. Test it**
"Let me test with a few cases: [test cases]"

**7. Consider edge cases**
"I should also handle: empty list, single item, negative numbers, etc."

---

## 🧠 PROBLEM-SOLVING PATTERN

**They give you a problem you don't know how to solve:**

**DON'T say:** "I don't know."

**DO say:**

"I haven't solved this exact problem before, but here's how I'd think through it:

First, I'd [simple approach that might be inefficient].

Then I'd research [specific thing] to see if there's a better way.

Based on similar problems I've solved, I'd probably [educated guess].

Can I look up the syntax for [specific thing] or would you like me to pseudocode it first?"

**They appreciate the thinking process more than getting it perfect.**

---

## 📚 RESOURCES TO REVIEW (If You Have Time)

**Quick reviews (2-3 hours total):**
- Python list/dict methods (refresh)
- String manipulation methods
- Common algorithms (sorting, searching)
- Basic time complexity (O(n), O(n²), O(log n))

**Don't stress about:**
- Advanced algorithms (you won't need them for junior roles)
- Computer science theory
- Low-level optimization

**Focus on:**
- Can you solve practical problems?
- Can you explain your code clearly?
- Can you debug when something breaks?

---

## ✅ YOU'RE READY IF YOU CAN:

- [ ] Explain your quiz platform architecture
- [ ] Write a function to filter a list
- [ ] Explain decorators in Flask
- [ ] Describe try-except error handling
- [ ] Write a list comprehension
- [ ] Explain the difference between lists and dictionaries
- [ ] Debug a simple error (missing import, typo, wrong variable)
- [ ] Talk about your code confidently

**Most junior interviews won't go deeper than this.**

**You already built production apps. You know enough. Trust yourself.**
