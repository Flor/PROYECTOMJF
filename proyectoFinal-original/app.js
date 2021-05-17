var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require("express-session"); 
var logger = require('morgan');

//var indexOriginalRouter = require('./routes/index');
var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var usersRouter = require('./routes/users');
var commentsRouter = require('./routes/comments');
var securityRouter = require("./routes/security");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(
  {secret: "moviesdb",
  resave: false,
  saveUnitialized: true}
));

const publicRoutes = [
  "/login" , "/register"
]

app.use(function(req, res, next){
  if(req.session.user != undefined){
    res.locals = req.session.user
    next();
  } else {
    if (!publicRoutes.includes(req.path)) { /*si no le pongo esto seria un loop infinito*/
      return res.redirect("/login")
    }
  }
  next(); /*con el next me aseguro que el codigo termina e ejecutar middle*/
});


app.use('/', indexRouter);

app.use('/product', productsRouter);

app.use('/users', usersRouter);

app.use('/comments', commentsRouter);

app.use("/", securityRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
