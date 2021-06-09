const config = require('config.json');
const axios = require("axios");

module.exports = {
    getAll,
    getByVal,
};


async function getAll() {
    console.log("fun");
    let response = await axios.get(
        ` https://newsapi.org/v2/top-headlines?country=gb&category=general&apiKey=${config.APIKey}`
      );
     console.log(response.data);
    return response.data;
}

async function getByVal(val) {
    let response = await axios.get(
        `https://newsapi.org/v2/everything?q=${val}&sortBy=publishedAt&apiKey=${config.APIKey}`
      );
      console.log("ok")
    return response.data;
}

