//Weather API URL
const api = "https://api.weatherapi.com/v1/current.json?key=3b7880dcde52498ea02133133223012&q="

// API Call
function getData(url){
    fetch(url)
    .then(response => response.json())
    .then(responseJson => {
        //Display weather
        CreateWeatherContainer(responseJson);

    }).catch(response =>{
        //Display error
        WeatherError("Unknown Location");
    })
}

//Create dynamic container for weather
function CreateWeatherContainer(data){
    var container = document.createElement('div');
    container.classList.add("weather-container");

    para = document.createElement('h2');
    para.id = "";
    para.innerText = data.location.region;
    container.appendChild(para);

    para = document.createElement('p');
    para.id = "";
    para.innerText = data.location.country;
    container.appendChild(para);

    para = document.createElement('p');
    para.id = "";
    para.innerText = data.location.localtime;
    container.appendChild(para);

    para = document.createElement('p');
    para.id = "";
    para.innerText = data.current.condition.text;
    container.appendChild(para);

    para = document.createElement('p');
    para.id = "";
    para.innerText = 'Actual - ' + data.current.temp_c + ' \u{00B0}C' + "   |   " + data.current.temp_f + ' \u{00B0}F';
    container.appendChild(para);

    para = document.createElement('p');
    para.id = "";
    para.innerText = 'Feels Like - ' + data.current.feelslike_c + ' \u{00B0}C' + "   |   " + data.current.feelslike_f + ' \u{00B0}F';
    container.appendChild(para);

    para = document.createElement('p');
    para.id = "";
    para.innerText = data.current.humidity + ' %';
    container.appendChild(para);

    para = document.createElement('p');
    para.id = "";
    para.innerText = data.current.wind_mph + ' mph' + "   |   " + data.current.wind_kph + ' kph' ;
    container.appendChild(para);

    para = document.createElement('p');
    para.id = "";
    para.innerText = data.current.wind_degree + ' \u{00B0}' + "   |   " + data.current.wind_dir ;
    container.appendChild(para);

    var elementWrapper = document.createElement("div");
    elementWrapper.classList.add("weather-icon-wrapper");
    para = document.createElement('img');
    para.id = "";
    para.src = "https:" + data.current.condition.icon;
    para.title = data.current.condition.text;
    elementWrapper.appendChild(para);
    container.appendChild(elementWrapper);

    document.getElementById("weather-content").appendChild(container);
}    

//Get weather for location
function GetWeather(){
    var location = document.getElementById("location-input").value;
    document.getElementById("weather-content").innerHTML = "";

    var url = api + location;

    getData(url);
}

//Create error message for unknown location
function WeatherError(type){
    var container = document.createElement('div');
    container.classList.add("weather-container");
    para = document.createElement('h2');
    para.id = "";
    switch (type) {
        case "Unknown Location":
            para.innerText = "Error - Cannot find location!";
            break;
    
        default:
            para.innerText = "Error!";
            break;
    }

    
    container.appendChild(para);

    document.getElementById("weather-content").appendChild(container);
}

//On Load
function OnLoad(){ 
      getData(api + "London")
}

//Execute OnLoad
OnLoad();
