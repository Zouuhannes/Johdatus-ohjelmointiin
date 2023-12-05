<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sääsovellus</title>
    <link rel="stylesheet" href="Sääsovellus.css" />
  </head>
  <body>
    <script src="Sääsovellus.js"></script>
    <div class="card">
      <div class="search">
        <input type="text" placeholder="Valitse Kaupunki" spellcheck="false" />
        <button><img src="Kuvat/Hae.jpg" /></button>
      </div>
      <div class="weather">
        <img src="Kuvat/rain.jpg" class="weather-icon" />
        <h1 class="temp">22°c</h1>
        <h2 class="kaupunki">New York</h2>
        <div class="details">
          <div class="col">
            <img src="Kuvat/humidity.jpg" />
            <div>
              <p class="humidity">50%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div class="col">
            <img src="kuvat/wind2.jpg" />
            <div>
              <p class="wind">15 km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script>
      const apiKey = "f38f7eb98d775a523a6213cfd516a561";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);

        document.querySelector(".kaupunki").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
          Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML =
          data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
          weatherIcon.src = "Kuvat/cloudy.jpg";
        } else if (data.weather[0].main == "Clear") {
          weatherIcon.src = "Kuvat/clear.png";
        } else if (data.weather[0].main == "Rain") {
          weatherIcon.src = "Kuvat/rain.jpg";
        } else if (data.weather[0].main == "Drizzle") {
          weatherIcon.src = "Kuvat/drizzle.jpg";
        } else if (data.weather[0].main == "Mist") {
          weatherIcon.src = "Kuvat/mist.jpg";
        } else if (data.weather[0].main == "Snow") {
          weatherIcon.src = "Kuvat/Snow.png";
        } else if (data.weather[0].main == "Rain") {
          weatherIcon.src = "Kuvat/rain.jpg";
        }

        document.querySelector(".weather").style.display = "block";
      }
      searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
      });
    </script>
  </body>
</html>
