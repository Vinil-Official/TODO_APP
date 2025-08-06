# 🚀 Hackathon App – [TODO APP]

This project was developed as a part of a hackathon challenge. It is a fully working mobile application built with scalability, modularity, and clean architecture in mind.

---

## 🧩 Features

- 🔐 User Authentication (Login / Register using Firebase)
- 📄 Dashboard with CRUD operations via Spring Boot + MySQL
- 🎨 Responsive & clean UI design (React Native)
- 📱 APK available for installation
- 🌐 Real-time backend integration
- 📦 Modular design pattern followed (MVVM)

---

## 🛠️ Tech Stack

- **Frontend:** React Native  
- **Backend:** Spring Boot  
- **Database:** MySQL  
- **Authentication:** Firebase Authentication  
- **Design Pattern Used:** MVVM (Model-View-ViewModel)  
- **Tools:** VSCode, Android Studio, Postman, Firebase Console, MySQL Workbench  

---



## 🧠 Architecture Diagram

![Architecture Diagram](./assets/Mobile%20App%20Architecture%20Diagram.png)  
*Make sure to commit and push this image to your repo inside an `assets` folder*

---

## 📹 App Demo – Loom Video

*Record your explanation and walkthrough using Loom and paste the link above*

---

## 🚀 Getting Started

Follow the steps below to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/vinilofficial/hackathon-app.git
cd counter_App-app
 Set Up the Frontend (React Native)
bash
Copy
Edit
cd frontend
npm install
# or
yarn install
Add your Firebase firebaseConfig inside the project.

Run the app:

bash
Copy
Edit
npx react-native run-android
Ensure you have an Android emulator or device connected.
---
3. Set Up the Backend (Spring Boot)
bash
Copy
Edit
cd backend
Update application.properties with your MySQL DB credentials.
---
Run the application:

bash
Copy
Edit
./mvnw spring-boot:run
Make sure MySQL is running and a database schema is created.

📌 Assumptions
Firebase is used only for authentication (login/register).

Spring Boot handles all business logic and CRUD operations.

MySQL is the primary database for storing user tasks/data.

The app is built for Android 9+ devices.

MVVM is used for clean separation of concerns.

English is the default language; layout is Left-To-Right.

✅ Project Structure
scss
Copy
Edit
📦hackathon-app
 ┣ 📂assets
 ┣ 📂frontend (React Native)
 ┃ ┣ 📂components
 ┃ ┣ 📂screens
 ┃ ┣ 📂services
 ┃ ┗ 📜App.js
 ┣ 📂backend (Spring Boot)
 ┃ ┣ 📂controller
 ┃ ┣ 📂model
 ┃ ┣ 📂repository
 ┃ ┗ 📂service
 ┣ 📜README.md
 ┣ 📜package.json
💬 Prompting Disclosure
This project leveraged ChatGPT-4o for:

Code architecture and modularization

UI design best practices

README formatting and documentation guidance

Prompts will be shown during the final interview.

#🧑‍💻 Author
Name: VINIL

Email: Vinilofficial8@gmail.com

🔗 Hackathon Credit
This project is a part of a hackathon run by https://www.katomaran.com
