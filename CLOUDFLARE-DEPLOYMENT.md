# Cloudflare Pages Deployment Guide

## Step-by-Step Deployment Instructions

### 1. Push Your Code to GitHub
First, make sure all your changes are committed and pushed to GitHub:

```bash
git add .
git commit -m "Ready for Cloudflare Pages deployment"
git push origin main
```

---

### 2. Log into Cloudflare Pages
1. Go to https://dash.cloudflare.com/
2. Log in to your Cloudflare account
3. Click on **"Workers & Pages"** in the left sidebar
4. Click the **"Create application"** button
5. Select **"Pages"** tab
6. Click **"Connect to Git"**

---

### 3. Connect Your GitHub Repository
1. Click **"Connect GitHub"** (or GitLab if using that)
2. Authorize Cloudflare to access your GitHub account
3. Select your repository: **`rmm`** (or whatever you named it)
4. Click **"Begin setup"**

---

### 4. Configure Build Settings

**Project Name:** Enter a name (e.g., `rmm-service-of-process`)

**Production Branch:** `main` (or your default branch)

**Framework Preset:** Select **"Next.js (Static HTML Export)"**

**Build Configuration:**
- **Build command:** `npm run export`
- **Build output directory:** `out`

**Root Directory:** Leave blank (unless your Next.js app is in a subdirectory)

---

### 5. Environment Variables (Optional)
You don't need any environment variables for this static site, so you can skip this section.

---

### 6. Deploy!
1. Click **"Save and Deploy"**
2. Cloudflare will now:
   - Clone your repository
   - Run `npm install`
   - Run `npm run export`
   - Deploy the `/out` folder to their CDN
3. Wait 2-5 minutes for the build to complete

---

### 7. View Your Live Site
Once deployed:
1. You'll see a success message with your site URL (e.g., `rmm-service-of-process.pages.dev`)
2. Click the URL to view your live site!

---

### 8. Custom Domain (Optional)
To use your own domain (www.rmmsop.com):

1. In your Cloudflare Pages project, click **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter your domain: `www.rmmsop.com`
4. Follow the DNS instructions to point your domain to Cloudflare
5. Wait for DNS propagation (can take a few minutes to 48 hours)

---

## Troubleshooting

### Build Fails?
Check the build logs in Cloudflare. Common issues:
- **Node version:** Cloudflare uses Node 18+ by default (you're good!)
- **Missing dependencies:** Make sure all packages are in `package.json`
- **Build command:** Double-check it's `npm run export` not `npm run build`

### Site Looks Wrong?
- Clear your browser cache
- Check the build output directory is set to `out`
- Verify all images are in the `/public` folder

### 404 Errors?
- Make sure you're using Next.js Link components for internal navigation
- Check that all paths start with `/` (e.g., `/services` not `services`)

---

## Future Updates

To deploy changes in the future:

1. Make your changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update site content"
   git push origin main
   ```
3. Cloudflare **automatically rebuilds and deploys** your site!
4. Wait 2-5 minutes for the new version to go live

That's it! No manual uploads needed - every push to `main` triggers a new deployment.

---

## Your Site Is Ready! 🚀

Once deployed, your site will be:
- ✅ Live on Cloudflare's global CDN (super fast worldwide)
- ✅ Free tier (no cost!)
- ✅ Automatic HTTPS/SSL
- ✅ Automatic deployments on every push
- ✅ Unlimited bandwidth (on free tier)

Enjoy your new professional process serving website!
