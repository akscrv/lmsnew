from django.urls import path
from . import views

urlpatterns = [
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view()),
    path('teacher-login',views.teacher_login),
#Add quiz catogeries
    path('quiz/',views.QuizList.as_view()),
#all quiz catogeries list by teacher
    path('teacher-quiz/', views.QuizCatogeriesList.as_view()),


    path('teacher-quiz/<int:teacher_id>/', views.TeacherQuizList.as_view()),
#delete and update quiz
    path('teacher-quiz-detail/<int:pk>/', views.TeacherQuizDetail.as_view()),

    path('quiz/<int:pk>/', views.QuizDetailView.as_view()),

    #add questin of quiz
    path('quiz-questions/<int:quiz_id>/', views.QuizQuestionList.as_view()),
    #delete question by queston id primary key
    path('question/<int:question_id>/', views.QuizQuestionListDetail.as_view()),

    #student login
    path('student/', views.StudentList.as_view()),
    path('student/<int:pk>/', views.StudentDetail.as_view()),
    path('student-login',views.student_login),
    
    path('attempted-quizx/',views.AttemptedL.as_view()),

    path('show-result/<int:quiz_id>/', views.ShowResultList.as_view()),
]