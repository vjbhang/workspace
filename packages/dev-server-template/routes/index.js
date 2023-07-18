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

router.get("/getMarkers", function (req, res, next) {
  console.log("sending markers");
  res.send([
    {
      latlng: { latitude: 37.51774616864996, longitude: 126.98588616412374 },
      title: "페이커 클라이밍",
    },
    {
      latlng: { latitude: 37.51295833668051, longitude: 126.9996873455241 },
      title: "반포 클라이밍",
    },
    {
      latlng: { latitude: 37.49123965404524, longitude: 126.99878669125415 },
      title: "서리풀 클라아머즈",
    },
    {
      latlng: { latitude: 37.51670856968423, longitude: 126.98363972604112},
      title: "하나뱅크 클라이밍"
    }
  ]);
});

module.exports = router;
