const cityForm = document.querySelector("form");
const card = document.querySelector(".card");

const cityName = document.querySelector(".details__city-name");
const currentWeather = document.querySelector(".details__conditions");
const currentTemperature = document.querySelector(".details__temperature");

const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");


const updatedUI = (data) => {

const {locationDetails, weather} = data;

cityName.textContent = `${locationDetails.EnglishName}`;
currentWeather.textContent = `${weather.WeatherText}`;
currentTemperature.textContent = `${weather.Temperature.Metric.Value}`;

// Icon images

const iconSource = `img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute("src", iconSource);

}

const updateLocation = async (location) => {

    const locationDetails = await getCity(location);
    const weather = await getWeather(locationDetails.Key);

    return {locationDetails, weather};
}

cityForm.addEventListener("submit", (e) => {
    
    e.preventDefault();

    const location = cityForm.city.value.trim();

    cityForm.reset();

    updateLocation(location)
    .then(data => updatedUI(data))
    .catch(err => console.log(err)); 
    
});
