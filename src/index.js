import './styles.css';

const base_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const location = "Singapore";

async function getWeatherForecast(location){
    let response = await fetch(base_URL+location+'/?key='+process.env.VISUALCROSSING_KEY);
    let forecast = await response.json();
    return forecast;
}

const locationInput = document.querySelector("#location-input");
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    getWeatherForecast(locationInput.value).then(renderForecast);
})


const forecastContainer = document.querySelector("#forecast-container");
function renderForecast(forecast){
    forecastContainer.innerText = `
    Today in ${forecast.address} it is ${forecast.currentConditions.conditions}
    Feels like: ${forecast.currentConditions.feelslike}deg Fahrenheit
    Humidity: ${forecast.currentConditions.humidity}%
    Precipitation: ${forecast.currentConditions.precip}mm
    `;
}