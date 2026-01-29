import './styles.css';

const base_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const location = "Singapore";

async function getWeatherForecast(location){
    let response = await fetch(base_URL+location+'/?key='+process.env.VISUALCROSSING_KEY);
    let forecast = await response.json();
    return forecast;
}

getWeatherForecast(location).then(forecast => console.log(forecast));