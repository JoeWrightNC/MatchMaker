# Match Maker Application

## Description

This full stack web application uses a simple algorithmic approach to create community matches based on the user's responses to a ten question survey. When the survey is submitted, the simple algorithm finds the existing user record closest to the current user's responses and returns that record as a match.  The user is then added to the master data file so that others may match with them in the future.

This application was built using [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) to establish a server on the back end and using [jQuery](https://jquery.com/) and [Bootstrap](https://getbootstrap.com/) to develop a dynamic and responsive front end.

## Demo
	
This application is deployed to Heroku. Please check it out [here](https://polar-lake-11720.herokuapp.com/).

## Installation

To install the application follow the instructions below:

	git clone git@github.com:JoeWrightNC/MatchMaker.git
	cd MatchMaker/
	npm i
	
## Running Locally

Run the Node.js application with the command below.

	node server.js
	
The application will now be running locally on port 8080. You can then access it locally from your browser at the URL `localhost:8080`.
