# 🚀 SaaS Landing Page Template

A modern, fully responsive SaaS landing page template built with React, TypeScript, and Tailwind CSS. Perfect for startups, SaaS products, and businesses looking to create a professional online presence.

![SaaS Landing Page Template](https://sassifyy.netlify.app/)

## ✨ Features

### 🎨 Design & UI
- **Modern Apple-style Design** - Clean, minimalist interface with rounded corners and soft shadows
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support** - Toggle between light and dark themes with localStorage persistence
- **Smooth Animations** - Subtle hover effects and micro-interactions
- **Inter Font** - Professional typography using Google Fonts

### 📱 Components & Sections
- **Hero Section** - Compelling headline with dual CTAs and mockup preview
- **Features Section** - 6 key features with icons and hover animations
- **Pricing Section** - Three-tier pricing table with highlighted popular plan
- **Testimonials** - Customer reviews with avatars and ratings
- **FAQ Section** - Accordion-style frequently asked questions
- **Call-to-Action** - Conversion-focused banner section
- **Navigation** - Responsive navbar with mobile hamburger menu
- **Footer** - Comprehensive footer with newsletter signup and social links

### 🔧 Functionality
- **Authentication Modals** - Sign in and sign up forms with validation
- **Contact Form** - Functional contact form with form validation
- **Form Validation** - Client-side validation with error handling
- **Accessibility** - WCAG compliant with proper ARIA labels
- **SEO Optimized** - Semantic HTML and meta tags

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable icons
- **ESLint** - Code linting and formatting

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn
- Git (optional, for cloning)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devlance074/saas-template.git
   cd saas-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to see your landing page.

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
saas-landing-page/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AuthModal.tsx      # Sign in/up modal
│   │   ├── ContactForm.tsx    # Contact form component
│   │   ├── CTA.tsx           # Call-to-action section
│   │   ├── FAQ.tsx           # FAQ accordion
│   │   ├── Features.tsx      # Features grid
│   │   ├── Footer.tsx        # Footer with links
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── Pricing.tsx       # Pricing table
│   │   └── Testimonials.tsx  # Customer testimonials
│   ├── hooks/
│   │   └── useDarkMode.ts    # Dark mode hook
│   ├── App.tsx               # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── tailwind.config.js        # Tailwind configuration
├── package.json
└── README.md
```

## 🎨 Customization Guide

### 1. Branding & Colors

Update your brand colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary brand color
    600: '#your-color',
    700: '#your-darker-color',
  },
  secondary: {
    // Your secondary color
    600: '#your-secondary-color',
  }
}
```

### 2. Content Customization

#### Hero Section (`src/components/Hero.tsx`)
- Update headline and subheadline
- Modify CTA button text and actions
- Replace mockup image

#### Features (`src/components/Features.tsx`)
- Add/remove features
- Update icons from Lucide React
- Modify descriptions

#### Pricing (`src/components/Pricing.tsx`)
- Update pricing tiers and features
- Modify plan names and descriptions
- Adjust pricing amounts

#### Testimonials (`src/components/Testimonials.tsx`)
- Replace with real customer testimonials
- Update avatar images (use your own or stock photos)
- Modify names and titles

### 3. Styling & Theme

The template uses Tailwind CSS for styling. Key customization areas:

- **Typography**: Modify font families in `tailwind.config.js`
- **Spacing**: Adjust padding and margins using Tailwind classes
- **Colors**: Update the color palette in the config file
- **Animations**: Customize animations in the config file

### 4. Adding New Sections

To add a new section:

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update navigation links in `src/components/Navbar.tsx`

## 🔧 Configuration

### Environment Variables

Create a `.env` file for any environment-specific configurations:

```env
VITE_APP_TITLE=Your SaaS Name
VITE_CONTACT_EMAIL=contact@yourcompany.com
```

### Meta Tags & SEO

Update meta tags in `index.html`:

```html
<title>Your SaaS - Transform Your Business</title>
<meta name="description" content="Your compelling description" />
```

## 📱 Responsive Design

The template is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components automatically adapt to different screen sizes using Tailwind's responsive utilities.

## 🌙 Dark Mode

Dark mode is implemented using:
- Tailwind's `dark:` prefix for styling
- `useDarkMode` hook for state management
- localStorage for persistence

Toggle dark mode using the moon/sun icon in the navigation bar.

## 📋 Form Handling

### Authentication Forms
- Client-side validation
- Password visibility toggle
- Error handling and display
- Loading states

### Contact Form
- Required field validation
- Email format validation
- Success/error states
- Form reset after submission

**Note**: Forms currently use mock API calls. Integrate with your backend service for production use.

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)
3. Your site is live!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Traditional Hosting
1. Build: `npm run build`
2. Upload `dist` folder contents to your web server

## 🔍 SEO Optimization

The template includes:
- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Alt tags for images
- Meta descriptions
- Open Graph tags ready for customization

## ♿ Accessibility

Features for accessibility:
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast compliance

## 🧪 Testing

Run linting:
```bash
npm run lint
```

## 📦 Dependencies

### Core Dependencies
- `react` - UI library
- `react-dom` - React DOM renderer
- `lucide-react` - Icon library

### Development Dependencies
- `vite` - Build tool
- `typescript` - Type checking
- `tailwindcss` - CSS framework
- `eslint` - Code linting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 Changelog

### v1.0.0 (Current)
- Initial release
- Complete SaaS landing page template
- Dark mode support
- Authentication modals
- Contact form
- Fully responsive design

## 🐛 Known Issues

- Forms use mock API calls (integrate with real backend)
- Images are placeholder stock photos (replace with your own)

## 💡 Tips & Best Practices

1. **Performance**: Optimize images before deployment
2. **SEO**: Update all meta tags and content
3. **Analytics**: Add Google Analytics or similar
4. **Testing**: Test on multiple devices and browsers
5. **Accessibility**: Run accessibility audits regularly

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/devlance074/saas-template/issues) page
2. Create a new issue with detailed information
3. Contact: [your-email@example.com]

## 🌟 Show Your Support

If this template helped you, please:
- ⭐ Star the repository
- 🐛 Report bugs
- 💡 Suggest new features
- 📢 Share with others

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

**You are free to:**
- ✅ Use commercially
- ✅ Modify and distribute
- ✅ Use privately
- ✅ Sublicense

**Conditions:**
- 📄 Include license and copyright notice
- 🚫 No warranty provided

**What this means:**
- Use this template for any project (personal or commercial)
- Modify it however you want
- No need to share your changes
- No attribution required (but appreciated!)

---

## 🎉 Ready to Launch?

Your SaaS landing page template is ready to use! Here's your launch checklist:

- [ ] Customize branding and colors
- [ ] Update all content and copy
- [ ] Replace placeholder images
- [ ] Configure forms with your backend
- [ ] Update meta tags for SEO
- [ ] Test on multiple devices
- [ ] Deploy to your hosting platform
- [ ] Set up analytics tracking

**Happy coding! 🚀**

---

<div align="center">
  <p>
Made with ❤ by DevLance for the developer community
</p>
  <p>
    <a href="#-features">Features</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-customization-guide">Customization</a> •
    <a href="#-deployment">Deployment</a>
  </p>
</div>