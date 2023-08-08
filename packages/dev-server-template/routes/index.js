var express = require("express");
var router = express.Router();
var axios = require("axios");

const mockUser = {
  user: "bhangjiwon",
  pw: "123123",
};

/* GET home page. */
router.get("/hello", function (req, res, next) {
  setTimeout(() => {
    res.send("world");
  }, 1500);
});

router.post("/authenticate", function(req, res) {
  console.log("-------------------")
  const {sessionID} = req.body;
  console.log("req.session in /authenticate:", req.sessionStore.sessions);
  console.log("received session id:", sessionID);
  console.log("sessionID:", req.sessionID);
  console.log("session.authenticated:", req.session.authenticated);
  if (sessionID === req.sessionID) res.status(200).json({msg: "Same session id"});
  else res.status(200).json({msg: "Not authenticated", sessionID: req.sessionID});
})

router.post("/login", function (req, res) {
  console.log(req.sessionID);
  const {username, password} = req.body;
  if (username && password) {
    if (req.session.authenticated) {
      res.json(req.session);
    } else {
      if (password === "123") {
        req.session.authenticated = true;
        req.session.user = {
          username, password
        };
        res.json(req.session);
      } else {
        res.status(403).json({msg: "Bad Credentials"})
      }
    }
  } else res.status(403).json({msg: "Bad Credentials"});
  res.status(200);
});

router.get("/logout", function (req, res, next) {
  // logout logic

  // clear the user from the session object and save.
  // this will ensure that re-using the old session id
  // does not have a logged in user
  req.session.user = null;
  req.session.save(function (err) {
    if (err) next(err);

    // regenerate the session, which is good practice to help
    // guard against forms of session fixation
    req.session.regenerate(function (err) {
      if (err) next(err);
    });
  });
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
      latlng: { latitude: 37.51670856968423, longitude: 126.98363972604112 },
      title: "하나뱅크 클라이밍",
    },
  ]);
});

module.exports = router;
