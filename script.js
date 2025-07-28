const api_key = "6d441a10615006133473c4160895e614";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const s_city = document.querySelector(".search input");
const s_btn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function getWeatherData(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    let data = await response.json();
    // console.log(data)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
        
    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°c`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed}km/hr`;
        
        if(data.weather[0].main == "Clear"){
        weatherIcon.src = 'assert/images/clear.png';
        }
        else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = 'assert/images/clouds.png';
        }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = 'assert/images/rain.png';
        }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = 'assert/images/drizzle.png';
        }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = 'assert/images/mist.png';
        }
        
        
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";

    }



}



// getWeatherData();
s_btn.addEventListener("click", () => {
    getWeatherData(s_city.value);

})
// s_btn.addEventListener("keydown", (e) => {
// if (e.key === "Enter") {
//         getWeatherData(s_city.value);
//     }
// })
s_city.addEventListener("keypress", (e) => {
if (e.key === "Enter") {
        getWeatherData(s_city.value);
    }
})



