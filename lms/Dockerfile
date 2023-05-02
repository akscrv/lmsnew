
# # # Use an official Python runtime as a parent image
# # FROM python:3.9-slim-buster

# # # Set the working directory to /app
# # WORKDIR /app

# # # Copy the current directory contents into the container at /app
# # COPY . /app

# # # Install any needed packages specified in requirements.txt
# # RUN pip install -r requirements.txt

# # # Expose port 8000 for the Django application to listen on
# # EXPOSE 8000

# # # Run the command to start the Django development server
# # CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
# FROM python:3.11

# WORKDIR /app

# COPY requirements.txt requirements.txt

# RUN pip3 install -r requirements.txt

# COPY  . .

# CMD [ "python3", "manage.py", "runserver", "0.0.0.0:8000"]

# FROM python:3.11
# ENV PYTHONUNBUFFERED=1
# WORKDIR /app
# COPY requirements.txt requirements.txt
# RUN pip3 install -r requirements.txt

# Use an official Python runtime as a parent image
# FROM python:3.9-alpine

# # Set the working directory to /app
# WORKDIR /app

# # Copy the requirements.txt file to the container
# COPY requirements.txt requirements.txt

# # Install dependencies
# RUN pip3 install -r requirements.txt

# # Copy the rest of the application files to the container
# COPY . .

# # Set the command to start the server
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

FROM python:3.8
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . .
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]