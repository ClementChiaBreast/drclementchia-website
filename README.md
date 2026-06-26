# Dr Clement Chia Website

Next.js website for Dr Clement Chia, focused on breast conservation through surgery, education, research and innovation.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Contact form email

The contact form sends enquiries through Resend. The visitor's submitted email address is set as the email `replyTo` address. Recipient and sender addresses are read only on the server and are not exposed in the frontend code.

Create `.env.local` with:

```dotenv
CONTACT_TO_EMAIL=clement.chia@ntu.edu.sg
CONTACT_FROM_EMAIL=website@drclementchia.com
RESEND_API_KEY=...
```

`CONTACT_FROM_EMAIL` must use a domain verified in Resend. Verify `drclementchia.com` in the Resend dashboard before using `website@drclementchia.com` or `contact@drclementchia.com`. Never commit the real `RESEND_API_KEY`.

## Vercel environment variables

In Vercel, open the project and go to **Settings → Environment Variables**. Add these variables for Production and any Preview environments that should send email:

```dotenv
CONTACT_TO_EMAIL=clement.chia@ntu.edu.sg
CONTACT_FROM_EMAIL=website@drclementchia.com
RESEND_API_KEY=...
```

Redeploy the website after adding or changing environment variables. The contact form will show a temporary-unavailable message if its email configuration is absent or invalid.

The form is for general enquiries and collaboration. It is not an appointment channel and must not be used for urgent medical concerns, confidential clinical information or personal medical advice.

## Production checks

```bash
npm run lint
npm run typecheck
npm run build
```
