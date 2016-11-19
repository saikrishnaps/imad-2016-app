var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

 
/* CREATING TEMPLATE*/

//ARTICLE 1
var articles={
    'articleOne':{
	title:'Article One',
	heading:'Article ONE',
	date:'dec 12,2016',
	content:`
	 <p>
	  why this problem occurs every time. i dont what is the problem with my app, two apps are running parallel
	  </p>  `
	

},
//ARTICLE 2
    'articleTwo':{
	title:'Article Two',
	heading:'Article TWO',
	date:'dec 13,2016',
	content:`
	 <p>
	  why this problem occurs every time. i dont what is the problem with my app, two apps are running parallel
	  </p>  `
	

},
 //ARTICLE 3
    'articleThree':{
	title:'Article Three',
	heading:'Article Three',
	date:'dec 15,2016',
	content:`
	 <p>
	  why this problem occurs every time. i dont what is the problem with my app, two apps are running parallel
	  </p>
	   `
}
};
//TEMPLATE CODE
function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var template= `
   <html>
  <head>
<title>${title}</title>
<link href="/ui/style.css" rel="stylesheet" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body>
<div id="header">
<a href="/">HOME</a>|<a href="/articleOne">Article1</a>|<a href="/articleTwo">Article2</a>|<a href="/articleThree">Article3</a>
</div>
<hr>
<h3>
${heading}
</h3>
      <div>
	  ${date}
	  </div>
	  <div>
	  ${content}
	  </div>
</body>
</html>
`;

return template;
}


app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/login', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});




var counter=0;
app.get('/counter',function(req, res){
counter = counter + 1;
res.send(counter.toString());
});


 //CODE FOR GETTING VALUES
var names=[];
//app.get('/submit_name/:name',function(req,res){
app.get('/submit_name',function(req,res){
//var name=req.params.name;   //way 1
var name=req.query.name;
names.push(name);
res.send(JSON.stringify(names)); 
});







app.get('/:articleName', function (req, res) {
 var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
 });



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});