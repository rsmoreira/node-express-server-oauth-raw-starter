# node-express-server-oauth-raw-starter
This is a simple Node + Express Server with OAuth authentication Starter Project

# Technologies
    > Node
    > ExpressJS
    > MongoDB (MongooseJS)
    > PassportJS (Google Strategy - Google OAuth)
    > Cookie-session

# Clone the project
Checkout this repo, install dependencies, then start the gulp process with the following:

> git clone https://github.com/rsmoreira/node-express-server-oauth-raw-starter.git
> cd node-express-server-oauth-raw-starter
> npm install

# Create the keys.js file
It must to be created at '/config' named as 'keys.js'.

module.exports = {
    googleClientID : <% got at your Google Developer Account / Credentials %>,
    googleClientSecret : <% got at your Google Developer Account / Credentials %>,
    mongoURI : <% add your MongoDB URI here %>,
    cookieKey : <% add any string here %> 
};

# Configure Google OAuth
> /documentation/6.2 Passport JS
> Configure your /config/keys

# Configure MongoDB
> /documentation/9.1 MongoDB Setup - Remote mLab Hosting
> configure your /config/keys

# Running 
> npm run dev

