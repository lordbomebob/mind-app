Section 1 - Project Description
1.1 Project
mind-app
1.2 Description
a website to upload stories and read stories, bookmark stories.


Section 2 - Overview
2.1 Purpose
for writer to share their stories and for readers to be able to save stories
2.2 Scope
login,database/server setup, upload stories, bookmark stories, (buy sell stories), ui
2.3 Requirements
ui,database setup 1 week
login,upload stories,bookmark stories 1 week
testing 1 week,(buy sell)
2.3.3 Technical Requirements
MongoDB, Express, React(bootstrap, axios), Node
2.3.4 Security Requirements
will eventually add bycrypt, but temporarly using no encryption

Section 3 - System Architecture
Server Side
  Server use routes,
  routes use controller,
  controller use model

Client Side
  React use Components,
  components use axio and bootstrap,
  axio get/post to server



Section 4 - Data Dictionary
users
username(pk) string,pw string
stories
storyName(pk) string, desciption string, status string
chapter
chapterID(pk) int, storyName(fk) string, chapterNum int, chapterTitle string, chapterContent string, (username string {for uploader name}) 

Section 5 – Data Design
Users
  Relationships: 1 to many with chapter
Stories
  Relationships: 1 to many with chapter
Chapter 
  Relationships: 1 to 1 with stories, 1 to 1 with users

Section 6 - User Interface Design
  Navbar    login
  Switching Component{
    login/register, upload screen, Home page, bookmark
  }
  
Section 7 - Testing 
  nodejs testing with Jest
  React testing with React testing library








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
