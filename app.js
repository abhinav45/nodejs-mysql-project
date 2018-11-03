var createError = require('http-errors');
var expressValidator=require('express-validator');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');
var passport=require('passport');
var bcrypt = require('bcrypt-nodejs');


var LocalStrategy = require('passport-local').Strategy;

var MySQLStore = require('express-mysql-session')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressValidator());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var options = {
  host:'localhost',
  user:'root',
  password:'',
  port:3325,
  database:'nodeauth'
};

var sessionStore = new MySQLStore(options); 

app.use(session({
  secret: 'lkmklkmjposjoijio',
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
 // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req,res,next){
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);





passport.use(new LocalStrategy(function(username, password, done){
    console.log(username);
    console.log(password);
    var db = require('./db');


    db.query('SELECT id,password FROM studentregistration WHERE username= ?',[username],(err,results,fields)=>{
      if(err) {done(err);
      };

      if(results.length === 0){

           done(null,false);

      }else{
      const hash =results[0].password.toString();

      bcrypt.compare(password, hash, function(err,response){
        if(response===true){
          return done(null, {studentregistration_id:results[0].id});
        }else{
          return done(null,false)
        }
      });
      

    }
      


    });

}));



    
  


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

// Handlebars default config
const hbs = require('hbs');
const fs = require('fs');

const partialsDir = __dirname + '/views/partials';

const filenames = fs.readdirSync(partialsDir);

filenames.forEach(function (filename) {
  const matches = /^([^.]+).hbs$/.exec(filename);
  if (!matches) {
    return;
  }
  const name = matches[1];
  const template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
  hbs.registerPartial(name, template);
});

hbs.registerHelper('json', function(context) {
    return JSON.stringify(context, null, 2);
});

module.exports = app;
