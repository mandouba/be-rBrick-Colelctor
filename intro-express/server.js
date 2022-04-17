// express is a framework that 
// to load expree 

const express = require('express');
const path = require('path');

//create our express app
const app = express();


// //define a root directly on the app 
// app.get('/', function( req, res)  {
//     res.send('<h1>Hello World</h1>');
// });


// app.get('/home', function( req, res)  {
//     res.send('home');
// });
//configue the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



//mount.routes





// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
    console.log('Listening on port 3000');
  });


//configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

// const express = require('express');














// // load express 
// const express = require('express'); // .. whatever  require('express') is exporting it is eing stored in express. 

// //Create our express app 
// const app = express();


// //configure the app (app.set)
// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'));

// // Define  a 'root' route directly on app 
// // tomorrow we will use the best practice routing
// // req and res are short for request and response
// // always have req and res parameters passed in when we define a route 
// // req always comes before the response 

// app.get('/', function(req,res){ // always have req and res parameters when we define a route 
//     res.send('<h1>Hello World!</h1>')
// });

// app.get('/home', function(req,res){ // always have req and res parameters when we define a route 
//     res.render('home')
// });

// //We have to tell the app aka server to listen for a request.
// //Tell the app to listen on port 3000
// // for HTTP requests from clients
// // port is a part of your machine that is open and wokring 
// //
// app.listen(3000, function() {
//     console.log('Listening on port 3000')
// });
// // control c to kill server 
// // nodemon would restart the server for you without the steps of updating by running node server 
// // call back function is a functoin that passes another arguet *check it out* ask justin 
// // Model View Controller 