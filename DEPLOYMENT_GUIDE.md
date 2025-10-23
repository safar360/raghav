# GitHub Pages Deployment Guide for Raghav Temple

## 🚀 Quick Deployment Steps

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Repository name: `raghav-temple-website` (or your preferred name)
4. Description: "Official website for Raghav Temple"
5. Set to **Public** (required for free GitHub Pages)
6. ✅ Check "Add a README file"
7. Click "Create repository"

### 2. Upload Website Files

#### Option A: Using GitHub Web Interface
1. In your repository, click "uploading an existing file"
2. Drag and drop all files: `index.html`, `styles.css`, `script.js`, `manifest.json`, `sw.js`, `README.md`
3. Commit message: "Initial website upload"
4. Click "Commit changes"

#### Option B: Using Git Command Line
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial website upload"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/raghav-temple-website.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under "Source", select **Deploy from a branch**
5. Branch: **main** (or master)
6. Folder: **/ (root)**
7. Click **Save**

### 4. Access Your Website

Your website will be available at:
- **GitHub URL**: `https://YOUR_USERNAME.github.io/raghav-temple-website`
- **Custom Domain**: `https://yourdomain.com` (after setup)

## 🌐 Custom Domain Setup

### Prerequisites
- Own a domain name (from providers like GoDaddy, Namecheap, Cloudflare, etc.)
- GitHub Pages site must be deployed and working

### Step 1: Configure DNS Records

Add these DNS records to your domain provider:

#### For Root Domain (example.com)
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 300

Type: A
Name: @
Value: 185.199.109.153
TTL: 300

Type: A
Name: @
Value: 185.199.110.153
TTL: 300

Type: A
Name: @
Value: 185.199.111.153
TTL: 300
```

#### For Subdomain (www.example.com)
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 300
```

### Step 2: Configure GitHub Pages

1. Go to repository **Settings** → **Pages**
2. In "Custom domain" field, enter your domain (e.g., `raghavtemple.com`)
3. ✅ Check "Enforce HTTPS"
4. Click **Save**

### Step 3: Create CNAME File

Create a file named `CNAME` (no extension) in your repository root:

```
raghavtemple.com
```

### Step 4: Verify Domain

1. Wait 24-48 hours for DNS propagation
2. Visit your custom domain
3. Check that HTTPS is working
4. Verify all pages load correctly

## 📁 Repository Structure

Your GitHub repository should look like this:

```
raghav-temple-website/
├── .github/
│   └── workflows/
│       └── pages.yml (optional - for custom workflows)
├── index.html
├── styles.css
├── script.js
├── manifest.json
├── sw.js
├── CNAME (for custom domain)
└── README.md
```

## 🔧 Customization After Deployment

### Update Content
1. Edit files locally
2. Commit changes: `git add . && git commit -m "Update content"`
3. Push to GitHub: `git push`
4. Changes deploy automatically

### Add Google AdSense
1. Get your AdSense publisher ID
2. Add to `index.html`:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID" crossorigin="anonymous"></script>
```

### Update Payment Details
1. Edit `script.js`
2. Update UPI ID and bank details
3. Replace QR code image
4. Commit and push changes

## 🚀 Advanced Features

### Custom GitHub Actions (Optional)

Create `.github/workflows/pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Pages
      uses: actions/configure-pages@v3
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v1
      with:
        path: '.'
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v2
```

### Analytics Integration

Add Google Analytics to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security & Performance

### HTTPS Enforcement
- Always enable "Enforce HTTPS" in GitHub Pages settings
- Custom domains automatically get SSL certificates

### Performance Optimization
- Images are served via GitHub's CDN
- Static files are cached efficiently
- Service worker enables offline functionality

## 📊 Monitoring & Analytics

### GitHub Pages Analytics
1. Go to repository **Settings** → **Pages**
2. Enable "GitHub Pages Analytics" (if available)

### Custom Analytics
- Google Analytics
- Plausible Analytics
- Fathom Analytics

## 🆘 Troubleshooting

### Common Issues

1. **404 Error**: Check file names and paths
2. **Custom Domain Not Working**: Verify DNS records and wait 24-48 hours
3. **HTTPS Issues**: Ensure "Enforce HTTPS" is enabled
4. **Build Failures**: Check for syntax errors in HTML/CSS/JS

### Support Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 🎯 Next Steps

1. **Deploy**: Follow the steps above to deploy your site
2. **Customize**: Update content with your temple's information
3. **Monitor**: Set up analytics to track visitors
4. **Maintain**: Regular updates and content refresh

---

**Your Raghav Temple website will be live and accessible worldwide! 🌍**


