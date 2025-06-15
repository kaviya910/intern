async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  if (!city) {
    alert("Please enter a city name.");
    return;
  }
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    document.getElementById('weatherResult').innerText = error.message;
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;
  document.getElementById('weatherResult').innerHTML = `
    <strong>${name}</strong><br>
    Temperature: ${main.temp}°C<br>
    Weather: ${weather[0].description}
  `;
}
