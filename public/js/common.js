console.log('hello node')

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
     response.json().then((data)=>{
     console.log(data);
   });
});
function getWeatherInfo() {
    var coordinates = {
        latitude: '28.5355',
        longitude: '77.3910'
    };
    fetch('http://localhost:3000/weather', 
         {
             method:'post',
             headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify({coordinates})
        }).then((response) =>{
       response.json().then((data) =>{
           console.log(data)
         document.getElementById('weatherInfoText').value = data.weatherInfo.location.name;        
       });
    })
}