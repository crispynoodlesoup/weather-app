const input = document.querySelector("input");
const button = document.querySelector("button");
const temp = document.querySelector(".temp");
const weatherIcon = document.querySelector(".weather-icon");
const locationOutput = document.querySelector(".location");

let weatherInfo = {};

async function getTemp() {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=e85ba524ea4a4f8a84a21032230909&q=${input.value}&aqi=no`,
      { mode: "cors" }
    );
    const json = await response.json();
    console.log(json);
  
    if (json.error) throw json.error.message; // don't continue if bad request
  
    weatherInfo.tempF = json.current.temp_f;
    weatherInfo.location = json.location.name;
    weatherInfo.icon = json.current.condition.icon;
    weatherInfo.condition = json.current.condition.text;
  
    applyWeatherInfo();
  } catch(error) {
    console.log(error);
  }
}

function applyWeatherInfo() {
  temp.innerText = `${weatherInfo.tempF}°F`;
  weatherIcon.src = weatherInfo.icon;
  weatherIcon.alt = weatherInfo.condition;
  locationOutput.innerText = `${weatherInfo.location}`;
}

button.addEventListener("click", getTemp);
