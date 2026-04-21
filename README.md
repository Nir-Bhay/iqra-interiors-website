# IQRA Interiors & Exhibitions Website

A professional static website showcasing IQRA Interiors & Exhibitions' expertise in stall fabrication, exhibition setup, and interior design services.

## 📋 Overview

This repository contains the source code for the IQRA Interiors & Exhibitions website, a responsive and modern web application built with HTML, CSS, and JavaScript. The website highlights the company's services, portfolio, and contact information for potential clients.

## 🗂️ Project Structure

```
iqra-interiors-website/
├── Exhora_BACKUP/                  # Main website assets
│   ├── index.html                  # Main HTML file
│   ├── style.css                   # Custom styles
│   ├── css/                        # Stylesheet libraries
│   │   ├── bootstrap.min.css       # Bootstrap framework
│   │   ├── master.css              # Main custom stylesheet
│   │   ├── animate.css             # Animation library
│   │   ├── flaticon.css            # Icon styles
│   │   ├── fontawesome.css         # Font Awesome icons
│   │   ├── fonts.css               # Custom font styles
│   │   ├── jquery.fancybox.min.css # Lightbox styles
│   │   ├── lightcase.css           # Lightcase styles
│   │   ├── linear.css              # Linear styles
│   │   ├── process-section.css     # Process section styles
│   │   └── swipper.min.js          # Swiper slider styles
│   ├── fonts/                      # Font files
│   ├── images/                     # Image assets
│   │   └── background/             # Background images
│   │       └── icons/              # Icon images
│   ├── js/                         # JavaScript files
│   │   ├── appear.js               # Element appearance animations
│   │   ├── backtotop.js            # Back to top button
│   │   ├── bootstrap.min.js        # Bootstrap JavaScript
│   │   ├── color-settings.js       # Color theme settings
│   │   ├── gsap.min.js             # GSAP animation library
│   │   ├── jquery.countdown.js     # Countdown timer
│   │   ├── jquery.fancybox.js      # Lightbox functionality
│   │   ├── jquery.js               # jQuery library
│   │   ├── lightcase.js            # Lightcase functionality
│   │   ├── popper.min.js           # Popper for tooltips
│   │   ├── script.js               # Main custom JavaScript
│   │   ├── ScrollTrigger.min.js    # ScrollTrigger for GSAP
│   │   ├── SplitText.min.js        # Text splitting for animations
│   │   ├── splitType.js            # Text splitting utility
│   │   ├── swipper.min.js          # Swiper slider functionality
│   │   └── wow.js                  # WOW.js animations
│   ├── fix_icons.js                # Icon fixing utility
│   ├── fix_list_icons.js           # List icon fixing utility
│   ├── mobile_polish.js            # Mobile-specific adjustments
│   ├── replace.js                  # Content replacement utility
│   ├── responsive_fix.js           # Responsive design fixes
│   ├── robots.txt                  # Search engine directives
│   ├── search_results.txt          # Search results data
│   ├── sitemap.xml                 # XML sitemap for SEO
│   ├── update_html_cloudinary.ps1  # PowerShell script for Cloudinary updates
│   └── vercel.json                 # Vercel deployment configuration
├── README.md                       # This file
└── vercel.json                     # Root Vercel configuration (redirects to Exhora_BACKUP)
```

## ✨ Features

- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **SEO Optimized**: Proper meta tags, schema markup, and sitemap
- **Fast Loading**: Optimized assets and deferred non-critical CSS
- **Accessibility**: ARIA labels and semantic HTML structure
- **Interactive Elements**: 
  - Animated counters and progress bars
  - Image lightboxes (Fancybox/Lightcase)
  - Swiper sliders for portfolio showcase
  - Smooth scrolling and back-to-top functionality
- **Performance**: 
  - Resource hints (preconnect, dns-prefetch, preload)
  - Deferred CSS loading
  - Optimized image delivery via Cloudinary

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: 
  - Bootstrap 4 framework
  - Custom CSS (master.css, style.css)
  - Animation libraries (Animate.css, WOW.js, GSAP)
  - Icon libraries (Font Awesome, Flaticon)
- **JavaScript**:
  - jQuery core library
  - Bootstrap 4 JavaScript plugins
  - GSAP (GreenSock Animation Platform) for advanced animations
  - Swiper.js for touch-enabled sliders
  - Fancybox & Lightcase for image lightboxes
  - WOW.js for scroll-triggered animations
  - Custom scripts for site functionality

## 🚀 Local Development

To view and test the website locally:

