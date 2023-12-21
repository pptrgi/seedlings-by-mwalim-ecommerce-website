const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

const corsOptions = require("./utils/corsOptions.js");

const PORT = process.env.PORT || 2828;

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./route/route"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
