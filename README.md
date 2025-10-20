# Portfolio Website - Marlana Creed

A modern, responsive portfolio website showcasing my journey from data analyst to educator and EdTech developer.

## Features

✨ **Clean, Modern Design** - Professional aesthetic with gradient accents and smooth animations
📱 **Fully Responsive** - Works beautifully on desktop, tablet, and mobile devices
🎯 **Accessible** - Built with semantic HTML and accessibility best practices
⚡ **Fast & Lightweight** - No frameworks, pure HTML/CSS/JavaScript for optimal performance
🎨 **Customizable** - Easy to update with your own content, projects, and branding

## Getting Started

### Quick Start

1. **Clone or download this repository**
2. **Update your personal information** in `index.html`:
   - Replace "your.email@example.com" with your actual email
   - Update LinkedIn and GitHub URLs
   - Add your name and details

3. **Customize your projects** in the Projects section:
   - Replace placeholder content with your actual projects
   - Add project images or screenshots
   - Update links to live demos and GitHub repos

4. **Update skills** to match your expertise

5. **Open `index.html`** in a web browser to preview

### Customization Guide

#### Colors & Branding
Edit the CSS variables in `styles.css` (lines 10-20) to change your color scheme:

```css
:root {
    --primary: #6366f1;        /* Main brand color */
    --primary-dark: #4f46e5;   /* Darker shade */
    --secondary: #ec4899;      /* Accent color */
    /* ... */
}
```

#### Adding Project Images
Replace the gradient placeholders with actual images:

1. Create an `images` folder in your project directory
2. Add your project screenshots
3. In `index.html`, replace:
```html
<div class="project-placeholder" style="background: ...">
```
with:
```html
<img src="images/your-project.png" alt="Project name">
```

#### Content Sections
- **Hero Section**: Update your tagline and introduction
- **About Section**: Customize your story and highlights
- **Projects**: Add your actual projects (recommended 4-6 projects)
- **Skills**: List your specific technical and soft skills
- **Contact**: Add your real contact information

## Deployment

### Option 1: GitHub Pages (Free & Easy)

1. **Create a GitHub repository** for your portfolio
2. **Push your code** to the repository:
```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```
3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "main" branch as source
   - Your site will be live at `https://yourusername.github.io/portfolio`

### Option 2: Netlify (Free with Custom Domain)

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Drag and drop** your project folder into Netlify
3. Your site is live! Netlify provides a URL like `your-site.netlify.app`
4. Optional: Connect a custom domain in Netlify settings

### Option 3: Vercel (Free with Custom Domain)

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Install Vercel CLI**:
```bash
npm install -g vercel
```
3. **Deploy** from your project folder:
```bash
vercel
```
4. Follow the prompts - your site will be live instantly

### Option 4: Traditional Web Hosting

Upload the following files to your web host via FTP:
- `index.html`
- `styles.css`
- `script.js`
- Any images you've added

## File Structure

```
portfolio-website/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
├── README.md           # This file
└── images/            # (create this folder for your images)
    ├── project1.png
    ├── project2.png
    └── ...
```

## Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Standing Out

### Content Tips
1. **Tell your story** - Your career transition is unique and valuable
2. **Show impact** - Use metrics where possible (e.g., "increased engagement by 40%")
3. **Be specific** - Instead of "built a website," say "built a React-based parent portal serving 500+ families"
4. **Highlight accessibility** - Especially your ADHD resources - this shows empathy and inclusive design

### Technical Improvements
1. **Add real project images** - Screenshots make your work tangible
2. **Link to live demos** - Whenever possible, let employers interact with your work
3. **Include GitHub links** - Show your code and commit history
4. **Add a blog** - Write about your projects or teaching experiences (optional but powerful)
5. **Include testimonials** - From students, parents, or colleagues if available

### SEO & Discoverability
1. **Update meta tags** in `index.html`:
```html
<meta name="description" content="Your compelling description">
<meta name="keywords" content="data analyst, educator, web developer, EdTech">
```
2. **Use a custom domain** - Makes your portfolio more professional
3. **Submit to Google Search Console** after deployment

## Next Steps

- [ ] Customize all content with your information
- [ ] Add real project images and descriptions
- [ ] Update contact information
- [ ] Test on multiple devices and browsers
- [ ] Deploy to your chosen platform
- [ ] Share your portfolio URL on LinkedIn
- [ ] Add portfolio link to your resume
- [ ] Get feedback from friends or mentors

## Questions or Issues?

This portfolio is designed to be simple and easy to customize. If you need to:
- **Change layout**: Edit the HTML structure in `index.html`
- **Modify styling**: Update classes and styles in `styles.css`
- **Add functionality**: Extend `script.js` with additional features

## License

This project is free to use for your personal portfolio. Feel free to customize it however you'd like!

---

**Good luck with your job search!** Remember, your unique background combining data analysis, education, and development is valuable. This portfolio will help you tell that story effectively.
