This is an opensource tool to (legally) take down scam domains. It automates the boring abuse report process for you. Licensed under GNU GPLv3.

Created by 
[@richardvanorton](https://www.github.com/richardvanorton) and
[@oliviavanorton](https://www.github.com/oliviavanorton)

![image](https://github.com/user-attachments/assets/679ef9bc-0f36-4ab5-b941-fd8050bef6ed)
Website: https://scammerlocker.vercel.app/

<b>Here's how it works:-</b> <br>
The tool does a WHOIS lookup to get the domain registrar's abuse contact email. Then it uses Groq's llama3-70b-8192 model to use the context and target URL provided by the user to generate an abuse report email with a matching subject. Using Mailgun, it emails the domain provider at their designated abuse contact.

The tool works for any illegal websites, including but not limited to investment scams, crypto pump, and dump, phishing pages, animal abuse, etc. All domain registrars, hosting providers, and TLDs are legally required to take action when they receive an abuse report. Typically, it takes several days to a few weeks to take the website down.

## Self-hosting Instructions

1. Run the following
```bash
npm i
npm run dev
```

2. Add the following to your .env
```bash
GROQ_API_KEY=''
MAILGUN_API_KEY=''
FULL_NAME=''
HCAPTCHA_SECRET=''
FROM_SENDER=''
FROM_DOMAIN=''
PROXY_PASS=''
```
[step 3 no longer required] <br>
3. Remember to set the proxy port, username and host IP in app/actions.ts
```bash
Proxy services:
IProyal
Oxylabs
Webshare
Free proxy services from Google
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
