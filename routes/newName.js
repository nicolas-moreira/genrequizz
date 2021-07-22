const express = require('express');
const app = express();
const router = express.Router();
const config = require('config');
const Name = require('../schemas/NameSchema');
const axios = require('axios');

router.get("/", async (req,res,next) => {
    const API_KEY = config.get('genderAPI.API_KEY');
    var firstName = "";
    var apiURLEncoded = "";

    Name.countDocuments().exec(function (err, count) {

        var random = Math.floor(Math.random() * count)
      
        Name.findOne().skip(random).exec((err, result) => {
            firstName = result.firstName;
            apiURLEncoded = encodeURI(`https://gender-api.com/get?name=${firstName}&country=FR&key=${API_KEY}`);
            
            axios.get(apiURLEncoded)
            .then(response => {
                res.status(200).send({firstName: firstName,gender: response.data.gender});
            })
            .catch(error => {
                console.log(error);
            });
        })
    
    })
});

module.exports = router;