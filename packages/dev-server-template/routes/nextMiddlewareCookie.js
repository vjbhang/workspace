const express = require("express");
const router = express.Router();

router.post("/authenticate", function (req, res) {
  console.log("-------------------");
  const { sessionID } = req.body;
  console.log("req.body:", req.body);
  console.log(
    "req.sessionStore.sessions in /authenticate:",
    req.sessionStore.sessions
  );
  console.log("received session id:", sessionID);
  console.log("sessionID:", req.sessionID);
  console.log(
    "is session in memorystore?:",
    req.sessionStore.sessions[sessionID]
  );

  if (req.sessionStore.sessions[sessionID])
    res.status(200).json({
      sessionID: req.sessionID,
      msg: "Same session id",
      isAuthenticated: true,
      account: "bhangjiwon",
    });
  else
    res.status(200).json({
      msg: "Not authenticated",
      sessionID: req.sessionID,
      isAuthenticated: false,
    });
});

router.post("/login", function (req, res) {
  console.log(req.sessionID);
  console.log("body:", req.body);
  const { username, password } = req.body;
  if (username && password) {
    if (req.session.isAuthenticated) {
      console.log("exists!");
      res.json({
        sessionID: req.sessionID,
        msg: "authenticated",
        isAuthenticated: true,
      });
    } else {
      if (username === "bhangjiwon" && password === "123") {
        console.log("exists!");
        req.session.isAuthenticated = true;
        req.session.user = {
          username,
          password,
        };
        res.json({
          sessionID: req.sessionID,
          msg: "authenticated",
          isAuthenticated: true,
        });
      } else {
        res
          .status(403)
          .json({ msg: "Bad Credentials", isAuthenticated: false });
      }
    }
  } else res.status(403).json({ msg: "Bad Credentials", isAuthenticated: false });
  res.status(200);
});

router.post("/logout", function (req, res, next) {
  const { sessionID } = req.body;
  req.sessionStore.destroy(sessionID);
  console.log("req.sessionStore but destroyed:", req.sessionStore);
  res.json({ msg: "destroying session", isAuthenticated: false });
});

module.exports = router;
