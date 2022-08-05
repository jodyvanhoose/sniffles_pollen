const axios = require("axios");

const handler = async (event) => {
  try {
    const apikey = process.env.REACT_APP_APT_KEY
    const { data } = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}`);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
