# Evaluating News Article with NLP
## Overview
This Web application allows you to 
  - either extract metadata (title, author, publish date, ...) from articles referenced by their URL on the web 
  - or analyse a tweet sentence to get confidence and subjectivity indicators
The application connects to the Aylien Text Analysis platform to send the requests and to render the extracted data or computed indicators.
## Instructions
These instructions assume that node.js and npm are installed.
Cd to the project directory where `package.json`is located and type `npm init`in order to install all the dependencies. The application can be configured either in development mode or in production mode .
To run the application in development mode:  
  - start the back-end server (express server running on port 8888) : `npm start`
  - build and start the application using the webpack-dev-server (running on port 9000) : `npm run dev`
  - go to the URL `localhost:9000` in your browser to experiment the app ;
  
To run the application in production mode:
  - build the application : `npm run build`
  - start the express server : `npm start`

## Tests
Some unit tests are included to illustrate the use of Jest, a JavaScript Testing Framework. To check that these tests pass, cd to the project directory where `package.json`is located and type `npm test`.

## Usage
In the article page, type in a valid url for an article in the form and click on the search button. 

In the tweet page, type in tweet sentence and click on the search button. 