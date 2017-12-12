# Cakes

This is a sample web application written in Angular 5, using TypeScript. The app is deployed to an Azure app service at 
http://cakes-test-site.azurewebsites.net/. It's continually deployed on check in to master, via Visual Studio Team Services.

## Tooling
The skeleton of the app was generated using the Angular CLI, which takes care of most of the pain of getting a transpiling pipeline set up with webpack.
The only changes I made were to enable SCSS support, and to take out some of the odder linting rules.

I used this instead of setting up my own pipeline as I find it quicker, less prone to error, and more likely to follow best practices
(if I'd done this in React, I would have done the same via create-react-app.)

## Unit Testing
The skeleton app gets generated with unit tests, I've left these minimal (they just check the components can create successfully) but they could be expanded on if required.

## Mobile

The app comes with a manifest allowing it to be opened in standalone mode on Android devices, when added to the home screen.