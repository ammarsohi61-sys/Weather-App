async function getWeather() {
  const city = document.getElementById("city").value;

  const apiKey = "YOUR_API_KEY";
  const url =gujrat

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === 200) {
      alert(`Temperature in ${data.name}: ${data.main.temp}°C`);
    } else {
      alert("City not found");
    }
  } catch (err) {
    alert("Error fetching weather");
  }
}