# 📚 Book Finder – AI-Powered Book Recommendation App

A full-stack web application that recommends books based on a theme or idea using AI.  
Users can type a prompt like `"romantic novels"` or `"books about dragons"` and get personalized suggestions.

---

##  Live Link : (https://book-finder-sable-two.vercel.app/)

## 🚀 Features

- 🔍 Search for books using natural language (e.g., "romantic classics", "space adventure")
- ⚙️ Flask backend processes the request using a mocked LLM (or real API)
- ⚡ React frontend displays clean, responsive book cards
- 🧩 Easy to switch from mock to real LLM (OpenAI or Hugging Face)

---

## 🧠 Tech Stack

**Frontend:**

- React + Vite
- Axios
- Tailwind CSS _(optional)_

**Backend:**

- Python + Flask
- RESTful API (`/api/books`)
- CORS enabled

---

## ⚙️ How to Run Locally

### 🐍 Backend (Flask)

```
  cd backend
  python -m venv venv
  source venv/bin/activate  # or venv\\Scripts\\activate on Windows
  pip install -r requirements.txt
  python app.py

  Runs on: http://localhost:5000

⚛️ Frontend (React)
   cd frontend
   npm install
   npm run dev
   Runs on: http://localhost:5173

🔁 Example Prompt & Output
Prompt: fantasy books with dragons and magic

Response:

[
  {
    "title": "Eragon",
    "summary": "A farm boy discovers a dragon egg that changes his destiny.",
    "genre": "Fantasy"
  },
  {
    "title": "The Hobbit",
    "summary": "Bilbo Baggins goes on a quest to reclaim treasure from a dragon.",
    "genre": "Fantasy"
  }
]

📝 Notes

  LLM is mocked right now for testing purposes.

  Replace mistral_utils.py with OpenAI/HuggingFace integration if needed.

  CORS is enabled on backend for frontend connection.

  API key (if added) should be stored in .env.

🌐 Deployment Tips
   Backend (Render):

   Create a web service

   Build command: pip install -r requirements.txt

   Start command: python app.py

   frontend (Vercel/Netlify):

   Upload the frontend/ folder or connect to GitHub

   Update API URL from localhost to your Render URL

✅ Submission Checklist
   Deployed backend (Render)

   Deployed frontend (Vercel/Netlify)

   GitHub repo with README

   ChatGPT conversation link

   Video demo explaining your app


👨‍💻 Author
Aarush Goel
Full Stack Developer


```
