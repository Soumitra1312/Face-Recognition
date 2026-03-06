## Face Recognition Based Attendance System
This project is an attendance-recording system using machine learning. It captures the face of the person in an automated way to track the attendance for classrooms. The application primarily takes 10 photos from the webcam of the person. The ML model will recognize the human face from the image he/she was captured in and it can insert in MongoDB a record for the face and create a faculty personalized dashboard consisting of attendance statistics (time slot, sections, student list, attendance record along with many other data).

<div align="center">
  <img src="Screenshots/Screenshot 2026-01-27 113509.png" alt="Dashboard Screenshot 1" width="45%" style="margin:10px;" />
  <img src="Screenshots/Screenshot 2026-01-27 121136.png" alt="Dashboard Screenshot 4" width="45%" style="margin:10px;" />
  <br/>
  <img src="Screenshots/Screenshot 2026-01-27 121145.png" alt="Dashboard Screenshot 5" width="45%" style="margin:10px;" />
  <img src="Screenshots/Screenshot 2026-01-27 122509.png" alt="Dashboard Screenshot 2" width="45%" style="margin:10px;" />
  <br/>
  <img src="Screenshots/Screenshot 2026-01-27 120825.png" alt="Dashboard Screenshot 3" width="45%" style="margin:10px;" />
  
</div>

### ✨ Key Features
- 📸 **Automated image capture** — captures 10 images per user via webcam  
- 🧠 **Face recognition system** using OpenCV, dlib, and face_recognition  
- 🗂️ **MongoDB-backed storage** for users, attendance, and schedules  
- 👨‍🏫 **Faculty dashboard** with time slots, sections, and student lists  
- 📊 **Attendance analytics** including history and per-class statistics  
- ⚡ **End-to-end automation** eliminating manual attendance processes

### Technologies

- Machine Learning: Face Recognition from Images done using OpenCV, face_recognition, and dlib.
- Backend: The technology stack would be MongoDB—we will preserve user details for faculty/students, attendance records, etc.
- Front-end: Flask is used in the frontend. 
- Python libraries:

  - opencv-python
  - face_recognition
  - Flask (or whatever other web framework you used)
  - pymongo (use pymongo to connect to interaction with MongoDB) 
  - numpy
  - dlib

### Prerequisites

- Python 3.x
- MongoDB (running locally or using a cloud service)
- Webcam (for capturing attendance images)
