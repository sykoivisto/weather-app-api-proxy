const url = require("url");
const express = require("express");

const router = express.Router();
const needle = require("needle");
const apicache = require("apicache");

const {API_BASE_URL} = process.env;
const {API_KEY_NAME} = process.env;
const {API_KEY_VALUE} = process.env;

const cache = apicache.middleware;

router.get("/", cache("2 minutes"), async (request, response) => {
  try {
    // create the url params
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(request.url, true).query,
    });

    // build the url
    const apiResponse = await needle("get", `${API_BASE_URL}?${params}`);
    const data = apiResponse.body;

    if (process.env.NODE_ENV !== "production") {
      console.log(`REQUEST: ${API_BASE_URL}?${params}`);
    }

    // return the data
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error });
  }
});

module.exports = router;
