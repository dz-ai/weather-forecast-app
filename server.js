const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static('public'));

const API_KEY = process.env.API_KEY;

app.post('/city-search', async (req, res) => {
    const {urlCity, cityName} = req.body;

    const response = await fetch(urlCity + `q=${cityName}&appid=${API_KEY}`);
     res.json(response);
});

app.get('/forecast-search', async (req, res) => {
    const {urlForecast, lat, lon, unit} = req.body;

    const response = await fetch(urlForecast + `lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`);
    res.json(response);
});

app.listen(5000, () => console.log('5000'));
