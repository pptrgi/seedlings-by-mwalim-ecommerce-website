const axios = require("axios");

const generateUserToken = require("../utils/generateUserToken");

const stkPush = async (req, res) => {
  const accessToken = await generateUserToken();

  const shortCode = 174379; // testing code provided by Daraja API
  const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  const passKey = `${process.env.PASS_KEY}`;

  // request body from the frontend
  const phone = req.body.phone.substring(1);
  const amount = req.body.amount;

  const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);

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
    AccountReference: "Seedlings by Mwalim Unlimited - p.Gitonga",
    TransactionDesc: "Mpesa Payment Service",
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    res.status(200).json(response.data);

    return console.log(response.data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = stkPush;
