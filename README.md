# Node.js + Express Backend Boilerplate

A **production-ready, scalable, and reusable backend boilerplate** built with **Node.js, Express, and MongoDB**, following industry best practices.

This repository is intended to be used as a **starter template** so you never have to set up a backend from scratch again.

---

## ✨ Features

- ✅ Clean & scalable folder structure  
- ✅ Express app & server separation  
- ✅ MongoDB connection (Mongoose)  
- ✅ Centralized error handling  
- ✅ Async error handler (no try/catch everywhere)  
- ✅ Security best practices:
  - Helmet (secure  headers)
  - Rate limiting (environment-based)
  - CORS (dev open, prod restricted)
- ✅ Request logging (Morgan)
- ✅ Environment-based configuration
- ✅ Ready for authentication, validation, and scaling

---

## 🧱 Tech Stack

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT (ready to use)  
- Helmet  
- Express Rate Limit  
- CORS  
- Morgan  
- Nodemon  

---

## 📁 Folder Structure

```bash
backend/
│
├── src/
│   ├── app.js                 # Express app configuration
│   ├── server.js              # Server entry point
│   │
│   ├── config/
│   │   └── db.js               # Database connection
│   │
│   ├── routes/
│   │   └── index.js            # Central route loader
│   │
│   ├── controllers/            # Request handlers
│   ├── services/               # Business logic
│   ├── models/                 # Database models
│   │
│   ├── middlewares/
│   │   ├── error-middleware.js
│   │   ├── helmet-middleware.js
│   │   ├── rate-limit-middleware.js
│   │   └── cors-middleware.js
│   │
│   ├── utils/
│   │   ├── asyncHandler.js
│   │   ├── ApiError.js
│   │   └── ApiResponse.js
│   │
│   └── index.js
│
├── .env.example
├── .gitignore
├── nodemon.json
├── package.json
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
bash

git clone s://github.com/AleemAhmad3/backend.git
cd backend
2️⃣ Install dependencies
bash

npm install
3️⃣ Setup environment variables
Create a .env file using the example:

bash

cp .env.example .env
Update values as needed:

env

PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/app
CORS_ORIGIN=://localhost:3000
JWT_SECRET=your_secret_here
4️⃣ Run the project
Development

bash

npm run dev
Production

bash

npm start
🔐 Security Configuration
Helmet
Adds secure  headers

Protects against common web vulnerabilities

Rate Limiting
Development: 1000 requests / 15 minutes

Production: 100 requests / 15 minutes

Configured in:

bash

src/middlewares/rate-limit-middleware.js
CORS
Development: Allows all origins

Production: Allows only specified origins via CORS_ORIGIN

Configured in:

bash

src/middlewares/cors-middleware.js
🧠 Environment-based Behavior
Feature	Development	Production
Logging	Enabled	Disabled
Rate limit	Relaxed	Strict
Error stack	Visible	Hidden
CORS	Open	Restricted

🛠 Scripts
json

{
  "dev": "cross-env NODE_ENV=development nodemon src/server.js",
  "start": "cross-env NODE_ENV=production node src/server.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
cross-env is used to ensure environment variables work consistently across all operating systems.

🧪 Health Check
Once running, test the API:



GET /api
🚀 How to Use This as a Template
Push this repo to GitHub

Go to Settings → Template Repository

Enable Template Repository

Click Use this template for new projects

🔮 Ready for Extension
You can easily add:

Authentication (JWT)

Role-based access control

Request validation (Zod / Joi)

API versioning

Docker & deployment

TypeScript

📌 Best Practices Followed
Separation of concerns

Centralized configuration

Middleware-based architecture

Production-safe defaults

Developer-friendly setup

📄 License
ISC License

🤝 Contributing
Feel free to fork, improve, and submit pull requests.

⭐ Final Note
This boilerplate is designed to help you:

Build faster

Avoid repetitive setup

Follow industry standards from day one

If you find this useful, ⭐ the repo!