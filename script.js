//API key cb3d45c4f69eaeaed96e4308e4f6d9cb
const gridContainer = document.querySelector(".gridContainer")
const city = document.getElementById("city")
const weatherButton = document.getElementById("getWeather")

const cityHistory = [];

function weatherFetch() {
    let cityName = localStorage.getItem('city')
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=cb3d45c4f69eaeaed96e4308e4f6d9cb`)
        .then(function (response) {
            return response.json();
        })
        .then(data => { 
            console.log(data);
            createCard(data)
        });
    }

function createCard (data) {

    for (let i = 0; i < 40; i += 8) {

        const weatherCard = document.createElement("div")
        const date = document.createElement("p");
        const weather = document.createElement("img");
        const temperature = document.createElement("p");
        const wind = document.createElement("p");
        const humidity = document.createElement("p");

        weatherCard.append(date, temperature, weather, wind, humidity)
        gridContainer.append(weatherCard)

        date.textContent = data.list[i].dt_txt;
        temperature.textContent = `Temperature C* ${data.list[i].main.temp}`;
        const icon = data.list[i].weather[0].icon;
        weather.setAttribute("src", `http://openweathermap.org/img/w/${icon}.png`)
        wind.textContent = `Wind Speed: ${data.list[i].wind.speed}`;
        humidity.textContent = `Humidity: ${data.list[i].main.humidity}`;
    }
}

weatherButton.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("city", city.value)

    weatherFetch();
});
