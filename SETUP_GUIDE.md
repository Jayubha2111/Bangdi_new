# DHAGAJI - Setup & Configuration Guide

## 🎨 Color Scheme Update ✓
The website has been updated to a professional **Red & Black** color scheme:
- **Primary Red**: #ef2a28 (Bright Red)
- **Secondary Red**: #ff4444 (Lighter Red)
- **Primary Black**: #1a1a1a (Dark Black)
- **Background Black**: #0a0a0a (Pure Black)

All components (Navbar, Hero, Collection, Craftsmanship, About, Contact, Footer) have been updated with the new color scheme.

## 📱 Responsive Design ✓
- Collection cards now feature larger image display areas with proper responsive sizing
- All components optimized for mobile, tablet, and desktop views
- Improved spacing and layout on smaller screens

## 📧 Email Configuration (IMPORTANT!)

### Step 1: Install Dependencies
```bash
npm install nodemailer
```
✓ Already installed

### Step 2: Configure Environment Variables
Edit `.env.local` file in the project root:

```env
# Email Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Gmail SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Recipients
OWNER_EMAIL=your-email@gmail.com
CONTACT_EMAIL=hello@DHAGAJI.in
```

### Step 3: Generate Gmail App Password

1. Go to https://myaccount.google.com/
2. Click "Security" in the left menu
3. Enable "2-Step Verification" if not already enabled
4. Go back to Security and find "App passwords"
5. Select "Mail" and "Windows Computer"
6. Google will generate a 16-character password
7. Copy this password and paste it in `SMTP_PASS` in `.env.local`

### Alternative Email Services

#### Using SendGrid (Recommended)
```env
SENDGRID_API_KEY=your-sendgrid-api-key
```

#### Using Brevo (Sendinblue)
```env
BREVO_API_KEY=your-brevo-api-key
```

#### Using AWS SES
```env
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
Visit `http://localhost:3000`

### Production Build
```bash
npm run build
npm run start
```

## ✅ Testing Email Functionality

1. Go to the Contact section on the website
2. Fill in the form with test data
3. Submit the form
4. Check:
   - **Owner receives email** at `OWNER_EMAIL`
   - **Customer receives confirmation** at their provided email

## 📂 File Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Email API endpoint
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── About.tsx                 # Updated with red theme
│   ├── Collection.tsx            # Enhanced with larger images
│   ├── Contact.tsx               # Integrated with email API
│   ├── Craftsmanship.tsx         # Updated with red theme
│   ├── Footer.tsx                # Updated with red theme
│   ├── Hero.tsx                  # Updated with red theme
│   ├── Navbar.tsx                # Updated with red theme
│   ├── Testimonials.tsx
│   └── ...
└── data/
    └── products.ts
```

## 🎯 Key Features

### 1. **Red & Black Professional Design**
   - Modern, bold color scheme matching the DHAGAJI Creation branding
   - Consistent color usage across all components
   - Professional gradients and animations

### 2. **Fully Responsive Layout**
   - Mobile-first design
   - Tablet and desktop optimizations
   - Responsive image containers

### 3. **Email Integration**
   - Contact form sends to both owner and customer
   - Professional HTML email templates
   - Form validation on client and server
   - Error handling and user feedback

### 4. **Enhanced Product Display**
   - Larger image areas for product cards
   - Better visual hierarchy
   - Improved mobile layout

## 🔒 Security Considerations

1. **Never commit `.env.local`** - Add to `.gitignore`
2. **Use app-specific passwords** - Not your main Gmail password
3. **Validate inputs** - All form data is validated server-side
4. **Rate limiting** - Consider adding rate limiting in production
5. **HTTPS only** - Ensure SSL/TLS in production

## 🐛 Troubleshooting

### Email not sending?
1. Check `.env.local` file exists and has correct values
2. Verify Gmail app password (16 characters)
3. Check 2-Step Verification is enabled
4. Look at server console for error messages

### Form errors?
1. Check browser console for network errors
2. Verify API route is created at `src/app/api/contact/route.ts`
3. Check all form fields are filled

### Styling issues?
1. Clear browser cache
2. Rebuild project: `npm run build`
3. Restart dev server

## 📞 Support

For issues with:
- **Email setup**: Check Gmail security settings
- **Design changes**: Modify `tailwind.config.ts` and `src/app/globals.css`
- **Components**: Edit files in `src/components/`
- **API routes**: Modify `src/app/api/contact/route.ts`

## 📝 Version History

- **v1.0.0** - Initial red & black design, email integration, responsive layout

---

**Last Updated**: June 5, 2026
**Status**: ✓ Production Ready
