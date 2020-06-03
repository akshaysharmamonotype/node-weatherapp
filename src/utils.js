var request = require('request');

var key = '254f5643a29f8af5abd50785586e8123';

var getWeather = (coordinates, callback) =>{
    var url = 'http://api.weatherstack.com/current?access_key='+key+'&query='+coordinates.latitude+','+coordinates.longitude+''
 request({url: url, json: true}, (error, response) =>{
     callback(error, response);
 });
};
module.exports = {getWeather};