# Raghav Temple Website

A responsive, modern website for Raghav Temple featuring all the requested functionality including Poojari profiles, donation system, event management, and community features.

## Features

### 🏛️ Core Features
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Poojari Profile**: Dedicated section showcasing temple priest information
- **Event Management**: Display temple events and celebrations with photos
- **Temple Members**: Committee member profiles and information
- **Donation System**: Multiple payment options including QR code and UPI
- **Contact Form**: Interactive contact form with validation

### 💰 Donation Features
- **QR Code Payment**: Scan-to-pay functionality
- **UPI Integration**: Direct UPI payment links
- **Bank Transfer**: Complete banking details
- **WhatsApp Sharing**: Share donation receipts on WhatsApp
- **Payment Tracking**: Visual feedback for donations

### 📱 Technical Features
- **Google Ads Ready**: Pre-configured ad spaces
- **Local Promotion**: Image and video content sections
- **SEO Optimized**: Meta tags and structured data
- **Performance Optimized**: Lazy loading and efficient code
- **PWA Ready**: Service worker for offline capabilities
- **Free Tier Compatible**: Optimized for static hosting

## File Structure

```
RaghavTemple/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and design system
├── script.js           # JavaScript functionality
├── sw.js              # Service worker for PWA
└── README.md          # This file
```

## Setup Instructions

### 1. Basic Setup
1. Download all files to your web server or local development environment
2. Open `index.html` in a web browser to view the website
3. Customize content by editing the HTML file

### 2. Customization

#### Update Temple Information
- Edit contact details in the contact section
- Update temple address and timings
- Modify committee member information
- Change Poojari profile details

#### Payment Configuration
1. **QR Code**: Replace the QR code image with your actual temple QR code
2. **UPI ID**: Update the UPI ID in `script.js` (line with `raghavtemple@paytm`)
3. **Bank Details**: Update bank information in the `openBankTransfer()` function

#### Google Ads Integration
1. Sign up for Google AdSense
2. Replace the ad placeholder with your AdSense code
3. Add your publisher ID to the script section

### 3. Hosting Options (Free Tier Compatible)

#### GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://username.github.io/repository-name`

#### Netlify
1. Drag and drop the project folder to Netlify
2. Your site will be automatically deployed
3. Custom domain can be added later

#### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy with zero configuration
3. Automatic HTTPS and CDN included

## Customization Guide

### Colors and Branding
The website uses CSS custom properties for easy theming. Edit the `:root` section in `styles.css`:

```css
:root {
    --primary-color: #d97706;    /* Temple orange */
    --secondary-color: #059669;  /* Green accent */
    --text-primary: #1f2937;     /* Dark text */
    /* ... other variables */
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add any JavaScript functionality in `script.js`

### Image Optimization
- Use WebP format for better compression
- Optimize images before uploading
- Use appropriate sizes for different screen resolutions

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy Loading**: Images load only when needed
- **CSS Grid/Flexbox**: Modern layout techniques
- **Minimal Dependencies**: Only Google Fonts and Font Awesome
- **Optimized Images**: Compressed and responsive images
- **Efficient JavaScript**: Vanilla JS with modern features

## SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Alt text for all images
- Structured data markup ready
- Mobile-first responsive design

## Security Considerations

- No sensitive data in client-side code
- HTTPS recommended for production
- Input validation on contact forms
- XSS protection through proper escaping

## Maintenance

### Regular Updates
- Update event information
- Refresh member profiles
- Update donation amounts and goals
- Add new photos and content

### Performance Monitoring
- Monitor Core Web Vitals
- Check mobile performance
- Optimize images regularly
- Update dependencies as needed

## Support

For technical support or customization requests, please contact the development team.

## License

This project is created for Raghav Temple. Please ensure you have the right to use all images and content.

---

**Built with ❤️ for the Raghav Temple community**

# raghav
# raghav
