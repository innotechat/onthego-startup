# OnTheGo Data Room & Document Guide

This guide outlines where your current pitch materials are stored and how to set up a secure, professional Virtual Data Room (VDR) for investors.

## 1. Local Document Locations
Your core pitch documents are currently authored in Markdown for easy editing and versioning:

- **Executive Summary:** `pitch/executive_summary.md` (Updated with contact info)
- **Pitch Deck Narrative:** `pitch/pitch_deck_narrative.md` (Slide-by-slide script)
- **Business Model:** `docs/business_model.md` (Strategic overview)

## 2. Converting to Professional Formats
To send these to investors, you should:
1.  **Export to PDF:** Use a tool (or VS Code extension like "Markdown PDF") to export these `.md` files into professional PDFs.
2.  **Branding:** Ensure the PDFs include the OnTheGo logo and consistent typography (Inter/Outfit).

## 3. Creating a Secure "Links" Strategy
Since you asked which link is secure: **Markdown files on a local drive are not yet a secure public link.** You need a hosting solution.

### Recommended "Secure Link" Setup (The VDR):
1.  **Tier 1 (Free & Fast):** 
    - Upload PDFs to a **Google Drive** or **OneDrive** folder.
    - Set access to "Anyone with the link can view".
    - **Security Tip:** Use "Restricted" and invite specific investor emails manually for higher security.
2.  **Tier 2 (Professional - Recommended):** 
    - Use **DocSend** or **BriefLink**.
    - These allow you to see *who* opened the document, *how long* they spent on each page, and you can disable downloading/passcode protect the link.
3.  **Tier 3 (Custom - Advanced):** 
    - Build a password-protected page on your website that renders these Markdown files from a secure bucket (e.g., Supabase storage or AWS S3).

## 4. Current UI Integration
The "Request Data Room" button on your landing page now directs investors to:
- **Email:** `innotechat@gmail.com`
- **WhatsApp:** `+91 85338 99999`

**Action Item:** Once you have created your Drive or DocSend link, you can replace the `mailto:` or `wa.me/` links in `App.jsx` with your direct secure URL if you prefer to bypass the manual request step.

---
**OnTheGo Mobility** | *Investor Relations v1.0*
