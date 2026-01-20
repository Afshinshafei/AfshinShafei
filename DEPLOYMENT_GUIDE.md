# Deployment Guide for GitHub Pages

This guide will walk you through deploying your personal website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### Step 1: Prepare Your Repository

1. Create a new repository on GitHub:
   - Go to [github.com/new](https://github.com/new)
   - Name it (e.g., `personal-website` or `username.github.io` for user site)
   - Make it public
   - Don't initialize with README (we already have one)

### Step 2: Initialize Git (if not already done)

In your project folder, run:

```bash
git init
git add .
git commit -m "Initial commit: Retro personal website"
```

### Step 3: Connect to GitHub

Replace `YOUR_USERNAME` and `YOUR_REPO` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 4: Choose Your Deployment Method

#### Option A: Automatic Deployment with GitHub Actions (Recommended)

This method automatically builds and deploys your site when you push changes to the main branch.

1. The `.github/workflows/deploy.yml` file is already included in your project.

2. Go to your GitHub repository settings:
   - Click on **Settings** tab
   - Navigate to **Pages** in the left sidebar
   - Under **Source**, select **GitHub Actions**

3. Push your code if you haven't already:
```bash
git push origin main
```

4. GitHub Actions will automatically build and deploy your site. You can monitor the progress in the **Actions** tab.

5. Once completed, your site will be available at:
   - User site: `https://YOUR_USERNAME.github.io`
   - Project site: `https://YOUR_USERNAME.github.io/YOUR_REPO`

#### Option B: Manual Deployment

If you prefer manual control:

1. Build your site:
```bash
npm run build
```

2. The static files are now in the `out/` folder.

3. Deploy the `out/` folder to GitHub Pages:
```bash
cd out
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -f origin gh-pages
cd ..
```

4. Enable GitHub Pages:
   - Go to your repository **Settings**
   - Navigate to **Pages**
   - Under **Source**, select the `gh-pages` branch
   - Click **Save**

5. Your site will be published in a few minutes!

### Step 5: Configure for Project Repository (if needed)

If you're deploying to `username.github.io/repo-name` instead of `username.github.io`:

1. Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/YOUR_REPO_NAME',  // Add this line
  images: {
    unoptimized: true,
  },
}
```

2. Rebuild and redeploy:
```bash
npm run build
git add .
git commit -m "Update basePath for GitHub Pages"
git push origin main
```

## Using a Custom Domain

### Step 1: Add CNAME File

A CNAME file is already in `public/.nojekyll`. Create `public/CNAME`:

```bash
echo "yourdomain.com" > public/CNAME
```

### Step 2: Configure DNS

With your domain provider, add these DNS records:

**For root domain (example.com):**
```
Type: A
Name: @
Value: 185.199.108.153
```
```
Type: A
Name: @
Value: 185.199.109.153
```
```
Type: A
Name: @
Value: 185.199.110.153
```
```
Type: A
Name: @
Value: 185.199.111.153
```

**For subdomain (www.example.com):**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### Step 3: Enable Custom Domain in GitHub

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Check **Enforce HTTPS** (after DNS propagates)

## Updating Your Site

After making changes:

**With GitHub Actions:**
```bash
git add .
git commit -m "Update website content"
git push origin main
```
The site will automatically rebuild and redeploy.

**Manual Deployment:**
```bash
npm run build
cd out
git add .
git commit -m "Update site"
git push -f origin gh-pages
cd ..
```

## Troubleshooting

### Site Not Loading

1. Check that GitHub Pages is enabled in repository settings
2. Verify the source branch is correct
3. Wait 5-10 minutes for initial deployment
4. Check the Actions tab for build errors (if using GitHub Actions)

### 404 Errors on Routes

1. Make sure `basePath` in `next.config.js` matches your repository name
2. Rebuild after changing configuration

### Custom Domain Not Working

1. Verify DNS records are correct (use [DNS Checker](https://dnschecker.org))
2. DNS propagation can take 24-48 hours
3. Make sure CNAME file exists in the deployed site

### Build Failures

1. Check the Actions tab for error messages
2. Ensure all dependencies are listed in `package.json`
3. Test the build locally: `npm run build`

## Monitoring Deployments

- **Actions Tab**: See build and deployment logs
- **Environments**: View deployment history under repository **Environments**
- **Pages Settings**: Check current deployment status

## Best Practices

1. **Test Locally First**: Always run `npm run build` and test locally before deploying
2. **Version Control**: Commit changes regularly with descriptive messages
3. **Backup**: Keep your source code safe in Git
4. **Monitor**: Check the Actions tab after pushing to ensure successful deployment
5. **Updates**: Keep dependencies updated for security

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export Guide](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- Check repository Issues tab for common problems

---

Happy deploying! 🚀
