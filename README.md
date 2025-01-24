

# 🌊 Everflow  

**Discover the joy of journaling, reimagined.**  
Everflow is a modern journaling app designed to help you start journaling effortlessly and grow your practice over time. With seamless offline access, AI-assisted prompts, and voice-to-text capabilities, Everflow makes capturing your thoughts intuitive and accessible.  

---

## ✨ Features  

- **Minimalistic Design**: Focus on your thoughts without distractions.  
- **Rich Text Editing**: Powered by [Tiptap](https://tiptap.dev) for smooth, customizable writing experiences.  
- **Voice-to-Text**: Dictate your journal entries with ease.  
- **AI-Assisted Prompts**: Get inspired with personalized suggestions to get started.  
- **Offline Access**: Write anytime, anywhere—your thoughts are always safe.  
- **Insights and Analytics**: Reflect on your journey with sentiment analysis, word clouds, and trends.  
- **Cross-Platform Sync**: Seamlessly switch between web and mobile apps.  

---

## 🚀 Getting Started  

Follow these steps to get Everflow running locally:  

### Prerequisites  
1. Node.js (>= 16.x)  
2. Firebase Project (set up Firestore and Authentication)  
3. [Tiptap](https://tiptap.dev) extensions (installed as dependencies)  

### Installation  

1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/yourusername/everflow.git  
   cd everflow  
   ```  

2. **Install Dependencies**  
   ```bash  
   npm install  
   ```  

3. **Configure Firebase**  
   - Add your Firebase project configuration in `.env.local`:  
     ```bash  
     NEXT_PUBLIC_FIREBASE_API_KEY=<your-api-key>  
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-auth-domain>  
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-project-id>  
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>  
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>  
     NEXT_PUBLIC_FIREBASE_APP_ID=<your-app-id>  
     ```  

4. **Start the Development Server**  
   ```bash  
   npm run dev  
   ```  
   Open [http://localhost:3000](http://localhost:3000) to view the app.  

---

## 🛠️ Tech Stack  

- **Frontend**: [Next.js](https://nextjs.org), [Tiptap](https://tiptap.dev), [Tailwind CSS](https://tailwindcss.com)  
- **Backend**: [Firebase Firestore](https://firebase.google.com/products/firestore), Firebase Authentication  
- **AI Integration**: OpenAI API for journaling prompts and sentiment analysis  
- **Deployment**: Vercel  

---

## 🗂️ Project Structure  

```plaintext  
everflow/  
├── src/  
│   ├── app/               # Next.js app directory  
│   ├── components/        # UI components  
│   ├── hooks/             # Custom React hooks  
│   ├── lib/               # Firebase and utility functions  
│   ├── styles/            # Tailwind CSS configuration  
│   └── pages/             # API routes and pages  
├── public/                # Static assets  
├── .env.local             # Environment variables  
├── tailwind.config.js     # Tailwind CSS configuration  
└── README.md              # Project documentation  
```  

---


## 📜 License  

Everflow is licensed under the [MIT License](LICENSE).  

---

## 🤝 Acknowledgments  

Special thanks to the open-source tools and frameworks that power Everflow, including [Tiptap](https://tiptap.dev), [Tailwind CSS](https://tailwindcss.com), and [Firebase](https://firebase.google.com).  

---

Let me know if you’d like to tailor it further!
