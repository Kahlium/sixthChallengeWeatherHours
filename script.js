//API key cb3d45c4f69eaeaed96e4308e4f6d9cb
const city = document.getElementById("city")
const weatherButton = document.getElementById("getWeather")

function weatherFetch() {
    let cityName = localStorage.getItem('city')
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=cb3d45c4f69eaeaed96e4308e4f6d9cb`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}

weatherButton.addEventListener("click", function(event)
{
    event.preventDefault();
    localStorage.setItem("city", city.value)

    weatherFetch();
});