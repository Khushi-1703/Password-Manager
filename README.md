# 🔐 PassCore — Password Manager

A modern and secure password manager web app built to help users store, manage, and access their credentials in one place.
LockBox keeps your passwords organized, protected, and easy to retrieve with a clean and minimal UI.

---

## 🚀 Features

* 🔒 Securely save passwords and credentials
* 👤 User authentication and personalized vault
* ➕ Add, edit, and delete saved passwords
* 📋 Copy credentials instantly
* 🔍 Search saved entries quickly
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

### Authentication

* **NextAuth.js** *(if implemented)*

### Payments *(Optional Premium Feature)*

* **Razorpay Integration**

---

## 📂 Project Structure

```bash
password-manager/
│
├── app/                 # App router pages
├── components/          # Reusable UI components
├── db/                  # Database connection
├── models/              # Mongoose models
├── public/              # Static assets
├── actions/             # Server actions
├── utils/               # Utility/helper functions
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

Create a `.env.local` file in the root directory and add the following:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Razorpay (Optional)
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

---

## 📸 Core Functionality

### 1. User Authentication

Users can securely sign up and log in to access their personal password vault.

### 2. Password Vault

Store credentials such as:

* Website name
* Username / Email
* Password

### 3. Password Management

Users can:

* Add new credentials
* Edit saved credentials
* Delete entries
* Copy passwords instantly

### 4. Search & Accessibility

Quickly search through saved credentials and access them in seconds.

---

## 🔐 Security Notes

* Passwords should be encrypted before storing in the database
* Never expose sensitive credentials on the frontend
* Use environment variables for all secrets
* Implement proper validation and sanitization
* Secure authentication sessions using NextAuth / JWT

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
