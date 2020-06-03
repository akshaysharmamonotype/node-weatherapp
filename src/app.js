var express = require('express');
var path = require('path');
var hbs = require('hbs');
var utils = require('./utils.js');
var bodyParser = require('body-parser');

var port = process.env.PORT  || 3000;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




//Get Paths
var publicPath = path.join(__dirname, '../public');
var templatePath = path.join(__dirname, '../templates/views')
var partialPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs');
app.set('views',templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(publicPath));

app.get('',(request, response)=>{
    response.render('home/index',
           {
               userinfo:{
                   title: 'Weather App', 
                   name:'Node Application Akshay'
                }           
            })
  
});


app.get('/help', (request, response) =>{
    response.render('help',{title:'Help me', message:'Help the handlebar message'})
});

app.get('/about', (request, response) =>{
    response.send('About Page')
});
app.post('/weather', (request, response) =>{
    console.log(request);
    
    var coordinates =  request.body.coordinates;
    utils.getWeather(coordinates, (err, res) =>{
        if(err != null){
            response.send('Some error has occured' + err);

        }else{
            var weatherInfo = res.body;
           response.send(
           {
               userinfo:{
                   title: 'Weather App Page', 
                   name:'Node Application Akshay'
                }, weatherInfo           
            })
        }
    });
});

app.listen(port,()=>{
    console.log('Server is up at port' + port)
})