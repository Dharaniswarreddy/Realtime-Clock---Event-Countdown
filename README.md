📘 Realtime Clock & Event Countdown (React)

A modern React application featuring:

⏰ Dynamic realtime clock

📅 Custom event creation

⏳ Live countdown timers

🔔 Automatic alert when countdown ends

💾 Event persistence using localStorage

🎨 Modern, responsive UI with smooth styling

This project demonstrates essential front-end skills such as date manipulation, timers, event handling, form management, state management, and persistent storage.

🚀 Features
✔ Realtime Clock

Displays current time and date, updating every second.

✔ Countdown for Custom Events

Users can create events with a name, date, and time.
Each event displays:

Days remaining

Hours

Minutes

Seconds

✔ Event Completion Alerts

When the countdown reaches zero, the app shows a browser alert.

✔ Automatic Saving with localStorage

All created events are saved locally, so refreshing the page does not delete them.

✔ Clean, Modern UI

Styled with custom CSS for a glassy, sleek, mobile-friendly interface.

📂 Project Structure
src/
│── App.jsx
│── main.jsx
│── index.css
│
├── components/
│   ├── Clock.jsx
│   ├── EventForm.jsx
│   ├── EventList.jsx
│   └── CountdownCard.jsx
│
└── utils/
    └── time.js

🛠️ Technologies Used

React (Vite)

JavaScript (ES6+)

LocalStorage API

CSS3 (modern, responsive design)

📦 Installation & Setup
1️⃣ Clone the project
git clone https://github.com/YOUR_USERNAME/realtime-clock-countdown.git
cd realtime-clock-countdown

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

4️⃣ Open the app

Visit:

http://localhost:5173

🧩 How It Works
🔹 Global Clock

A setInterval updates the now state every second.

🔹 Countdown Logic

Time remaining = eventDate - now
Converted into days/hours/minutes/seconds using a helper function in time.js.

🔹 Event Alerts

When timer reaches 0 → show alert() and mark event as notified.

🔹 localStorage Persistence

Events are automatically:

Loaded on first render

Saved whenever they change

🎨 User Interface Preview (Description)

Elegant dark-glass UI

Soft shadows and transitions

Hover animations on countdown boxes

Responsive layout for mobile devices

📌 Future Enhancements (Optional)

You can extend the app by adding:

Event editing

Event categories

Sound notifications

Light/dark theme switcher

Firebase or backend sync

🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you'd like to modify.

📜 License

This project is licensed under the MIT License — free to use and modify.
