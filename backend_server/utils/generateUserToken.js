const axios = require("axios");

const getAccessToken = async () => {
  const consumerSecret = `${process.env.CONSUMER_SECRET}`;
  const consumerKey = `${process.env.CONSUMER_KEY}`;

  const url =
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";

  try {
    // base64 encoding of the consumer secret and consumer key
    const encodedCredentials = new Buffer.from(
      consumerKey + ":" + consumerSecret
    ).toString("base64");

    const headers = {
      Authorization: `Basic ${encodedCredentials}`,
      "Content-Type": "application/json",
    };

    const response = await axios.get(url, { headers });

    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAccessToken;
