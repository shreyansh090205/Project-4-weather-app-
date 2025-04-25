const apiKey = "d688c153b0816e621a9f713d6f10397b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const cityName= document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".Wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{

        let data = await response.json();
    
        cityName.innerText= data.name;
        temperature.innerText = `${Math.round(data.main.temp)}°C`;
        humidity.innerText = `${data.main.humidity}%`;
        wind.innerText = `${data.wind.speed} km/hr`;
    
        if (data.weather[0].main == "Clouds") {
            wIcon.src ="images/clouds.png";
        }else if (data.weather[0].main == "Clear") {
            wIcon.src ="images/clear.png";
        }else if (data.weather[0].main == "Rain") {
            wIcon.src ="images/rain.png";
        }else if (data.weather[0].main == "Drizzle") {
            wIcon.src ="images/drizzle.png";
        }else if (data.weather[0].main == "Mist") {
            wIcon.src ="images/mist.png";
        }else if (data.weather[0].main == "Snow") {
            wIcon.src ="images/snow.png";
        }
    
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display ="none";
    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});

