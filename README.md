# Premium Developer Portfolio — React + Django

A premium dark, responsive developer portfolio with animated sections, project cards, skills, resume download slot, GitHub link, and a Django REST contact API.

## Stack
- Frontend: React, Vite, Framer Motion, Lucide React
- Backend: Django, Django REST Framework, django-cors-headers, SQLite

## Windows 11 + VS Code setup

### 1. Install prerequisites
Install Python 3.13 (or a compatible Python 3 version), Node.js LTS, and VS Code.
In VS Code, open this project folder.

### 2. Start Django backend
Open a VS Code terminal (Terminal → New Terminal), then run:

```powershell
cd backend
py -3.13 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

If PowerShell blocks activation, use Command Prompt in VS Code instead:
```bat
.venv\Scripts\activate.bat
```
Keep this terminal running at `http://127.0.0.1:8000`.

### 3. Start React frontend
Open a second VS Code terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

### 4. Add your resume
Put your PDF resume at:
`frontend/public/resume.pdf`
The “Download Resume” button points to that file. Replace the placeholder with your real PDF.

### 5. Personalize your details
- Edit the profile intro and project cards in `frontend/src/App.jsx`.
- Update your GitHub URL in the same file if needed.
- Add your LinkedIn URL and email in the Contact section; placeholders are intentionally not fabricated.
- The Django contact API stores submitted messages in the local SQLite database.

## API
- `GET /api/health/` — backend health check
- `POST /api/contact/` — body: `{"name":"...","email":"...","message":"..."}`

## Before deployment
This is a local-development starter. Before making it public, configure production `DEBUG=False`, a strong secret key from environment variables, `ALLOWED_HOSTS`, HTTPS, a production database, spam/rate limiting for contact submissions, and proper frontend/backend deployment URLs. Do not publish Django's development server as production hosting.
