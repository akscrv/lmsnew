# Generated by Django 4.2 on 2023-04-06 01:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_quiz_quizquestions'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='quiz',
            options={'verbose_name_plural': 'Quiz'},
        ),
        migrations.AlterModelOptions(
            name='quizquestions',
            options={'verbose_name_plural': 'QuizQuestions'},
        ),
    ]
