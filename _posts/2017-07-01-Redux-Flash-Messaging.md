While building any type of useful web application that requires user input or interaction in some form or another, it is a critical practice to give users feedback that guides them toward the correct use of the platform and informs them when they make a mistake or otherwise use the platform incorrectly. This is often accomplished with some type of messaging system that flashes the user errors, warnings, and sometimes success messages that let's them better interact with the app.

With legacy node apps, this is typically accomplished with middleware. What then do we do when writing SPAs with React? This is one task where Redux really shines. If you haven't made your own redux module before, this is a great way to understand how independant redux packages work, and why adding error messaging to your store is an excellent way to learn redux in general.

## The App

We're going to build a simple login form that flashes the user messages if their password isn't long enough or if their email isn't valid.

I'm going to go ahead and assume you have used redux before and are familiar with its basic tenets. Let's jump straight into code.

First, lets get a basic react project scaffolded with CRA (Create React App)

install CRA globally if you haven't already. Wait for it to install then we'll scaffold out our facebook approved starter project.

``` bash
npm install -g create-react-app
cd my-app-directory (whatever directory you like to create projects in)
create-react-app init redux-flash-tutorial
cd redux-flash-tutorial
yarn install (or npm install if you don't use yarn... use yarn)
```

Actually... scratch that, just clone the CRA starter I made for this project.

``` bash
git clone https://www.github.com/spence-s/redux-flash
```

First off, you'll notive I included bootstrap 3 for styles. This isn't going to be a fancy interface, just a simple form, so we won't be adding much to make it look nice. I already coded the layout of the page in our only react component.

The interesting part here is the redux. What we will do is create the actions and reducers together, as well as wire them up to the componenet. Hold on to your butts!

First, lets make out reducer. I like making reducers first for anything I put in redux, because it quickly lets me visualize all my state possibilities. I am also a big fan of using redux logger to help me out. It's an essentail redux dev tool, not to be confused with actual redux dev tools.

Anyhoo, to get started we are going to maintain our "slice" of state in an object that has the following schema:

```js
{
  showFlash: Boolean,
  message: String,
  status: String
}
```

Let's create this in our reducer by creating a new file in our "reducers" folder called flash_reducer.js.

``` bash
touch src/reducers/flash_reducer.js
```
then, open the file in your editor and type:

``` js
const initialState = {
  showFlash: false,
  message: '',
  status: ''
}

export default flashState = (state = initialState, action) => {
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        status: 'success',
        message: action.payload.message,
        showFlash: true
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        showFlash: true
      }
    case LOGOUT:
      return {
        ...state,
        status: 'success',
        message: 'All logged out! Come back soon :)',
        showFlash: true
      }
    case TODO_ERROR:
      return {
        ...state,
        status: 'danger',
        message: 'There was an error with that particular todo action',
        showFlash: true
      }
    case TODOS_ERROR:
      return {
        ...state,
        status: 'danger',
        message: action.payload.response.data,
        showFlash: true
      }
    case HIDE_FLASH:
      return {
        ...state,
        showFlash: false
      }
    default:
      return state;
  }
}
```
