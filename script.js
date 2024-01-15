const apiKey = '77143a49cd726600ca2ec04653d30dd7'; 

const cityInput = document.getElementById('cityName');
const weatherForm = document.getElementById('weather-form');

const weatherDataContainer = document.querySelector('.weather-data');


function fetchWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {

      
      const temperature = Math.round(data.main.temp - 273.15); 
      const weatherDescription = data.weather[0].description;
  
      

      
      weatherDataContainer.innerHTML = `
        <p>City: ${city}</p>
        <p>Country: ${data.sys.country}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
      `;
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      weatherDataContainer.innerHTML = '<p>Failed to fetch weather data.</p>';
    });
}
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const city = cityInput.value;
    fetchWeatherData(city);
});

