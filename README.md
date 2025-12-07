# Portfolio Website - Alexa Rise

A modern, responsive portfolio website for photographer Alexa Rise. This single-page website showcases photography services, portfolio gallery, pricing packages, and contact information.

## 🎯 Features

- **Hero Section** - Eye-catching landing area with call-to-action button
- **Skills Section** - Highlights four main services:
  - Digital photography
  - Video shooting
  - Retouch
  - Audio recording
- **Portfolio Gallery** - Filterable gallery with seasonal categories (Winter, Spring, Summer, Autumn)
- **Video Section** - Video player showcase
- **Pricing Section** - Three pricing tiers:
  - Standard ($500)
  - Premium ($700)
  - Gold ($1000)
- **Contact Form** - Contact form for client inquiries
- **Responsive Design** - Fully responsive with mobile hamburger menu
- **Language Switcher** - English/Russian language toggle (UI ready)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **SCSS** - Modular stylesheet architecture with partials
- **JavaScript (Vanilla)** - Interactive functionality
- **Custom Fonts**:
  - Inter (Regular & Bold)
  - Josefin Sans (Bold)

## 📁 Project Structure

```
portfolio-main/
├── index.html              # Main HTML file
├── style.scss              # Main SCSS file (imports all partials)
├── css/
│   └── style.css          # Compiled CSS output
├── js/
│   └── index.js           # JavaScript for mobile menu toggle
├── fonts/                 # Custom font files
│   ├── Inter-Bold.ttf
│   ├── Inter-Regular.ttf
│   └── JosefinSans-Bold.ttf
├── img/                   # Image assets
│   ├── bg.png
│   ├── logo.png
│   ├── portfolio-img*.png
│   └── ... (social icons, UI elements)
├── _header.scss           # Header & navigation styles
├── _main.scss             # Hero section styles
├── _skills.scss           # Skills section styles
├── _portfolio.scss        # Portfolio gallery styles
├── _video.scss            # Video section styles
├── _price.scss            # Pricing section styles
├── _contact.scss          # Contact form styles
└── _footer.scss           # Footer styles
```

## 🚀 Getting Started

### Prerequisites

- A web server (or use a local development server)
- SCSS compiler (if you want to modify styles)

### Installation

1. Clone or download this repository
2. Open `index.html` in a web browser, or
3. Use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

### Compiling SCSS

If you modify the SCSS files, you'll need to compile them to CSS:

```bash
# Using Sass CLI
sass style.scss css/style.css

# Watch mode for development
sass --watch style.scss:css/style.css
```

## 📱 Responsive Breakpoints

- **Desktop**: Default (1440px max-width)
- **Tablet**: 992px and below
- **Mobile**: 560px and below
- **Small Mobile**: 320px and below

## 🎨 Key Functionality

### Mobile Menu
The hamburger menu toggles the navigation on mobile devices. The JavaScript handles the toggle functionality:

```javascript
// Toggles mobile navigation menu
document.querySelector(".header__burger").addEventListener("click", function(e) {
  document.querySelector(".main__nav").classList.toggle("show");
  document.querySelector(".header__burger").classList.toggle("open");
});
```

### Portfolio Filtering
Portfolio buttons are styled for filtering (currently UI-only; JavaScript filtering can be added).

## 🎯 Customization

### Colors
The main accent color is `#bdae82` (golden beige). Modify this in the SCSS files to change the theme.

### Fonts
Custom fonts are loaded via `@font-face` in `style.scss`. To change fonts:
1. Add font files to the `fonts/` directory
2. Update `@font-face` declarations in `style.scss`

### Content
- Update photographer name in `index.html` (line 38)
- Modify portfolio images in the `img/` directory
- Update pricing in the Price section (lines 122-158)
- Customize contact form fields as needed

## 📝 Notes

- The language switcher (EN/RU) is currently UI-only and doesn't implement actual translation
- Portfolio filtering buttons are styled but may need JavaScript implementation for dynamic filtering
- Contact form doesn't have backend integration - you'll need to add form handling
- Video player is a placeholder - integrate your preferred video player solution

## 🌐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design tested for various screen sizes

## 📄 License

This project appears to be a portfolio template. Please check for any specific licensing requirements.

## 👤 Author

Portfolio website for **Alexa Rise** - Professional Photographer

---

**Note**: This is a frontend-only project. For production use, you'll need to:
- Add backend integration for the contact form
- Implement actual language switching functionality
- Add dynamic portfolio filtering
- Integrate a video player solution
- Set up proper form validation

