# Sudoku Application

## Running in development environment

Please note that each folder has their own instructions as well. This document server as general overview to run the application

### API

- Navigate to api folder, and run `npm install` to install the dependencies
- Run `npm run build` or `yarn build` to serve an instance of API server. The default port is 8080 of your local machine

### APP

Please note that, you should start the server initially before app since it uses local proxy settings to get the board

- Navigate to app folder, and run `npm install` to install the dependencies
- Run `npm start` or `ng server` to start local dev server for front-end. The app will be running on http://localhost:4200

## Running via Docker

There is a docker compose file present in the root directory, there are various steps to tweak it as per your need. 

## Build & run the services

Please note that, I am using custom network from docker to create a default bridge. You can change the settings in the docker-yml file

- Run `docker-compose up`. It will create two images for api and app respectively. The API is running on localhost:8080, while the
app is running on localhost:4200

## Run build only

- Run `docker-compose up  --no-start` to create images. The names are as follows:  
API - sudoku-ws:level-4  
APP - sudoku-spa:level-4

- Then, we can use `docker build` and `docker run` respectively to serve up the application.
