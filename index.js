const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

// cors
const corsOptions = {
  origin:'*', 
  credentials:true,            // access-control-allow-credentials:true
  optionSuccessStatus:200,
}
app.use(cors(corsOptions));

// rate limiter
const limiter = rateLimit({
  windowMS: 5 * 60 * 1000, // 5 mins
  max: 5,
});
app.use(limiter);
app.set("trust proxy", 1);

// routes
app.use("/api", require("./routes"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
