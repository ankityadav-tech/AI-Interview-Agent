# AI-Interview-Agent

# InterviewIQ.AI 🎯

InterviewIQ.AI is an AI-powered interview preparation platform that helps users practice technical and HR interviews through AI-generated questions, voice-based interaction, resume analysis, performance evaluation, and detailed interview reports.

The platform provides a complete interview workflow from setup to final performance analysis.

---

## 🚀 Features

### 🔐 Authentication
- User authentication using Google/Firebase authentication
- Secure backend authentication using JWT
- Protected API routes
- Cookie-based authentication
- User-specific interview history

### 📄 Resume Analysis
- Upload your resume before starting an interview
- Extract resume content for interview preparation
- AI can use resume information to generate relevant questions

### 🤖 AI Interview
- AI-generated interview questions
- Supports:
  - Technical Interviews
  - HR Interviews
- Questions based on:
  - Job role
  - Experience
  - Skills
  - Projects
  - Resume

### 🎤 Voice Interview
- Speech recognition for answering questions
- AI voice interaction using browser Speech Synthesis
- Microphone on/off control
- AI-generated questions are spoken during the interview
- Automatic question timing

### 📊 AI Performance Analysis
After completing an interview, the application evaluates:

- Overall Score
- Confidence
- Communication
- Correctness
- Question-wise performance
- AI feedback

### 📈 Performance Report
The final report provides:

- Overall interview score
- Performance trend
- Skill analysis
- Question-wise scores
- AI feedback
- Improvement suggestions

### 📚 Interview History
Users can view their previous interviews including:

- Job role
- Experience
- Interview mode
- Score
- Interview status
- Interview date

### 💳 Credit System
The application uses an interview credit system.

- New users receive **100 credits**
- One interview uses **50 credits**
- Users can purchase additional credits

### 💰 Razorpay Payments
Integrated Razorpay for purchasing additional interview credits.

Available plans include:

| Plan | Price | Credits |
|------|------:|--------:|
| Free | ₹0 | 100 |
| Starter Pack | ₹100 | 150 |
| Pro Pack | ₹500 | 650 |

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- React Router
- Redux
- Axios
- Tailwind CSS
- Motion
- React Icons
- Recharts
- jsPDF
- jsPDF AutoTable

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- Multer
- Axios
- PDF.js

## AI

- OpenRouter API
- OpenAI GPT-4o-mini

## Authentication

- Firebase / Google Authentication
- JWT-based backend authentication

## Payment

- Razorpay

---

# 📁 Project Structure

```text
AI InterviewQ/
│
├── Backend/
│   │
│   ├── config/
│   │   └── connectDb.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── interview.controller.js
│   │   ├── payment.controller.js
│   │   └── user.controller.js
│   │
│   ├── middlewares/
│   │   └── isAuth.js
│   │
│   ├── models/
│   │   ├── interview.model.js
│   │   ├── payment.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── interview.route.js
│   │   ├── payment.route.js
│   │   └── user.route.js
│   │
│   ├── services/
│   │   └── razorpay.service.js
│   │
│   ├── uploads/
│   │
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │
│   │   ├── pages/
│   │   │
│   │   ├── redux/
│   │   │
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
