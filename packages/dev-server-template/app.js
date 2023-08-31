var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
var logger = require("morgan");
var session = require("express-session");
const store = new session.MemoryStore();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const nextMiddlewareRouter = require("./routes/nextMiddlewareCookie");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use((req, res, next) => {
  console.log(store);
  next();
});

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(
  session({
    secret: "keyboard cat",
    cookie: { maxAge: 30000 },
    saveUninitialized: false,
    store,
  })
);

app.use("/", indexRouter);
app.use("/next-middleware-cookie", nextMiddlewareRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
