// require module
var connect = require('connect')
 
// create app
var app = connect()

function Aboutme(req,res,next)
{
  res.setHeader('Content-Type', 'Text/Plain');
  res.end('Hello World');

}

function Contactus(req,res,next)
{
  res.setHeader('Content-Type', 'Text/Plain');
  res.end('Good Bye World');

}

app.use('/aboutme',Aboutme);
app.use('/contactus',Contactus);
app.listen(3000);
console.log ('server is running on local host')


