//API key cb3d45c4f69eaeaed96e4308e4f6d9cb
const city = document.getElementById("city")
const weatherButton = document.getElementById("getWeather")

const temperature = document.getElementById("temperature")
const weather = document.getElementById("weather")

function weatherFetch() {
    let cityName = localStorage.getItem('city')
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=cb3d45c4f69eaeaed96e4308e4f6d9cb`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let i = 0; i < 5; i++) {
                temperature.textContent = data.list[i].main.temp
                weather.textContent = data.list[i].weather[0].main;
                console.log(data.list[i].weather[0].main);
              }
        });
}

weatherButton.addEventListener("click", function(event)
{
    event.preventDefault();
    localStorage.setItem("city", city.value)

    weatherFetch();
});
