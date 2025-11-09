# RMM Service of Process - Website Setup Instructions

## Quick Start

This is a professional, SEO-optimized Next.js website for RMM Service of Process.

### 1. Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required dependencies including:
- Next.js 14
- React 18  
- TypeScript
- Tailwind CSS
- Lucide React (icons)

### 2. Development

Run the development server:

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### 3. Build for Production

To create an optimized production build:

```powershell
npm run build
```

### 4. Export Static Site

To export as a static site (for hosting on any web server):

```powershell
npm run export
```

This creates an `out` folder with all static files ready to deploy.

## Adding Images

Replace the placeholder images with actual photos:

### Required Images:

1. **Logo**: `public/images/logo.png` (recommended: 200x200px)
2. **OG Image**: `public/images/og-image.jpg` (1200x630px for social media)
3. **Hero Image**: Add professional photo to Hero component
4. **About Page Photo**: Professional photo of Ryley McGee
5. **Favicon**: `public/favicon.ico`

### Where to Add Images:

1. Create `public/images/` folder
2. Add images to this folder
3. Update image paths in:
   - `app/layout.tsx` (line 43, 66 - schema markup)
   - `components/Hero.tsx` (line 59-70 - hero section)
   - `app/about/page.tsx` (line 31-37 - founder photo)

## Customization Guide

### Update Contact Information

If any contact details change, update in:
- `app/layout.tsx` (lines 43-145 - schema markup)
- `components/Header.tsx` (lines 17-24)
- `components/Footer.tsx` (lines 81-103)
- `app/contact/page.tsx` (lines 35-82)

### Update Service Areas

To add or modify service areas:
- `components/ServiceAreas.tsx` (lines 5-31)
- `app/service-areas/page.tsx` (lines 9-55)

### Update Services

To modify services offered:
- `components/Services.tsx` (lines 5-41)
- `app/services/page.tsx` (lines 12-104)

### SEO Optimization

The site is fully SEO optimized with:
- ✅ Proper meta tags
- ✅ Schema.org structured data (LegalService)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Open Graph tags
- ✅ Mobile-responsive design
- ✅ Fast loading times

### Google Verification

Add your Google Search Console verification code in:
- `app/layout.tsx` (line 40)

Replace `"your-google-verification-code"` with your actual code.

## Deployment Options

### Option 1: Static Export (Recommended)

1. Run `npm run export`
2. Upload the `out` folder to any web hosting service
3. Point domain to hosting

### Option 2: Vercel (Easy Hosting)

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Deploy automatically

### Option 3: Traditional Web Hosting

1. Build: `npm run build && npm run export`
2. Upload `out` folder contents to web server
3. Configure domain

## Domain Setup

### Update Domain References

When you have the final domain, update these files:

1. `app/layout.tsx` - line 9 (metadataBase)
2. `public/sitemap.xml` - all URLs
3. `app/layout.tsx` - line 43+ (schema markup URLs)

## Forms Setup

The contact form in `app/contact/page.tsx` is currently a static form. To make it functional:

### Option 1: Use Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Add `action="YOUR_FORMSPREE_ENDPOINT"` to the form tag

### Option 2: Use Email Service

Integrate with an email service like SendGrid or EmailJS

### Option 3: Backend Integration

Connect to your own backend API for form submissions

## Social Media Links

Update social media URLs in:
- `components/Footer.tsx` (lines 22-39)
- `app/layout.tsx` (lines 138-144 - schema markup)

Current links:
- Facebook: https://www.facebook.com/rmmsop
- LinkedIn: https://www.linkedin.com/in/ryley-mcgee-014a8556
- Linktree: https://linktr.ee/rmmsop

## Additional Pages

The site includes:
- ✅ Home page with hero, services, service areas, features, FAQ
- ✅ Services page with detailed service information
- ✅ Service Areas page with county coverage
- ✅ About page with company information
- ✅ Contact page with form and contact details
- ✅ FAQ page with common questions

### Creating County-Specific Pages

County pages (e.g., `/service-areas/cleveland-county`) can be created by:

1. Creating `app/service-areas/cleveland-county/page.tsx`
2. Copy structure from service areas page
3. Customize content for that county

## Performance Tips

- Optimize images before uploading (use WebP format when possible)
- Keep images under 200KB each
- Use lazy loading for images below the fold
- Monitor Core Web Vitals in Google Search Console

## Support & Documentation

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React: https://react.dev

## License

© 2025 RMM Service of Process. All rights reserved.

---

## Quick Checklist Before Launch

- [ ] Install dependencies (`npm install`)
- [ ] Test in development (`npm run dev`)
- [ ] Add all images to `public/images/`
- [ ] Update Google verification code
- [ ] Test contact form
- [ ] Update domain in all files
- [ ] Build and export (`npm run export`)
- [ ] Test the `out` folder locally
- [ ] Deploy to hosting
- [ ] Submit sitemap to Google Search Console
- [ ] Test all pages on mobile devices
- [ ] Verify schema markup with Google Rich Results Test

## Need Help?

All placeholder text says "Image Placeholder" or similar - just replace with actual images and content.

The site structure is complete and ready to deploy once you add images!
