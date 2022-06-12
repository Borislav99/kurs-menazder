# Kurs Menadzer & E-learning platform

With the arrival of the pandemics, some of the big problems appeared. One of the problems we have encountered with the advent of the Covid-19 virus is learning. At the time of the pandemic, students could not attend classes normally, and classes took place in a somewhat disorganized manner. The first problem is that learning resources are scattered everywhere. Primary and secondary school students did not attend classes normally.

Classes were broadcasted on TV and the communication resources of students and teachers were mostly through social networks or Viber. At the university, the situation was slightly more organized because most universities have their system of distance learning through which classes were broadcast. What remained a problem was the communication between students and professors. Communication was via e-mail and all resources had to be sent via the same medium.

![1](https://user-images.githubusercontent.com/55507857/173192224-1f23aaf8-a149-4bea-bb14-64e6db330fc0.jpg)

One evening I noticed that my mother, who is a teacher by profession, is struggling to devote the same amount of attention to all the students. One of the main problems is how to send the same resources to everyone at once, how to organize learning resources as well as how to organize student assignments. The next day I received an offer for a part-time job as a Javascript lecturer. And then the idea came to my mind to develop learning software on which everything would be organized. That same evening, I began planning and developing a course-manager platform.

# Project Status

The project is currently active and it is used as an internal application of the information academy infoArs. Currently, the project is active only for the course I teach, more precisely the Javascript course for children.

A instructor page is currently being designed through which he could more easily send presentations, exercises, tutorials and more. Currently this is done through POSTMAN.

You can see live demo on following [link](https://www.kurs-menadzer.com/).

#### Login as student

- Username: test
- Password: test321

# Project Screen Shot(s)

Kurs Menadzer landing page.

![2](https://user-images.githubusercontent.com/55507857/173192476-3aefebe7-2ebe-401e-8742-2434ee652ee1.png)

Kurs Menadzer features.

![3](https://user-images.githubusercontent.com/55507857/173192510-920f4579-c030-44e7-96c5-df9da568e0ef.png)

You can get access as an instructor if you fill out the form. An automatic message will arrive at your e-mail (implemented via Express + SendGrid), we store your data on the database, and our administrator contacts you.

![4](https://user-images.githubusercontent.com/55507857/173192632-ba365c54-189f-40da-b083-8b383cd7f59c.png)

The instructor gives you credentials to access the platform as a student.

![5](https://user-images.githubusercontent.com/55507857/173192662-dd866932-88fc-4a0d-82b9-0f5b7607ef18.png)

As a student you can see presentations, projects, and exercises set by the instructor. In addition to sending homework, it is also possible to watch recorded lectures via the platform.

![6](https://user-images.githubusercontent.com/55507857/173192759-f0aea375-88d9-47e1-afd4-8c5172618266.png)

The student can download the presentations given by the instructor. When the user clicks on any of the presentations, projects, or exercises, the download from the Google Drive instructor begins. The API is custom.

![7](https://user-images.githubusercontent.com/55507857/173192847-ab0fd214-e4ac-47a8-a46c-2c95be98bbb2.png)

The student sends the task to the instructor via the platform. The assignment can be sent at a specific time (the instructor decides whether the assignment can be sent or not via backend). Each instructor has their own rules for writing assignments. None of the other students attending the course can take the other's student assignment. When the student presses "+" button, a popup opens. When a student submits a task, the task's are automatically updated.

![8](https://user-images.githubusercontent.com/55507857/173192934-9fba1661-a6b1-4847-800f-f2ca437cbe4b.png)

Students can watch recorded lectures via the platform. When the student presses the button to display the lecture, a window opens in which the youtube video of the lecture is embeded.

![9](https://user-images.githubusercontent.com/55507857/173193120-70f35039-c9ad-415f-9016-cb0dc2a9aedf.png)

# Installation and Setup

The application is created with React so you need to have node and npm locally on the machine.

#### Install dependencies

`npm install`

#### Setup .env file

You need .env file to connect to the backend. You need to create an environment variable called REACT_APP_BACK_END_API_KEY. The value of this variable depends on whether you have a copy of the API code or not. If you do not have a copy of the API code, set the value for the environment variable to: `https://kurs-menadzer.herokuapp.com`.

#### Start a server locally

`npm start`

#### Visit the application locally

`localhost:3000s`

# Reflection

- This project started as a side project. The unplanned project has developed into something more.

- This project is very unique and in a way innovative. I saw the problem and offered solution. This project is completely custom, I wrote both frontend and backend on my own.

- The challenge in this project was how to best organize the project structure. Another challenge I’ve faced is how to track location of the user on the app. This took me a little time, but I still mastered that part. The current challenge I'am facing is how to maintain the design of the site, and make a special place for the login and access of the instructor. I am currently working on that.

## Summary

I started creating the project when I got a part-time job as a Javascript lecturer. The development of the project took about 15 days, because i developed both front-end and api.

The course manager is currently in the MVP phase. Anyone with minimal technical knowledge could use the course manager as an instructor. I see the future of the Manager's Course as my diploma thesis, where I would present the final version of this application, as well as a gift to all professors who want to use this application.

The versions of the technologies I used are below:

| Technology        | Version |
| ----------------- | ------- |
| React             | ^17.0.2 |
| React Router DOM  | ^6.2.2  |
| Styled Components | ^5.3.3  |
| Axios             | ^0.26.1 |
