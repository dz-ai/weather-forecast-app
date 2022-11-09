const express = require('express');
const cors = require('cors');
const axios = require("axios");
require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static('public'));

const API_KEY = process.env.API_KEY;

app.post('/city-search',  (req, res) => {
    const {urlCity, cityName} = req.body;
    console.log('post')

    axios.request({method: "get", url: `${urlCity}q=${cityName}&appid=${API_KEY}`})
        .then(response => {
           //console.log(response.data)
            res.json(response.data);
        })
        .catch(e => console.error(e));
});

app.post('/forecast-search',  (req, res) => {
    const {urlForecast, lat, lon, unit} = req.body;

    axios.request({method: "get", url: `${urlForecast}lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`})
        .then(response => {
            console.log(response.data)
            res.json(response.data);
        })
        .catch(e => console.error(e));
});

app.listen(5000, () => console.log('5000'));
