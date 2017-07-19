---
layout: project
title: Honey Dew
order: 0
type: Open Source, Full Stack Application
tags:
  - NodeJS: "http://www.nodejs.org"
  - Express: "http://www.expressjs.com"
  - MongoDB: "http://www.mongodb.com"
  - Mongoose: "http://www.mongoosejs.com"
  - React: "http://facebook.github.io/react"
  - Redux: "http://reduxjs.org"
  - React Bootstrap: "http://react-bootstrap.github.io"
  - Redux Thunk: "http://github.com/gaeron/redux-thunk"
  - JWT: "https://jwt.io/"
Demo: 'http://vigorous-advice.surge.sh'
githubUrl: "https://github.com/Spence-S/honey-dew"
---
Honey Dew is a full stack application that shows off skills with a variety of technologies.

The app functionality itself is very simple, although more functionality is in development. It
is just a todo list. It is persisted through a restful API interface that is hosted on
[heroku](http://heroku.com). The front end is deployed with [surge.sh](http://surge.sh).

The front end is developed with React and Redux. All state is managed through Redux
and all API calls are made through Redux thunk middleware. On startup, state is pulled
from the backend and UI is before syncing with the API. Persistent logins are managed with JWT
and local storage. The frontend app is now deployed to surge.sh. For styling bootstap
3 is used as well as [React-Bootstrap](http://react-bootstrap.github.io) for some javascript.

The backend is hosted on heroku and is a pure restful interface. The backend is built with Express
and is based on the es6 node starter, also in this portfolio. It handles user logins with
JWT and exposes a restful CRUD interface for the todo list. The database used is [MongoDB](http://www.mongodb.com)
with [Mongoose](http://mongoosejs.com) as an ORM.
