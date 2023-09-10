const input = document.querySelector("input");
const button = document.querySelector("button");
const temp = document.querySelector(".temp");
const locationOutput = document.querySelector(".location"); 

async function getTemp() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=e85ba524ea4a4f8a84a21032230909&q=${input.value}&aqi=no`, { mode: "cors"});
    const json = await response.json();
    
    console.log(json);
    temp.innerText = `${json.current.temp_f}°F`;
    locationOutput.innerText = `${json.location.name}`;
}

button.addEventListener("click", getTemp);