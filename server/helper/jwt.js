const expressJwt = require('express-jwt');
const config = require('../../config/jwt-secret.json');

module.exports = jwt;

function jwt() {
    const { secret } = config;
    console.log(secret)
    return expressJwt({ secret }).unless({
        path: [
            // public routes that don't require authentication
            '/api/users/login'
        ]
    });
}