var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require("express-session"); 
var logger = require('morgan');

const db = require('./database/models');

//var indexOriginalRouter = require('./routes/index');
var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var usersRouter = require('./routes/users');
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
  saveUninitialized: true}
));

const privateRoutes = [
  "/profileEdit" , "/profile/:id", "/productAdd/:id" ,  '/productEdit/:id' /*agregar todas */
]

//lo que hace este middle es: si no hay sesion, pero hay cookie hace como si se loqueara el usuario.
app.use(function(req, res, next){
  if(req.cookies.userId != undefined && req.session.user == undefined){
    db.User.findByPk(req.cookies.userId)
    .then( user => {
      req.session.user = user;
      return next();
    })
    .catch( e => { next(createError(e.status)) })
  } else {
    next()
  }
})

app.use(function(req, res, next){
  if(req.session.user != undefined){
    res.locals.user = req.session.user
  }
  next(); /*con el next me aseguro que el codigo termina de ejecutar middle*/
});


app.use('/', indexRouter);
app.use('/product', productsRouter);
app.use('/users', usersRouter);
app.use('/', securityRouter);


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

// flash

const {flash} = require('express-flash-message')
app.use (flash({sessionKetName: 'miSession'}))

app.use(async function (req, res, next) {
  res.locals.flash = {
  success: await req.consumeFlash('success'),
  info: await req.consumeFlash('info'),
  danger: await req.consumeFlash('danger'),
  warning: await req.consumeFlash('warning'),
}
next();
});


module.exports = app;
