This is an opensource tool to (legally) take down scam domains. It automates the boring abuse report process for you.

![image](https://github.com/user-attachments/assets/679ef9bc-0f36-4ab5-b941-fd8050bef6ed)
Website: https://scammerlocker.vercel.app/


## Self-hosting Instructions

Run the following
```bash
npm i
npm run dev
```

Add the following to your .env
```bash
GROQ_API_KEY=''
MAILGUN_API_KEY=''
FULL_NAME=''
HCAPTCHA_SECRET=''
FROM_SENDER=''
FROM_DOMAIN=''
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
