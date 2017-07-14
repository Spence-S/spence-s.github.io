---
layout: project
title: ES6 Node Starter
type: Open Source
tags: [ "Node, ", "Express, ","Mongo, ","JWT"]
imageUrl: "https://cdn.auth0.com/blog/ebooks/jwt-logo.png"
githubUrl: "https://github.com/Spence-S/jwt-auth-server"
---
A starter template that uses babel to compile es6. Features module import statements and all babel stage-0 features are usable. The primary purpose of this starter is for
a restful api backend. It has no support for views of any kind, other than the out
of the box support express provides.

Uses a JWT implementation for protection endpoints.  The auth is a simple middleware that pulls the JWT from the req header and uses a method on the mongo collection
via mongoose to decode the JWT and attach the associated user to the req object.

Built on MongoDB, Mongoose, and Node.
