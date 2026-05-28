# Kiss Budgeting — Support Site

A clean, minimal support page for the Kiss Budgeting iOS app, ready to deploy on GitHub Pages.

---

## File Structure

```
kiss-budgeting-support/
├── index.html   ← All page content and structure
├── styles.css   ← All styling and responsive design
├── script.js    ← Mobile nav + FAQ accordion behaviour
└── README.md    ← This file
```

---

## Quick Customisation Checklist

Open `index.html` and search for these placeholders:

| Placeholder | Where to look | What to replace with |
|---|---|---|
| `APP_NAME` | `<title>`, nav logo, hero `<h1>`, footer | Your app name |
| `APP_DESCRIPTION` | Hero paragraph | Your 1–2 line tagline |
| `BUG_REPORT_FORM_LINK` | First `.support-card` `href` | Your Google Form URL |
| `USER_FEEDBACK_FORM_LINK` | Second `.support-card` `href` | Your Google Form URL |
| `SUPPORT_EMAIL` | Contact section `<a href="mailto:…">` | Your support email |
| `PRIVACY_POLICY_LINK` | Privacy section button `href` | Your privacy policy URL |
| Copyright year/name | Footer `.footer-copy` | Your details |

To retheme colours, edit the CSS variables at the top of `styles.css` under `:root`.

---

## Deploy to GitHub Pages

### 1. Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in.
2. Click **New repository**.
3. Name it — e.g. `kiss-budgeting-support` or `your-username.github.io`.
4. Set it to **Public**.
5. Click **Create repository**.

### 2. Upload your files

**Option A — GitHub web interface (simplest):**
1. Inside your new repository, click **Add file → Upload files**.
2. Drag and drop `index.html`, `styles.css`, `script.js`, and `README.md`.
3. Click **Commit changes**.

**Option B — Git command line:**
```bash
git init
git add .
git commit -m "Initial support site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. In your repository, go to **Settings → Pages** (left sidebar).
2. Under **Source**, select **Deploy from a branch**.
3. Set the branch to **main** and folder to **/ (root)**.
4. Click **Save**.

### 4. Access your live site

GitHub will display your URL — usually:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

It may take 1–2 minutes for the site to go live on the first deploy.

---

## Making Updates Later

1. Edit files locally (or directly on GitHub using the pencil icon).
2. Commit and push (or save on GitHub).
3. GitHub Pages redeploys automatically — changes are live within ~30 seconds.

---

## Custom Domain (optional)

If you own a domain (e.g. `support.kissbudgeting.app`):
1. In **Settings → Pages**, enter your custom domain.
2. Add a `CNAME` DNS record pointing to `YOUR_USERNAME.github.io` with your domain registrar.
3. GitHub will handle HTTPS automatically via Let's Encrypt.
