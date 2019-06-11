const API_KEY = "wERatbiKMdXsh53Pdl12e9naEQYeLS0l";

const getCity = async (location) => {
    
    const BASE_URL = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${API_KEY}&q=${location}`;

    const response = await fetch(BASE_URL + query);

    const data = await response.json();

    return data[0];
}

const getWeather = async (locationId) => {

    const BASE_URL = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${locationId}?apikey=${API_KEY}`;

    const response = await fetch(BASE_URL + query);
    const data = await response.json();

    return data[0];
}

getCity("Sid").then(data => {
    return getWeather(data.Key);
}).then(data => {

}).catch(err => console.log(err));