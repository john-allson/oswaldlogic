# Deployment Guide - Oswald Website

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is perfect for React/Vite projects and keeps your source code private while hosting the built files.

### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Deploy Your Project**
   - Click "Add New Project"
   - Import your GitHub repository (you'll need to push your code to GitHub first)
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

3. **Configuration** (Vercel auto-detects these, but verify):
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Your site will be live** at: `https://your-project-name.vercel.app`

### Privacy:
- ✅ Source code stays private on GitHub
- ✅ Only built files are deployed
- ✅ Free SSL certificate included
- ✅ Automatic deployments on Git push

---

## Option 2: Deploy to Netlify

Another excellent free option with similar features.

### Steps:

1. **Create a Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **Deploy Your Project**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Your site will be live** at: `https://your-project-name.netlify.app`

---

## Option 3: Deploy to Cloudflare Pages

Great performance with Cloudflare's global CDN.

### Steps:

1. **Create a Cloudflare Account**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign up for free

2. **Deploy Your Project**
   - Click "Create a project"
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"

3. **Your site will be live** at: `https://your-project-name.pages.dev`

---

## Alternative: Deploy Without GitHub (Direct Upload)

If you don't want to use GitHub at all, you can deploy just the built files:

### Using Netlify Drop:

1. Build your project locally: `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Your site is live instantly!

### Using Vercel CLI:

1. Install Vercel CLI: `npm install -g vercel`
2. Build your project: `npm run build`
3. Run: `vercel --prod`
4. Follow the prompts to deploy

---

## Recommended Approach for Privacy:

1. **Make your GitHub repository private** (free on GitHub)
2. **Deploy using Vercel or Netlify** - they connect to your private repo
3. **Only the built files** (`dist` folder) will be publicly accessible
4. **Your source code remains completely hidden**

---

## Custom Domain (Optional)

All platforms above support custom domains for free:
- Buy a domain from Namecheap, GoDaddy, etc.
- Add it in your hosting platform's settings
- Update DNS records as instructed

---

## Next Steps:

1. Choose your preferred hosting platform
2. Make sure your GitHub repository is set to **Private**
3. Follow the deployment steps above
4. Your website will be live in minutes!
