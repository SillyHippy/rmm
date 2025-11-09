# Contact Form Setup for Cloudflare Pages

Since you're deploying to **Cloudflare Pages (static site)**, you need a **serverless form solution**. Here are your best FREE options:

---

## 🎯 RECOMMENDED: Cloudflare Pages Functions (Built-in & FREE)

Cloudflare Pages has built-in serverless functions that are PERFECT for handling forms!

### Setup Steps:

1. **Create a functions folder** in your project:
```powershell
New-Item -Path "functions" -ItemType Directory
New-Item -Path "functions\api" -ItemType Directory
```

2. **Create `functions/api/contact.ts`**:
```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  county: string;
  message: string;
}

export async function onRequestPost(context: any) {
  try {
    const formData: ContactFormData = await context.request.json();
    
    // Send email using Cloudflare Email Workers or MailChannels
    const emailContent = `
      New Contact Form Submission
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Service: ${formData.service}
      County: ${formData.county}
      
      Message:
      ${formData.message}
    `;
    
    // Using MailChannels (FREE with Cloudflare)
    await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: 'rmmsop@gmail.com', name: 'RMM Service' }],
        }],
        from: {
          email: 'noreply@rmmsop.com',
          name: 'RMMSOP Website',
        },
        subject: 'New Contact Form Submission',
        content: [{
          type: 'text/plain',
          value: emailContent,
        }],
      }),
    });
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
```

3. **Update your contact form** to submit to `/api/contact`

**PROS:** 
- ✅ FREE on Cloudflare Pages
- ✅ No external dependencies
- ✅ Fast and secure
- ✅ Unlimited requests (within CF limits)

---

## Option 2: Formspree (Easiest - 50 submissions/month FREE)

### Setup:
1. Sign up at **https://formspree.io**
2. Create a new form
3. Get your form endpoint: `https://formspree.io/f/YOUR_FORM_ID`

### Update Contact Form:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**PROS:**
- ✅ Easiest setup (2 minutes)
- ✅ 50 submissions/month FREE
- ✅ Email notifications included
- ✅ Spam protection

**CONS:**
- ❌ 50 submission limit on free plan
- ❌ External dependency

---

## Option 3: Web3Forms (100 submissions/month FREE)

### Setup:
1. Go to **https://web3forms.com**
2. Get FREE Access Key
3. Add to your form:

```tsx
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
  <input type="hidden" name="subject" value="New Contact from RMMSOP" />
  <input type="hidden" name="from_name" value="RMMSOP Website" />
  {/* Your existing form fields */}
</form>
```

**PROS:**
- ✅ 100 submissions/month FREE
- ✅ No signup required
- ✅ Email notifications
- ✅ File uploads supported

---

## Option 4: Netlify Forms (If you switch to Netlify)

If you ever deploy to Netlify instead of Cloudflare:

```tsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* Your form fields */}
</form>
```

**PROS:**
- ✅ 100 submissions/month FREE
- ✅ Built-in spam filtering
- ✅ Netlify dashboard

---

## ⭐ MY RECOMMENDATION FOR YOU:

### Use **Cloudflare Pages Functions** + **MailChannels** (100% FREE, unlimited)

This is the BEST solution because:
- ✅ FREE forever
- ✅ No submission limits
- ✅ Fully integrated with Cloudflare
- ✅ Professional and reliable
- ✅ You control everything

### Quick Setup:

1. **Create the files structure:**
```
rmm/
├── functions/
│   └── api/
│       └── contact.ts
```

2. **Use MailChannels (FREE email API for Cloudflare)**
   - No signup needed
   - Works automatically with Cloudflare Pages
   - Unlimited emails

3. **Update your contact form** to use JavaScript fetch:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  
  if (response.ok) {
    alert('Thank you! We will contact you soon.');
  }
};
```

---

## Alternative: Email Mailto Link (Simplest)

If you want the ABSOLUTE simplest solution (no backend):

```tsx
<a href="mailto:rmmsop@gmail.com?subject=Website Inquiry&body=Name:%0D%0APhone:%0D%0AMessage:%0D%0A" 
   className="bg-blue-600 text-white px-8 py-4 rounded-lg">
  Email Us Directly
</a>
```

This opens the user's email client. Simple but not as professional.

---

## 📊 Comparison:

| Solution | FREE Limit | Setup Time | Best For |
|----------|-----------|------------|----------|
| **CF Pages Functions** | ♾️ Unlimited | 15 min | Best overall |
| Formspree | 50/month | 2 min | Quick start |
| Web3Forms | 100/month | 5 min | No signup |
| Mailto Link | ♾️ Unlimited | 1 min | Ultra simple |

---

## 🚀 What I'll Set Up for You:

I can configure ANY of these options. Which would you prefer?

1. **Cloudflare Pages Functions** (recommended - unlimited FREE)
2. **Formspree** (easiest - just need your account)
3. **Web3Forms** (middle ground)
4. **Simple mailto** (backup option)

**For Cloudflare Pages, I recommend Option 1 (CF Functions)**

Let me know which you'd like, and I'll set it up! 

---

## Current Form Status:

Your contact form is at: `app/contact/page.tsx`

Currently it's a static HTML form that needs backend connection. Once you choose an option, I'll update it to work perfectly!
