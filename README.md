# DreamNexus - Video Conferencing App 🎥

DreamNexus is a powerful and seamless video conferencing application designed to provide smooth and reliable virtual meetings. It integrates modern web technologies to deliver a real-time communication experience.

## 🚀 Features
- High-quality video and audio calls
- Secure authentication and authorization
- Real-time chat during video conferences
- Screen sharing functionality
- Meeting recording support
- User-friendly interface with a responsive design

## 📂 Project Structure

The project is structured into **Frontend**, **Backend**, and **Other Configuration Files**:

### 🖥️ Frontend (React.js)
Located in the **`frontend/`** folder.

#### Key Files:
- `frontend/src/App.js` - Main React component handling routing
- `frontend/src/components/VideoRoom.js` - Video conference interface
- `frontend/src/components/Chat.js` - In-meeting chat feature
- `frontend/src/components/ScreenShare.js` - Screen sharing functionality
- `frontend/src/context/AuthContext.js` - User authentication state management
- `frontend/public/index.html` - Main HTML file for the frontend
- `frontend/package.json` - Dependencies and scripts

### ⚙️ Backend (Node.js & Express.js)
Located in the **`backend/`** folder.

#### Key Files:
- `backend/server.js` - Main server file
- `backend/routes/authRoutes.js` - Authentication routes (login, register)
- `backend/routes/meetingRoutes.js` - Meeting session management
- `backend/config/db.js` - Database connection setup
- `backend/models/User.js` - User schema for MongoDB
- `backend/models/Meeting.js` - Meeting schema
- `backend/package.json` - Dependencies and scripts

### 🔗 Additional Files
- `.env` - Environment variables configuration
- `README.md` - Project documentation (this file)
- `Dockerfile` - Containerization setup for deployment
- `.gitignore` - Files to ignore in version control

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
git clone https://github.com/jayesh09871/DreamNexus.git
cd DreamNexus

## Frontend
cd frontend
npm install


## Backend
cd ../backend
npm install

## Setup Environment Variable
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

## Run the Application
cd backend
npm start

## Start the frontend
cd frontend
npm start