1. **Clone the repository** (if not already done):
   ```bash
   git clone https://github.com/Nir-Bhay/iqra-interiors-website.git
   cd iqra-interiors-website
   ```

2. **Serve the files** using any static server:
   - Using Node.js `serve` package:
     ```bash
     npx serve .
     ```
   - Using Python's built-in server:
     ```bash
     python -m http.server 8000
     ```
   - Using VS Code Live Server extension

3. **Navigate to** `http://localhost:3000` (or your server's port) in your browser
4. **Access the main site** by visiting the `/Exhora_BACKUP/` directory or configure your server to serve from that directory

> **Note**: The website is configured to be served from the `Exhora_BACKUP` directory. Ensure your static server points to this folder for proper asset loading.

## ☁️ Deployment

This website is configured for seamless deployment on [Vercel](https://vercel.com):

### Automatic Deployment (Recommended)
1. Push your changes to the `main` branch
2. Vercel will automatically build and deploy the site
3. The root `vercel.json` configures Vercel to serve content from `/Exhora_BACKUP`

### Manual Deployment
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy to Vercel
vercel
```

### Vercel Configuration
The project includes two Vercel configuration files:
- Root `vercel.json`: Redirects all traffic to `/Exhora_BACKUP`
- `/Exhora_BACKUP/vercel.json`: Additional configuration for the backup directory

## 🔧 Project Maintenance

### Updating Images
Images are hosted on Cloudinary. To update images:
1. Replace images in the Cloudinary folder: `iqra-interiors/milestone/images/`
2. Run the update script: `Exhora_BACKUP/update_html_cloudinary.ps1` (PowerShell)
3. Commit and push changes

### Fixing Icons
If icons display incorrectly:
```bash
node Exhora_BACKUP/fix_icons.js
node Exhora_BACKUP/fix_list_icons.js
```

### Mobile Adjustments
For mobile-specific tweaks:
```bash
node Exhora_BACKUP/mobile_polish.js
```

## 📱 Responsive Breakpoints

The website uses Bootstrap's responsive breakpoints:
- **Extra small**: <576px (phones)
- **Small**: ≥576px (tablets in portrait)
- **Medium**: ≥768px (tablets in landscape, small laptops)
- **Large**: ≥992px (desktops)
- **Extra large**: ≥1200px (large desktops)

## 🔍 SEO Features

- Proper HTML5 semantic elements
- Meta tags for description, keywords, and viewport
- Open Graph tags for social sharing
- Twitter Card tags
- LocalBusiness and Organization schema markup
- XML sitemap (`sitemap.xml`)
- Robots.txt for crawler directives
- Canonical URL to prevent duplicate content
- Optimized image loading with proper alt attributes

## 🎨 Color Scheme

The website uses a professional color palette:
- **Primary**: #3DCFA0 (Teal Green) - used for theme color and accents
- **Secondary**: Dark gray tones for text
- **Background**: Clean whites and light grays
- **Accents**: Various shades from the primary color for buttons and highlights

## 📞 Contact

For business inquiries or collaboration opportunities:
- **Phone**: +91-9999404645
- **Email**: [Contact form on website]
- **Location**: MSX Tower II, Alpha I, Bengaluru, UP 201310, India

## 🙏 Acknowledgments

- Icons provided by [Font Awesome](https://fontawesome.com) and [Flaticon](https://www.flaticon.com)
- Animations powered by [GSAP](https://greensock.com/gsap/) and [WOW.js](https://wowjs.uk)
- Slider functionality by [Swiper.js](https://swiperjs.com)
- Lightbox effects by [Fancybox](https://fancyapps.com/fancybox/3/) and [Lightcase](https://cornel.bpages.at/lightcase/)
- Image optimization and delivery via [Cloudinary](https://cloudinary.com)

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

*Last updated: April 21, 2026*

Welcome to the official repository for the IQRA Interiors & Exhibitions website.

This is a static web application utilizing HTML, CSS, and modern web design principles to showcase stall fabrication, exhibition setup, and other professional interior services.

## Overview

- **Core Files**: The main index and styling files are housed in `/Exhora_BACKUP`.
- **Styling**: Vanilla CSS (`style.css` and `css/master.css`).

## Deployment

This website is configured for direct deployment using **Vercel**. 
A `vercel.json` file is present in the repository root to correctly route incoming root requests (`/`) to the static assets served from the `/Exhora_BACKUP/index.html` directory.

### Local Development

To run the site locally, you can use any static server. For example:
```bash
npx serve .
```
Navigate to the proxy address and click into the `/Exhora_BACKUP` directory, or ensure the server roots out from the `Exhora_BACKUP` properly.
