# Building an Authentication system with Koa,Sequelize, and Passport js

## Setting up the boiler plate

### Create a new project

`touch auth-with-koa && cd auth-with-koa`

`npm init`

`npm install koa sequelize@next koa-passport koa-bodypassport koa-router`

`npm install nodemon --save-dev`

`touch index.js && mkdir routes models config modules modules/user`

### Setting up koa

In index.js we are going to get a basic boiler plate set up, if you've been
through this before feel free to copy paste. If not we'll explain every line.

First we'll import koa

```javascript
const Koa = require('koa');
```

Then we'll create a new koa app object.

```javascript
const Koa = require('koa');
const app = new Koa();
```

Next we'll go ahead and get our app listening for requests.

```javascript
const Koa = require('koa');
const app = new Koa();

app.listen(process.env.PORT || 3000, () => {
  console.log(`API listening on ${process.env.PORT || 3000}`);
});
```

Well quickly set up some useful middlewares to help us out. We will install body parser
and logger.

```javascript
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');

const app = new Koa();

// middlewares
app.use(bodyparser());
app.use(logger());

app.app.listen(3000, () => {
  console.log(`App listening on ${process.env.PORT || 3000}`);
});
```
