# lmsnew


LMS Portal

This educational platform is a web application built using React, Django, and SQL. It allows teachers and students to register and access a range of features, including quiz creation, analytics, authentication and student view. The platform's features are designed to enhance learning outcomes and improve efficiency in grading and analysis of student performance.

Registration, Login and Logout
	Teachers and students can register and login on the platform
	A registration form prompts users to input their information and create a email and password
	Registration is Authenticated using its own Django Auth.
	There is separate login for Student and Teacher.
	You can Logout also with deletion of session key.
Student Registration and Login
 
Teacher Registration and Login
 
Quiz Categories:
	Teachers can create quiz categories and add, delete, and update questions for each category.
	With the question, quiz categories can also be edited.
	Categories could include topics and description.
	A quiz creation page allows teachers to input questions with the option of deleting, updating and adding.
Option of all the Quiz Categories  

Add Quiz categories and Quiz questions
 

Analytics:
Analytics can be visualized using packages such as Victory Graph and Google React Chart
Teachers can view various analytics such as 
	Quiz creation graph with time and name.
 
	Student marks with quiz name, 
 
	Student percentage & percentile with quiz name.
 
	Top 3 scorers, 
 
	Highest and lowest marks, 
 
	Table of Quiz with the date Created on.
 
	Name of students with score.
 
	Quiz creation date and time
 
	Filter Quiz for finding number of students who pass or fail the quiz
 
Student Dashboard or Student View:
	Students can view a list of all teachers with subjects.
 
	They can select a teacher and attempt all the quizzes created by that subject teacher.
 
	Real-time scores are displayed as the student takes the quiz.
 
	A pop-up shows the student's marks after they submit the quiz.
 
Conclusion
In conclusion, the LMS Portal is a comprehensive web application designed to provide a range of features that enhance learning outcomes for both teachers and students. The platform is built using React, Django, and SQL, and offers users registration, login, and logout capabilities. Teachers can create quiz categories, and add, delete, and update questions for each category. Students can access a dashboard or student view, where they can view a list of all teachers with subjects, attempt quizzes, and view their real-time scores. The platform also offers various analytics for teachers, such as quiz creation graphs, student marks and percentages, top scorers, and more. With features that cater to the needs of both teachers and students, the LMS Portal offers a user-friendly and efficient solution to educational management.





#Steps 1: You just need to clone it

#Step 2: cd to the quizUi folder and run command npm inatall i

#Step 3: type npm start

#step 4: Go into lms folder which is server and write python manage.py runserver


#Yooo... All setup
