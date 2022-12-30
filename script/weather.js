//Weather API URL
const api = "https://api.weatherapi.com/v1/current.json?key=3b7880dcde52498ea02133133223012&q=Belfast"

// API Call
fetch(api)
    .then(response => response.json())
    .then(responseJson => {
        
        CreateWeatherContainer(responseJson);

    });


function CreateWeatherContainer(data){
    var container = document.createElement('div');
    container.classList.add("weather-container");


    para = document.createElement('p');
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

    container.appendChild(CreateIconForCondition(data.current.condition.text));
    //CreateIconForCondition(data.current.condition.text);

    document.getElementById("content-body").appendChild(container);
}    

///Create the icon element based on the condtion text
///Requires fontawesome free
function CreateIconForCondition(condition){

    var elementWrapper = document.createElement("div");
    elementWrapper.classList.add("weather-icon-wrapper");
    
    var element = document.createElement("i");
    element.classList.add("fa-solid")

    elementWrapper.appendChild(element)

    switch (condition) {
        case "Overcast":
            element.classList.add("fa-cloud");
            break;
        case "Partly cloudy":
            element.classList.add("fa-cloud-sun");
            break;
    
        default:
            element.classList.add("fa-question");
            break;
    }

    //document.getElementById("weather-container").appendChild(elementWrapper);
    return elementWrapper;
}

