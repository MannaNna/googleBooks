const dotenv = require('dotenv').config();

module.exports = {
    spoonacular: {
        key: process.env.spoonacular_key,
        host: process.env.spoonacular_host,
        url: process.env.spoonacular_url
    },
    facebook: {
        clientID: process.env.facebook_api_key,
        secret: process.env.facebook_api_secret,
        redirectUrl: "http://localhost:3000/auth/facebook/callback"
    },
    google: {

    }
}