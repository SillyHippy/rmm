# 🚀 QUICK START GUIDE

## Get Your Website Running in 5 Minutes!

### Step 1: Open PowerShell
Navigate to your project folder:
```powershell
cd "C:\Users\ianna\OneDrive\Desktop\GitHub\rmm"
```

### Step 2: Install Everything
```powershell
npm install
```
⏱️ This takes 2-3 minutes. Grab a coffee!

### Step 3: Start the Site
```powershell
npm run dev
```

### Step 4: View Your Site
Open your browser to: **http://localhost:3000**

🎉 **That's it! Your site is running!**

---

## What You'll See

- ✅ Professional homepage with hero section
- ✅ Full navigation menu
- ✅ Services page with 6 service types
- ✅ Service areas for 4 counties
- ✅ About page with company info
- ✅ Contact page with form
- ✅ FAQ page with 10 questions
- ✅ Fully responsive on mobile

---

## Before You Launch (Important!)

### 1. Add Your Images
Create the images folder:
```powershell
New-Item -Path "public\images" -ItemType Directory -Force
```

Then add these files to `public\images\`:
- **logo.png** - Your company logo
- **og-image.jpg** - For social media (1200x630px)
- **hero-image.jpg** - Main hero section image
- **founder-photo.jpg** - Photo of Ryley McGee

Also add `favicon.ico` directly in the `public` folder.

### 2. Set Up Contact Form

Edit `app\contact\page.tsx` and add your form service:

**Using Formspree (Easiest):**
1. Sign up at https://formspree.io (free)
2. Create a form
3. Replace line 110 in `app\contact\page.tsx`:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
```

### 3. Update Domain

When you know your final domain, update:
- `app\layout.tsx` line 9
- `public\sitemap.xml` all URLs

### 4. Add Google Verification

In `app\layout.tsx` line 40, replace:
```typescript
google: "your-google-verification-code",
```
With your actual Google Search Console code.

---

## Ready to Deploy?

### Build Your Site
```powershell
npm run build
npm run export
```

This creates an `out` folder with your complete website!

### Upload to Hosting
1. Upload everything in the `out` folder to your web host
2. Point your domain to that folder
3. Done!

---

## Testing Checklist

Before going live:
- [ ] Test on Chrome
- [ ] Test on mobile phone
- [ ] Test contact form
- [ ] Check all links work
- [ ] Verify phone number clicks to call on mobile
- [ ] Check all pages load
- [ ] Verify email links work

---

## Need Help?

### Common Issues:

**"Port 3000 already in use"**
```powershell
npm run dev -- -p 3001
```

**"Cannot find module" errors**
```powershell
npm install
```

**Images not showing**
- Make sure images are in `public\images\`
- File names are case-sensitive
- Use forward slashes in paths: `/images/logo.png`

---

## Quick Commands Reference

| Command | What it does |
|---------|-------------|
| `npm install` | Installs dependencies |
| `npm run dev` | Starts development server |
| `npm run build` | Builds for production |
| `npm run export` | Creates static site |

---

## Where to Edit Content

| Page | File Location |
|------|--------------|
| Home | `app\page.tsx` |
| About | `app\about\page.tsx` |
| Services | `app\services\page.tsx` |
| Service Areas | `app\service-areas\page.tsx` |
| Contact | `app\contact\page.tsx` |
| FAQ | `app\faq\page.tsx` |
| Header | `components\Header.tsx` |
| Footer | `components\Footer.tsx` |

---

## 🎨 Want to Change Colors?

Edit `app\globals.css` - look for these CSS variables:
- `--primary` - Main blue color
- `--secondary` - Secondary colors
- Change the HSL values to your preferred colors

---

## 📱 Already Mobile-Friendly!

Your site automatically adjusts to:
- ✅ Phones (iPhone, Android)
- ✅ Tablets (iPad, etc.)
- ✅ Desktops
- ✅ Large screens

No extra work needed!

---

## 🔍 SEO is Built-In!

Your site includes:
- ✅ Meta tags
- ✅ Schema markup
- ✅ Sitemap
- ✅ Mobile-friendly
- ✅ Fast loading
- ✅ Proper headings

Just submit your sitemap to Google Search Console after launch!

---

## Support

Everything is documented in:
- `PROJECT-SUMMARY.md` - Complete overview
- `SETUP-INSTRUCTIONS.md` - Detailed setup guide
- `README.md` - Basic info

---

## 🎉 You're All Set!

Your professional process serving website is ready to go. Just add images, test it, and deploy!

**Questions?** Check the other documentation files for detailed information.

**Good luck with RMM Service of Process!** 🚀
