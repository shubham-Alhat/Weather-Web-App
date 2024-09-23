
let APIKEY = "fc7e61fbd9ad70c8693091b0084a9073";

let content = document.querySelector(".content");
let button = document.querySelector(".logo");
let input = document.getElementById("search_bar");
let image = document.querySelector("img");
let weather = document.querySelector(".weather");
let temperature = document.querySelector(".temp");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

button.addEventListener("click",() => {
    getData();
    
});

async function getData(){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${APIKEY}&units=metric`);
    let data = await response.json();

    if(data.cod == "404"){
        content.style.display = "none";
        alert("You entered invalid name");
    }
    else{
        let icon = data.weather[0].icon;
        image.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        weather.innerText = data.weather[0].description;
        temperature.innerText = `${data.main.temp} \u00B0C`;
        city.innerText = data.name;
        humidity.innerText = `Humidity : ${data.main.humidity}%`;
        wind.innerText = `Wind Speed : ${data.wind.speed} m/s`;
        content.style.display = "flex";
    }
    

}







