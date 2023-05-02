from django.db import models

# Create your models here.\

#Teacher Model Below
class Teacher(models.Model):
    full_name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    subject=models.CharField(max_length=100)
    qulification= models.CharField(max_length=100)
    mobile_no=models.CharField(max_length=20)
    password=models.CharField(max_length=100)

#Student Model Below
class Student(models.Model):
    full_name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    intrest_field=models.CharField(max_length=100)
    qulification= models.CharField(max_length=100)
    mobile_no=models.CharField(max_length=20)
    password=models.CharField(max_length=100)

#Quiz Model Below
class Quiz(models.Model):
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True)
    title=models.CharField(max_length=100)
    detail=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural="Quiz"

#Quiz Question Model
class QuizQuestions(models.Model):
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,null=True)
    question=models.CharField(max_length=100)
    and1=models.CharField(max_length=100)
    and2=models.CharField(max_length=100)
    and3=models.CharField(max_length=100)
    and4=models.CharField(max_length=100)
    right_ans=models.CharField(max_length=100)
    add_time=models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural="QuizQuestions"

#Result
class Result(models.Model):
    student=models.ForeignKey(Student,on_delete=models.CASCADE,null=True)
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,null=True)
    score=models.CharField(max_length=100)
    attempted=models.CharField(max_length=100)
    add_time=models.DateTimeField(auto_now_add=True)
    

    class Meta:
        verbose_name_plural="result"

#new
class Resultx(models.Model):
    student=models.ForeignKey(Student,on_delete=models.CASCADE,null=True)
    quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,null=True)
    score=models.CharField(max_length=100)
    attempted=models.CharField(max_length=100)
    add_time=models.DateTimeField(auto_now_add=True)
    

    class Meta:
        verbose_name_plural="result"   

