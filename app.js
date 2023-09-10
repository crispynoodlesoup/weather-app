const input = document.querySelector("input");
const button = document.querySelector("button");
const temp = document.querySelector(".temp");
const locationOutput = document.querySelector(".location"); 

let weatherInfo = {};

async function getTemp() {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e85ba524ea4a4f8a84a21032230909&q=${input.value}&aqi=no`, { mode: "cors"});
    const json = await response.json();
    
    console.log(json);
    weatherInfo.tempF = json.current.temp_f;
    weatherInfo.location = json.location.name;
    weatherInfo.icon = json.current.condition.icon;

    applyWeatherInfo();
}

function applyWeatherInfo() {
    temp.innerText = `${weatherInfo.tempF}°F`;
    locationOutput.innerText = `${weatherInfo.location}`;

}

button.addEventListener("click", getTemp);
