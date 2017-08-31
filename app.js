var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('./dbcon.js');




var request = require('request');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.get('/users',function(req,res,next){
    var context = {};

    context.name = 'Pethandler';
    console.log('you are in app get users');
    res.render('petlost', context);

});

app.get('/insert', function(req,res,next){
    var context = {};
    console.log("i'm in the insert function line 45");
    context.name = 'Pethandler';
    mysql.pool.query("INSERT INTO pets_found (species, breed, color1, color2, color3, gender, approx_size, pet_name, date_found) VALUES (?,?,?,?,?,?,?,?,?)", [req.query.species, req.query.breed, req.query.color1, req.query.color2, req.query.color3, req.query.gender, req.query.size, req.query.pet_name, req.query.date_found], function(err, result){
		//mysql.pool.query("INSERT INTO pets_found (species, breed, color1, color2, color3, gender, approx_size, pet_name, date_found) VALUES ('dog', 'lab', 'brown', 'chocolate', 'dark brown', 'male', 'large', 'Mr. Doggo', '2017-06-07')", function(err, result){
		if(err){//debugging:  to remove the backticks from `pets_found`; my old cs290 project didn't have them
			next(err);
			return;
		}
    console.log('you are in app /insert');
    res.render('petlost', context);     //*****bug alert*************
    });
});

app.get('/insertLost', function(req,res,next){
    var context = {};
    console.log("i'm in the insertLost function line 60");
    context.name = 'Pethandler';
    mysql.pool.query("INSERT INTO pets_lost (species, breed, color1, color2, color3, weight, gender, approx_size, pet_name, date_lost, owner_name, owner_phone) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", [req.query.species, req.query.breed, req.query.color1, req.query.color2, req.query.color3, req.query.weight, req.query.gender, req.query.size, req.query.pet_name, req.query.date_lost, req.query.owner_name, req.query.owner_phone], function(err, result){
		//mysql.pool.query("INSERT INTO pets_found (species, breed, color1, color2, color3, gender, approx_size, pet_name, date_found) VALUES ('dog', 'lab', 'brown', 'chocolate', 'dark brown', 'male', 'large', 'Mr. Doggo', '2017-06-07')", function(err, result){
		if(err){//debugging:  to remove the backticks from `pets_found`; my old cs290 project didn't have them
			next(err);
			return;
		}
    console.log('you are in app /insertLost');
    res.render('petlost', context);     //***bug alert****
    });
});

app.get('/search', function(req,res,next){
    var context = {};
    console.log("i'm in the search function line 75");
    context.name = 'Pethandler';
    mysql.pool.query("SELECT lid, species, breed, color1, color2, color3, gender, approx_size, pet_name, date_found FROM pets_found", function(err, rows, fields){
		//mysql.pool.query("INSERT INTO pets_found (species, breed, color1, color2, color3, gender, approx_size, pet_name, date_found) VALUES ('dog', 'lab', 'brown', 'chocolate', 'dark brown', 'male', 'large', 'Mr. Doggo', '2017-06-07')", function(err, result){
		if(err){//debugging:  to remove the backticks from `pets_found`; my old cs290 project didn't have them
			next(err);
			return;
		}
		
		var list = [];
    for(var cell in rows){
	  list.push({'id': rows[cell].lid, 'species': rows[cell].species, 'breed':rows[cell].breed, 'color1':rows[cell].color1, 'color2':rows[cell].color2, 'color3':rows[cell].color3, 'gender':rows[cell].gender, 'approx_size':rows[cell].approx_size, 'pet_name':rows[cell].pet_name, 'date_found':rows[cell].date_found});
   }
   context.pets = list;
   console.log(list);
    console.log('you are in app /search');
    res.render('searchresult', context);     //debugging: try removing this line
    });
});


app.get('/recover', function(req,res,next){
    var context = {};
    console.log("i'm in the recover function line 98");
    context.name = 'Pethandler';
    mysql.pool.query("SELECT * FROM pets_lost", function(err, rows, fields){
		
		if(err){
			next(err);
			return;
		}
		
		var list = [];
    for(var cell in rows){
	  list.push({'id': rows[cell].lid, 'species': rows[cell].species, 'breed':rows[cell].breed, 'color1':rows[cell].color1, 'color2':rows[cell].color2, 'color3':rows[cell].color3, 'gender':rows[cell].gender, 'approx_size':rows[cell].approx_size, 'pet_name':rows[cell].pet_name, 'date_lost':rows[cell].date_lost, 'weight':rows[cell].weight, 'owner_name':rows[cell].owner_name, 'owner_phone':rows[cell].owner_phone});
   }
   context.pets = list;
   console.log(context);
    console.log('you are in app /recover');
    //console.log('line 114: ', res.status(200));
    res.render('recoveresult', context);     
    
    });
});

app.get('/deleteFound', function(req,res,next){
    var context = {};
    console.log("i'm in the deleteFound function line 123 id to delete "+req.query.id);
    context.name = "Pethandler";
    mysql.pool.query("DELETE FROM pets_found WHERE lid=?", [req.query.id], function (err, result){
        
        
   
		
		if(err){
			next(err);
			return;
		}
		
		   
    console.log('I shoulda deleted something');
    
    
    mysql.pool.query("SELECT lid, species, breed, color1, color2, color3, gender, approx_size, pet_name, date_found FROM pets_found", function(err, rows, fields){
		
		
		if(err){
			next(err);
			return;
		}
		
		var list = [];
    for(var cell in rows){
	  list.push({'id': rows[cell].lid, 'species': rows[cell].species, 'breed':rows[cell].breed, 'color1':rows[cell].color1, 'color2':rows[cell].color2, 'color3':rows[cell].color3, 'gender':rows[cell].gender, 'approx_size':rows[cell].approx_size, 'pet_name':rows[cell].pet_name, 'date_found':rows[cell].date_found});
   }
   context.pets = list;
   //console.log(context);
    console.log('you are in app /deletefound 152');
    res.render('searchresult', context);     //debugging: try removing this line
    //console.log('anything new happen?');
    
    });
    
    
    
    
    });

});


app.get('/deleteLost', function(req,res,next){
    var context = {};
    console.log("i'm in the deleteLost function line 123 id to delete "+req.query.id);
    context.name = "Pethandler";
    mysql.pool.query("DELETE FROM pets_lost WHERE lid=?", [req.query.id], function (err, result){
        
        
   
		
		if(err){
			next(err);
			return;
		}
		
		   
    console.log('I shoulda deleted something');
    
    
    mysql.pool.query("SELECT lid, species, breed, color1, color2, color3, gender, approx_size, pet_name, date_lost FROM pets_lost", function(err, rows, fields){
		
		
		if(err){
			next(err);
			return;
		}
		
		var list = [];
    for(var cell in rows){
	  list.push({'id': rows[cell].lid, 'species': rows[cell].species, 'breed':rows[cell].breed, 'color1':rows[cell].color1, 'color2':rows[cell].color2, 'color3':rows[cell].color3, 'gender':rows[cell].gender, 'approx_size':rows[cell].approx_size, 'pet_name':rows[cell].pet_name, 'date_lost':rows[cell].date_lost});
   }
   context.pets = list;
   //console.log(context);
    console.log('you are in app /deletelost 152');
    res.render('searchresult', context);     //debugging: try removing this line
    //console.log('anything new happen?');
    
    });
    
    
    
    
    });

});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
