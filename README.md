# 🟣 VibeMate: The Emotion-Aware AI Companion

> An interactive, voice-enabled AI companion that sees how you feel and adapts its personality in real-time.

![Project Status](https://img.shields.io/badge/Status-Active-green)
![Tech Stack](https://img.shields.io/badge/Stack-HTML%20%7C%20JS%20%7C%20Gemini%20API-blue)

## 📖 Overview

**VibeMate** is a single-file web application that brings a digital friend to life. Unlike standard chatbots, VibeMate uses your webcam to detect your facial expressions and adjusts its response style, voice pitch, and UI colors to match your mood.

Powered by **Google Gemini Flash**, it communicates with a casual, supportive personality (slang included!) and uses the Web Speech API to talk back to you.

## ✨ Key Features

* **👀 Emotion Detection:** Uses `face-api.js` to analyze facial expressions via webcam (Happy, Sad, Angry, Neutral).
* **🎨 Adaptive UI:** The interface glows different colors based on your mood (e.g., Yellow for Happy, Blue for Sad, Red for Angry).
* **🗣️ Dynamic Voice Engine:**
    * **Happy?** The voice gets higher and faster.
    * **Sad?** The voice gets lower, slower, and soothing.
* **🧠 Intelligent Conversation:** Powered by Google's Gemini 1.5 Flash model for fast, context-aware responses.
* **🎙️ Hands-Free Mode:** Click the microphone to speak, and the AI speaks back.
* **⚡ Zero-Setup:** The entire application lives in a single `index.html` file.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Glassmorphism & Animations), Vanilla JavaScript.
* **AI Model:** Google Gemini API (`gemini-1.5-flash`).
* **Computer Vision:** `face-api.js` (loaded via CDN).
* **Audio:** Web Speech API (Speech Recognition & Synthesis).

## 🚀 How to Run

### Prerequisites
1.  A modern web browser (Chrome, Edge, or Brave recommended for best Speech API support).
2.  A [Google Gemini API Key](https://aistudio.google.com/app/apikey) (Free tier available).

### Installation
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/vibemate.git](https://github.com/your-username/vibemate.git)
    ```
2.  **Open the file:**
    * Open `index.html` in your code editor.
3.  **Add your API Key:**
    * Locate the line inside the `<script>` tag:
    ```javascript
    const API_KEY = 'YOUR_GEMINI_API_KEY_HERE'; 
    ```
    * Replace the placeholder with your actual key.
4.  **Launch:**
    * **Option A (Recommended):** Use a local server (like "Live Server" in VS Code) to avoid browser security restrictions regarding camera access.
    * **Option B:** Double-click `index.html` to open it in your browser (Camera permissions might be stricter).

## ⚠️ Security Note

**Never commit your real API Key to GitHub.**
If you plan to publish this online, you should implement a backend proxy to hide your key, or use environment variables if hosting on platforms like Vercel/Netlify. For local testing, pasting the key into the HTML is fine, but **do not push that specific change** to a public repo.

## 🎮 How to Use

1.  Click the **"Connect"** button on the overlay.
2.  Allow **Camera** and **Microphone** permissions when prompted.
3.  Look at the camera! The glowing ring will change color based on your expression.
4.  Type a message or click the **🎙️ Mic button** to speak.
5.  Listen to your AI friend respond with a voice that matches the vibe!

## 🔮 Future Improvements

* [ ] Add Long-term memory (Local Storage).
* [ ] Allow user to customize the AI's name and avatar.
* [ ] 3D Avatar integration (using Three.js).
* [ ] Mobile-responsive layout tweaks.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
