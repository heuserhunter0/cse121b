const apiKey = '77ae4e9df55df5bd8d6658d7fb18930a';
const weatherInfoElement = document.getElementById('weatherInfo');

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      displayError();
    });
}

function displayWeather(data) {
  const cityName = data.name;
  const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
  const weatherDescription = data.weather[0].description;

  const weatherHTML = `
    <h2>${cityName}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${weatherDescription}</p>
  `;

  weatherInfoElement.innerHTML = weatherHTML;
}

function displayError() {
  weatherInfoElement.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
}