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

# Create the dev.js file
It must to be created at '/config' folder and named as 'dev.js'.

So, create, into the root path directory of the project, the folder 'config' and create a file named 'dev.js' as well. It must have exactly this name, because it is already configured to not be commited and it's also being used on keys.js.

It must to be done only for Development environment.
For Production environment, you must config your Env Variables.

module.exports = {
    googleClientID : <% got at your Google Developer Account / Credentials %>,
    googleClientSecret : <% got at your Google Developer Account / Credentials %>,
    mongoURI : <% add your MongoDB URI here %>,
    cookieKey : <% add any string here %> 
};

# Configure Google OAuth
    > /documentation/6.2 Passport JS
    > Configure your /config/dev.js



# Configure MongoDB
    > /documentation/9.1 MongoDB Setup - Remote mLab Hosting
    > configure your /config/dev.js

# Running 
    > npm run dev

