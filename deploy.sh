#!/bin/bash

# Raghav Temple Website - GitHub Pages Deployment Script
# This script helps you deploy your website to GitHub Pages

echo "🕉️ Raghav Temple Website Deployment Script"
echo "=========================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Committing changes..."
    git commit -m "Deploy Raghav Temple website to GitHub Pages"
    echo "✅ Changes committed"
fi

# Ask for GitHub repository URL
echo ""
echo "🔗 Please provide your GitHub repository URL:"
echo "   Example: https://github.com/yourusername/raghav-temple-website.git"
read -p "GitHub URL: " github_url

if [ -z "$github_url" ]; then
    echo "❌ GitHub URL is required"
    exit 1
fi

# Add remote origin
echo "🌐 Adding GitHub remote..."
git remote add origin "$github_url" 2>/dev/null || git remote set-url origin "$github_url"
echo "✅ GitHub remote added"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main 2>/dev/null || git push -u origin master 2>/dev/null

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment Successful!"
    echo "======================="
    echo ""
    echo "Your website will be available at:"
    echo "📱 GitHub Pages URL: https://$(echo $github_url | sed 's/.*github\.com\///' | sed 's/\.git$//' | sed 's/\/.*$//').github.io/$(echo $github_url | sed 's/.*github\.com\///' | sed 's/\.git$//' | sed 's/.*\///')"
    echo ""
    echo "Next steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Click Settings → Pages"
    echo "3. Select 'Deploy from a branch'"
    echo "4. Choose 'main' branch and '/ (root)' folder"
    echo "5. Click Save"
    echo ""
    echo "For custom domain setup, see DEPLOYMENT_GUIDE.md"
else
    echo "❌ Push failed. Please check your GitHub repository URL and try again."
    exit 1
fi


