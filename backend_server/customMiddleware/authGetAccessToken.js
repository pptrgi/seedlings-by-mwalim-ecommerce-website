const axios = require("axios");

const getAccessToken = async (req, res, next) => {
  const consumerSecret = process.env.CONSUMER_SECRET;
  const consumerKey = process.env.CONSUMER_KEY;

  // base64 encoding of the consumer secret and consumer key
  const encodedCredentials = new Buffer.from(
    `${consumerKey}:${consumerSecret}`
  ).toString("base64");
  console.log(encodedCredentials);
  // const encodedCredentials = process.env.BASIC;

  await axios
    .get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    )
    .then((response) => {
      console.log("data", response.data);
      const accessToken = response.data.access_token;

      console.log("at1", accessToken);
      localStorage.setItem("accessToken", accessToken);
      next();
    })
    .catch((err) => {
      res.status(400).json(err.message);
      console.log(err);
    });
};

module.exports = getAccessToken;
