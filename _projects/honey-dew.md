---
title: Honey Dew
type: Open Source, Full Stack Application
tags: [ "Express, ", "Node, ", "React Bootstrap, ", "MongoDB ", "React ", "Redux ", "rest API"]
Demo: 'vigorous-advice.surge.sh'
imageUrl: "https://pbs.twimg.com/profile_images/854431427/fb-login-logo_400x400.png"
githubUrl: "https://github.com/Spence-S/node-facebook-login-starter"
---
Honey Dew is a full stack application that shows off skills with a variety of technologies.

The app functionality itself is very simple, although more functionality is in development. It
is just a todo list. It is persisted through a rest API interface that is hosted on
heroku. The front end is deployed with surge.sh.

The front end is developed with React and Redux. All state is managed through Redux
and all API calls are made through Redux thunk middleware. On startup state is pulled
from the backend and UI is before syncing with the API. Persistent logins are managed with JWT
and local storage. The frontend app is now deployed to surge.sh. For styling bootstap
3 is used as well as React-Bootstrap for some javascript.

The backend is hosted on heroku and is a pure restful interface. The backend is built with Express
and is based on the es6 node starter, also in this portfolio. It handles user logins with
JWT and exposes a restful CRUD interface for the todo list. The database used is MongoDB
with Mongoose as an ORM.
