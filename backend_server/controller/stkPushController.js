const axios = require("axios");

const stkPush = async (req, res) => {
  const shortCode = 174379; // testing code provided by Daraja API

  // request body from the frontend
  const phone = req.body.phone.substring(1);
  const amount = req.body.amount;

  const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  const passKey = process.env.PASS_KEY;

  // fetch the token from memory
  const accessToken = localStorage.getItem("accessToken");
  console.log("at2", accessToken);

  const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
  console.log("ts", timestamp);

  // base64 encoding of business shortcode + passkey + timestamp
  const encodedPassword = new Buffer.from(
    shortCode + passKey + timestamp
  ).toString("base64");

  const data = {
    BusinessShortCode: shortCode,
    Password: encodedPassword,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: `254${phone}`,
    PartyB: 174379,
    PhoneNumber: `254${phone}`,
    CallBackURL: "https://mydomain.com/path",
    AccountReference: "Seedlings by Mwalim Unlimited - Peter Gitonga",
    TransactionDesc: "Mpesa Payment Service",
  };

  await axios
    .post(url, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err.message);
    });
};

module.exports = stkPush;
