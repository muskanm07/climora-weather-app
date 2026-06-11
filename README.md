# 🌤️ Climora — Weather Explorer

A full-featured React weather app with a dreamy glassmorphism UI, dynamic video backgrounds, and real-time weather data.

**[Live Demo](https://climora-by-muskan.netlify.app/)** • **[GitHub](https://github.com/muskanm07/climora-weather-app)**

---

## ✨ Features

- 🔍 **City Search** — URL-based search using `useNavigate` + `useSearchParams` so searches are shareable and browser back/forward works correctly
- 📅 **5-Day Forecast** — Powered by OpenWeatherMap Forecast API with async/await, error handling, and loading states
- 🎥 **Dynamic Video Backgrounds** — Dashboard background changes based on live weather conditions
- 💾 **Recent Search History** — Persisted via localStorage, lifted to `App.jsx` for cross-route sharing
- 👤 **Profile Page** — Personalised user profile page
- ℹ️ **About Us Page** — Project info and credits
- 📱 **Fully Responsive** — Mobile-first design, works on all screen sizes
- 🎨 **Glassmorphism UI** — Dreamy brand cyan palette with dark purple gradient

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React.js | Frontend framework |
| Tailwind CSS (v3) | Styling |
| React Router | Multi-page routing |
| OpenWeatherMap API | Weather data |
| Vite | Build tool |
| Vercel | Deployment |

---

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/
│   ├── Home.jsx       # /home - Landing/search page
│   ├── Dashboard.jsx  # /dashboard - Weather display with video bg
│   ├── Profile.jsx    # /profile - User profile
│   └── AboutUs.jsx    # /aboutus - About page
├── App.jsx            # Root component, state lifting, routing
└── main.jsx           # Entry point
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/climora.git

# Install dependencies
cd climora
npm install

# Add your OpenWeatherMap API key
# Create .env file in root:
VITE_WEATHER_API_KEY=your_api_key_here

# Start dev server
npm run dev
```

---

## 🔑 Environment Variables

```
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

Get a free API key at [openweathermap.org](https://openweathermap.org/api)

---

## 👩‍💻 Author

**Muskan Maurya**  
Frontend Developer · React.js · JavaScript  
[LinkedIn](https://linkedin.com/in/your-profile) • [GitHub](https://github.com/your-username)

---

## 📄 License

MIT License
