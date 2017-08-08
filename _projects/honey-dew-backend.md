---
layout: project
title: Honey Dew Backend
order: 1
type: Open Source, Full Stack Application, API, Rest
tags:
  - NodeJS: "http://www.nodejs.org"
  - Express: "http://www.expressjs.com"
  - MongoDB: "http://www.mongodb.com"
  - Mongoose: "http://www.mongoosejs.com"
  - JWT: "https://jwt.io/"
Demo: 'http://vigorous-advice.surge.sh'
githubUrl: "https://github.com/Spence-S/honey-dew"
---
Honey Dew is a full stack application that shows off skills with a variety of technologies.

The backend is a restful API interface that exposes a number of end points for user authentication and management and a protected CRUD todo application. The app now features the ability to create multiple todo-lists, that represent multiple one-to-many relationships in MongoDB. The Schemas are designed to cross reference relationships in both parent and child schemas in order for maximal scalability and options going forward. It is hosted on currently being hosted on [heroku](http://heroku.com).

The backend is built with Express and is based on the es6 node starter, also in this portfolio. It handles user logins with JWT and exposes a restful CRUD interface for the todo list. The database used is [MongoDB](http://www.mongodb.com) with [Mongoose](http://mongoosejs.com) as an ORM.
