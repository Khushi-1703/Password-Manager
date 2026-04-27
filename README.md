# 🔐 PassCore — Password Manager

A modern and secure password manager web app built to help users store, manage, and access their credentials in one place.
PassCore keeps your passwords organized, protected, and easy to retrieve with a clean and minimal UI.

---

## 🚀 Features

* 🔒 Securely save passwords and credentials
* 👤 User authentication and personalized vault
* ➕ Add, edit, and delete saved passwords
* 📋 Copy credentials instantly
* 🎨 Clean and responsive UI
* ☁️ Persistent storage with database integration

---

## 🛠️ Tech Stack

### Frontend

* **Next.js**
* **React.js**
* **Tailwind CSS**

### Backend

* **Next.js API Routes / Server Actions**
* **MongoDB**
* **Mongoose**

---

## 📂 Project Structure

```bash
password-manager/
│
├── backend/             # mongodb integration with the frontend
├── src/components/      # Reusable UI components
├── src/                 # frontend        
├── public/              # Static assets
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/password-manager.git
cd password-manager
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Your app will be running at:

```bash
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the backend folder in the root directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string/db name
```

---

## 📸 Core Functionality

### 1. Password Vault

Store credentials such as:

* Website name
* Username / Email
* Password

### 2. Password Management

Users can:

* Add new credentials
* Edit saved credentials
* Delete entries
* Copy passwords instantly

---

## 🔐 Security Notes

* Passwords should be encrypted before storing in the database
* Never expose sensitive credentials on the frontend
* Use environment variables for all secrets
* Implement proper validation and sanitization

---

## 🌟 Future Improvements

* 🔑 Password strength checker
* 🧠 Password generator
* 📁 Folder/category organization
* 🌙 Dark mode
* 📲 Mobile app version
* 🔐 End-to-end encryption
* 🛡️ Two-factor authentication (2FA)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the project and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Built with caffeine and chaos by **Khushi** ✨
