from rest_framework import serializers
from . import models

class TeacherSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ['id','full_name', 'email', 'subject', 'qulification', 'mobile_no', 'password']

class QuizSerializer(serializers.ModelSerializer):
    teacher_full_name = serializers.CharField(source='teacher.full_name', read_only=True)
    class Meta:
        model = models.Quiz
        fields = ['id','teacher','teacher_full_name', 'title', 'detail', 'add_time']

class QuizQuestionSerializer(serializers.ModelSerializer):
    teacher_id_s = serializers.CharField(source='quiz.teacher', read_only=True)
    class Meta:
        model = models.QuizQuestions
        fields = ['id','teacher_id_s','quiz', 'question', 'and1', 'and2','and3','and4','right_ans','add_time']


class StudentSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields = ['id','full_name', 'email', 'intrest_field', 'qulification', 'mobile_no', 'password']

class ResultSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Result
        fields = ['id','student', 'quiz', 'score','attempted','add_time']

class ResultxSerializers(serializers.ModelSerializer):
    studentName = serializers.CharField(source='student.full_name', read_only=True)
    class Meta:
        model = models.Resultx
        fields = ['id','student','studentName', 'quiz', 'score','attempted','add_time']