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
	heading:'Education',
	date:'dec 12,2016',
	content:`
	 <p>
	  Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include storytelling, discussion, teaching, training, and directed research. Education frequently takes place under the guidance of educators, but learners may also educate themselves.Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.</p>
	 <p> Education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.A right to education has been recognized by some governments, including at the global level: Article 13 of the United Nations' 1966 International Covenant on Economic, Social and Cultural Rights recognizes a universal right to education.n most regions education is compulsory up to a certain age.
	  </p>  `
	

},
//ARTICLE 2
    'articleTwo':{
	title:'Article Two',
	heading:'Food',
	date:'dec 13,2016',
	content:`
	 <p>
	  Food is any substance consumed to provide nutritional support for the body. It is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth.Historically, people secured food through two methods: hunting and gathering and agriculture. Today, the majority of the food energy required by the ever increasing population of the world is supplied by the food industry.Food safety and food security are monitored by agencies like the International Association for Food Protection, World Resources Institute, World Food Programme, Food and Agriculture Organization, and International Food Information Council. They address issues such as sustainability, biological diversity, climate change, nutritional economics, population growth, water supply, and access to food.The right to food is a human right derived from the International Covenant on Economic, Social and Cultural Rights (ICESCR), recognizing the "right to an adequate standard of living, including adequate food", as well as the "fundamental right to be free from hunger".
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
<html lang="en">
<head>
  <title>${title}</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="/ui/style.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </head>
<body>
<div class="container-fluid">
  <div class="row content">
    <div class="col-sm-3 sidenav">
    </div>
    <div class="btn pull-right">
        <a href="/" class="btn btn-success" role="button">Home</a>
    <a href="/signup" class="btn btn-info" role="button">Signup</a>
</div>
<div class="col-sm-9">
      
      <hr>
      <h2>${heading}</h2>
      <h5><span class="glyphicon glyphicon-time"></span> Post by Saikrishna, ${date}.</h5>
      <h5><span class="label label-danger">Food</span> <span class="label label-primary">Ipsum</span></h5><br>
      <div>
	  ${content}
	  </div>
      <br><br>
      <h4>Leave a Comment:</h4>
      <form role="form">
        <div class="form-group">
          <textarea class="form-control" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
      <br><br>
      </div>
<hr>

      
	  
	  </div>
	  </div>
	  <footer class="container-fluid">
  <p>Footer Text</p>
</footer>
</body>
</html>
`;

return template;
}


app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/login', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});

app.get('/signup', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'signup.html'));
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