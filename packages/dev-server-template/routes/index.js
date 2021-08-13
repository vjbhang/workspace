var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.get("/hello", function (req, res, next) {
  res.send("World");
});

router.get("/getTravelSummary", function (req, res, next) {
  console.log(req.query);
  console.log(req.headers);
  const clientID = req.headers["x-ncp-apigw-api-key-id"];
  const clientSecret = req.headers["x-ncp-apigw-api-key"];
  // res.send(`${clientID}: search: ${JSON.stringify(req.query)}`)

  axios({
    method: "get",
    headers: {
      "X-NCP-APIGW-API-KEY-ID": `${clientID}`,
      "X-NCP-APIGW-API-KEY": `${clientSecret}`,
    },
    url: "https://naveropenapi.apigw.ntruss.com/map-direction-15/v1/driving",
    params: {
      start: `${req.query.start}`,
      goal: `${req.query.goal}`,
    },
  })
    .then(function (response) {
      console.log(response.data);
      console.log(response.status);
      res.json(response.data.route.traoptimal[0].summary);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
