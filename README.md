## Face Recognition Based Attendance System
This project is an attendance-recording system using machine learning. It captures the face of the person in an automated way to track the attendance for classrooms. The application primarily takes 10 photos from the webcam of the person. The ML model will recognize the human face from the image he/she was captured in and it can insert in MongoDB a record for the face and create a faculty personalized dashboard consisting of attendance statistics (time slot, sections, student list, attendance record along with many other data).

### Features
- Image Capture: The system can take images through webcam, taking 10 auto images of the person via the webcam.
- Face Recognition: The ML model recognizes the faces of students, and staff to take attendance.
- MongoDB: The system will have a MongoDB as a back end, it will also keep all of the user details, attendance, class schedule and so forth.
- Faculty Dashboard: The dashboard should show attendance data for the faculty and include almost everything:

 - Time slot
 - Section
 - Number of students
 - Attendance history, etc.

### Technologies

- Machine Learning: Face Recognition from Images done using OpenCV, face_recognition, and dlib.
- Backend: The technology stack would be MongoDB—we will preserve user details for faculty/students, attendance records, etc.
- Front-end: (Provide her a server-side front-end stack, i.e., if any front-end framework is used, like Flask, Django, etc.). 
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
