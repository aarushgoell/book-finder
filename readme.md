📚 Book Finder – AI-Powered Book Recommendation App

A full-stack web application that recommends books based on user prompts using an AI/LLM backend. Users can input a theme or idea (e.g., "space adventure", "romantic classics"), and the app responds with 5 personalized book suggestions, including title, summary, and genre.

🚀 Features

✅ User enters any topic or keyword prompt

✅ Flask backend calls a mocked or LLM-powered function

✅ JSON response with 5 recommended books

✅ React frontend displays the books in a clean, responsive UI

✅ Ready to plug in with OpenAI, Hugging Face, or any LLM API

🧠 Tech Stack

Frontend

React + Vite

Axios for HTTP requests

Tailwind CSS (optional) for UI styling

Backend

Python + Flask

CORS enabled for frontend-backend integration

Mocked LLM response or real LLM integration (OpenAI / Hugging Face)

📁 Folder Structure

/book-finder
├── backend
│   ├── app.py                 # Flask API with /api/books endpoint
│   ├── open_Api.py            # Contains get_book_recommendations(prompt)
│   └── requirements.txt

├── frontend
│   ├── src
│   │   ├── App.jsx            # Main app component
│   │   ├── BookForm.jsx       # Input field and Search button
│   │   ├── BookList.jsx       # Displays books as cards
│   │   └── index.css
│   └── vite.config.js

⚙️ How to Run the App

1. Clone the Repository

git clone https://github.com/aarushgoel/book-finder.git
cd book-finder

2. Backend Setup

cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate (Windows)
pip install -r requirements.txt
python app.py

Server runs at http://localhost:5000

3. Frontend Setup

cd frontend
npm install
npm run dev

Frontend runs at http://localhost:5173

🧪 Example Prompt & Output

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
  ... 3 more
]

📝 Notes

If using a mocked LLM, make sure mistral_utils.py returns a JSON-formatted string.

You can replace the mocked function with a real OpenAI or Hugging Face API call.

CORS must be enabled in Flask if frontend and backend are running separately.

Environment variables should store API keys securely if deployed.

🌐 Deployment Tips

Backend (Render)

Create a new web service

Set build command to: pip install -r requirements.txt

Start command: python app.py

Add cors and flask to requirements.txt

Frontend (Vercel or Netlify)

Just drag & drop the frontend folder or connect GitHub repo

Set base API URL to backend deployment URL

🎥 Submission Checklist



🙌 Author

Aarush GoelFull Stack Developer • React • Flask • OpenAI IntegrationGitHub | LinkedIn

