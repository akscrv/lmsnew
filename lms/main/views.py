from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import TeacherSerializers,QuizSerializer,QuizQuestionSerializer,StudentSerializers,ResultSerializers,ResultxSerializers
from . import models
from rest_framework import generics
from rest_framework import permissions
from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt

#Using Generics

#it will list all the json data.

class TeacherList(generics.ListCreateAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializers
    # Below is the condition to require the Authentication permission.
    # permission_classes = [permissions.IsAuthenticated]

#it will help to function crud

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializers
    # Below is the condition to require the Authentication permission.
    # permission_classes = [permissions.IsAuthenticated]

@csrf_exempt
def teacher_login(request):
    email=request.POST['email']
    password=request.POST['password']
    try:
        teacherData=models.Teacher.objects.get(email=email,password=password)
    except models.Teacher.DoesNotExist:
        teacherData=None
    if teacherData:
        return JsonResponse({'bool':True,'teacher_id':teacherData.id})
    else:
        return JsonResponse({'bool':False})

# Create your views here.

# class TeacherList(APIView):
#     def get(self,request):
#         teachers=models.Teacher.objects.all()
#         serializer=TeacherSerializers(teachers, many=True)
#         return Response(serializer.data)

#quiz catagories
class QuizList(generics.ListCreateAPIView):
    queryset = models.Quiz.objects.all()
    serializer_class = QuizSerializer

#view as perticular quiz list
class TeacherQuizList(generics.ListCreateAPIView):
    # queryset = models.Quiz.objects.all()
    serializer_class = QuizSerializer

    def get_queryset(self):
        teacher_id=self.kwargs['teacher_id']
        teacher= models.Teacher.objects.get(pk=teacher_id)
        return models.Quiz.objects.filter(teacher=teacher)
    

class TeacherQuizDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Quiz.objects.all()
    serializer_class = QuizSerializer

#Delete Quiz and update quiz catogeries

class QuizDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Quiz.objects.all()
    serializer_class = QuizSerializer

#quiz questin add
class QuizQuestionList(generics.ListCreateAPIView):
    # queryset = models.Quiz.objects.all()
    serializer_class = QuizQuestionSerializer

    def get_queryset(self):
        quiz_id=self.kwargs['quiz_id']
        quiz= models.Quiz.objects.get(pk=quiz_id)
        return models.QuizQuestions.objects.filter(quiz=quiz)
    

    
class QuizQuestionListDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.QuizQuestions.objects.all()
    serializer_class = QuizQuestionSerializer
    lookup_url_kwarg = 'question_id'


#it will list all the json data.

class StudentList(generics.ListCreateAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializers
    # Below is the condition to require the Authentication permission.
    # permission_classes = [permissions.IsAuthenticated]

#it will help to function crud

class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializers
    # Below is the condition to require the Authentication permission.
    # permission_classes = [permissions.IsAuthenticated]

@csrf_exempt
def student_login(request):
    email=request.POST['email']
    password=request.POST['password']
    try:
        studentData=models.Student.objects.get(email=email,password=password)
    except models.Student.DoesNotExist:
        studentData=None
    if studentData:
        return JsonResponse({'bool':True,'student_id':studentData.id})
    else:
        return JsonResponse({'bool':False})

#All quiz catogeries list 
class QuizCatogeriesList(generics.ListCreateAPIView):
    queryset = models.Quiz.objects.all()
    serializer_class = QuizSerializer
    # Below is the condition to require the Authentication permission.
    # permission_classes = [permissions.IsAuthenticated]


    
#quiz catagories
class AttemptedL(generics.ListCreateAPIView):
    queryset = models.Resultx.objects.all()
    serializer_class = ResultxSerializers


class ShowResultList(generics.ListCreateAPIView):
    # queryset = models.Quiz.objects.all()
    serializer_class = ResultxSerializers

    def get_queryset(self):
        quiz_id=self.kwargs['quiz_id']
        quiz= models.Quiz.objects.get(pk=quiz_id)
        return models.Resultx.objects.filter(quiz=quiz)
    