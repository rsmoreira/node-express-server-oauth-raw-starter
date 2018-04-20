const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

// it gives access to Mongoose Model Class Users
const User = mongoose.model('users');


passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            /**
             * This is the callback function called after 
             * Google have validated with the user through 
             * OAuth.
             */
            User.findOne({ googleId : profile.id })
                .then((existingUser) => {
                    if (existingUser) {

                    } else {
                        new User({ googleId : profile.id }).save();
                    }
                });
            
             
        }
    )
);