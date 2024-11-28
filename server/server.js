const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');
const app = express();


app.post('/login', async (req, res) => {
    const { code } = req.body.code;
    const spotifyWebApi = new spotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '1923d6e636a54ced89c67b40190d3fc0',
        clientSecret: '6d49666d8f3448e18c0621c99c7ca26f' 
    })

    spotifyWebApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch(() => {
        res.sendStatus(400)
    })

})