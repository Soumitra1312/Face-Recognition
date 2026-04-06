# Face Recognition Based Attendance System

🧠 Real-time computer vision system for automated attendance tracking  

<div align="center" style="margin-bottom: 15px;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" />
  <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" height="40" />
  <img src="https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white" height="40" />
  <img src="https://img.shields.io/badge/OpenCV-27338E?style=for-the-badge&logo=opencv&logoColor=white" height="40" />
  <img src="https://img.shields.io/badge/dlib-FF6F00?style=for-the-badge" height="40" />
  <img src="https://img.shields.io/badge/face_recognition-000000?style=for-the-badge" height="40" />
  <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" height="40" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" height="40" />
</div>

## 📊 Impact
- Achieves **92% face recognition accuracy** tested on a 100-person dataset (local webcam conditions)
- **~28% lower end-to-end latency vs. a baseline** OpenCV loop without pipeline optimization (averaged over 50 recognition attempts, local hardware)

---

## 🧾 Overview

This project is an AI-powered attendance system that uses computer vision to automate classroom attendance. It captures facial data via webcam, collects **10 images per user** for robust recognition, and identifies individuals in real time.

The system combines OpenCV, dlib, face_recognition, and TensorFlow-based models for feature extraction and face representation, integrated with a Flask backend and MongoDB database for efficient storage and processing.

It provides a **faculty dashboard with detailed attendance analytics**, including time slots, sections, student lists, and attendance records, enabling structured tracking and insights.

By automating image capture, recognition, and record management, the system eliminates manual attendance processes and improves accuracy and efficiency.

<div align="center">
  <img src="Screenshots/Screenshot 2026-01-27 113509.png" alt="Dashboard Screenshot 1" width="45%" style="margin:10px;" />
  <img src="Screenshots/Screenshot 2026-01-27 121136.png" alt="Dashboard Screenshot 4" width="45%" style="margin:10px;" />
  <br/>
  <img src="Screenshots/Screenshot 2026-01-27 121145.png" alt="Dashboard Screenshot 5" width="45%" style="margin:10px;" />
  <img src="Screenshots/Screenshot 2026-01-27 122509.png" alt="Dashboard Screenshot 2" width="45%" style="margin:10px;" />
  <br/>
  <img src="Screenshots/Screenshot 2026-01-27 120825.png" alt="Dashboard Screenshot 3" width="45%" style="margin:10px;" />
  
</div>

### ✨ Highlights
- 📸 **Automated image capture** — captures 10 images per user via webcam  
- 🧠 **Face recognition system** using OpenCV, dlib, TensorFlow, and face_recognition  
- 🗂️ **MongoDB-backed storage** for users, attendance, and schedules  
- 👨‍🏫 **Faculty dashboard** with time slots, sections, and student lists  
- 📊 **Attendance analytics** including history and per-class statistics  
- ⚡ **End-to-end automation** eliminating manual attendance processes

### ⚙️ Tech Stack
- **Language:** Python  
- **Computer Vision & DL:** OpenCV, dlib, face_recognition, TensorFlow/Keras (ANN classifier)
- Feature Extraction: GLCM, LBP, Chain Code, Regional features   
- **Backend:** Flask  
- **Database:** MongoDB  
- **Libraries:** NumPy, PyMongo

## ⚙️ Setup Instructions

### 📦 Prerequisites
- Python 3.8+  
- MongoDB (local or cloud)  
- pip (Python package manager)  
- Webcam (for capturing images)  

---

1. Clone the Repository
```bash
git clone https://github.com/your-username/Face-Recognition.git
cd Face-Recognition
```
2. Install Python Dependencies
```bash
pip install -r requirements.txt
```
3. Configure Database
- Ensure MongoDB is running locally or use a cloud instance (MongoDB Atlas)
- Create MongoDB connection string in your code if required

4. Run the Application
```bash
python app.py
```

5. Access the Application
  - Open [http://localhost:5000](http://localhost:5000) in your browser
  - Register users by capturing images via webcam
  - Start marking attendance automatically

### 🚀 Usage
-  Visit [http://localhost:5000](http://localhost:5000) for the application
- Capture images and register users via webcam  
- Automatically mark attendance using face recognition  
- View attendance analytics and records in the dashboard  
