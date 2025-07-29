# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases your projects, skills, experience, and provides a way for potential clients or employers to get in touch.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Dark Mode Support**: Automatic dark/light theme support
- **Interactive Navigation**: Smooth scrolling navigation with mobile menu
- **Project Showcase**: Display your projects with descriptions and technologies
- **Experience Timeline**: Professional experience and education sections
- **Contact Form**: Functional contact form for potential clients
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Built with Next.js for optimal performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Sans & Geist Mono
- **Icons**: Heroicons and custom SVGs
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── About.tsx            # About section with skills
│   ├── Contact.tsx          # Contact form and information
│   ├── Experience.tsx       # Work experience and education
│   ├── Hero.tsx             # Landing section
│   ├── Navigation.tsx       # Header navigation
│   └── Projects.tsx         # Projects showcase
└── ...
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the description and role
   - Replace social media links

2. **About Section** (`src/components/About.tsx`):
   - Update the bio and description
   - Modify the skills array with your technologies
   - Update the resume download link

3. **Projects Section** (`src/components/Projects.tsx`):
   - Replace the projects array with your actual projects
   - Update GitHub and live demo URLs
   - Add project screenshots/images

4. **Experience Section** (`src/components/Experience.tsx`):
   - Update work experience and education information
   - Modify dates, companies, and descriptions

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information (email, LinkedIn, GitHub)
   - Modify location information
   - Configure form submission (add backend API)

### Styling

The project uses Tailwind CSS for styling. You can customize:

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update fonts in `src/app/layout.tsx`
- **Spacing**: Adjust section spacing and layout in components

### Adding New Sections

To add new sections:

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Deploy on Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms

This Next.js app can be deployed on any platform that supports Node.js applications.

## 📧 Contact Form Setup

The contact form currently shows an alert on submission. To make it functional:

1. **Option 1**: Use a service like [Formspree](https://formspree.io/) or [Netlify Forms](https://www.netlify.com/products/forms/)
2. **Option 2**: Create an API route in `src/app/api/contact/route.ts`
3. **Option 3**: Use [EmailJS](https://www.emailjs.com/) for client-side email sending

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

Built with ❤️ using Next.js and Tailwind CSS
