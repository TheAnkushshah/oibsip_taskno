# Next Auth v5 - Advanced Guide (2024)

![image]((https://i.ytimg.com/vi/1MTyCvS05V4/maxresdefault.jpg)](https://i.ytimg.com/vi/1MTyCvS05V4/maxresdefault.jpg))

This is a repository for Next Auth v5 - Advanced Guide (2024)

Note - If you want to test the application first follow these steps<br>
1 - Login with this email on google - Email (codetesterteam@gmail.com) For Password (Connect me through any social media i will provide you!)<br>
2 - Now you can access all features like email verification etc.<br>
3 - You can only send any type of email like password reset, confirmation email etc. only on codetesterteam@gmail.com<br>
4 - Again pointing out that any action that requires email interaction can only work with codetesterteam@gmail.com<br>
5 - Otherwise for other purposes you can use any email address to test the application<br>
Thank You<br>
<br>
-----If you're wondering why can't we use our custom email for deep email interactions is beacuse of the tech we used in the project "Resend" It is a software which allows you to send emails on any cutsom email only if you connect a domain with it otherwise a Big NO, So as we had used it without the domain So, we can only send emails i mean can do deep email interactions with the email we had registered on Resend which is - codetesterteam@gmail.com-------

Key Features:
- 🔐 Next-auth v5 (Auth.js)
- 🚀 Next.js 14 with server actions
- 🔑 Credentials Provider
- 🌐 OAuth Provider (Social login with Google & GitHub)
- 🔒 Forgot password functionality
- ✉️ Email verification
- 📱 Two factor verification
- 👥 User roles (Admin & User)
- 🔓 Login component (Opens in redirect or modal)
- 📝 Register component
- 🤔 Forgot password component
- ✅ Verification component
- ⚠️ Error component
- 🔘 Login button
- 🚪 Logout button
- 🚧 Role Gate
- 🔍 Exploring next.js middleware
- 📈 Extending & Exploring next-auth session
- 🔄 Exploring next-auth callbacks
- 👤 useCurrentUser hook
- 🛂 useRole hook
- 🧑 currentUser utility
- 👮 currentRole utility
- 🖥️ Example with server component
- 💻 Example with client component
- 👑 Render content for admins using RoleGate component
- 🛡️ Protect API Routes for admins only
- 🔐 Protect Server Actions for admins only
- 📧 Change email with new verification in Settings page
- 🔑 Change password with old password confirmation in Settings page
- 🔔 Enable/disable two-factor auth in Settings page
- 🔄 Change user role in Settings page (for development purposes only)

### Prerequisites

**Node version 18.7.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next-auth-v5-advanced-guide.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
DIRECT_URL=

AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=
```

### Setup Prisma
```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
