const API_KEY = "3ad4caf1ea5e3fd20594bd8aee5e3281";

export async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return await response.json();
  } catch (error) {
    console.log("Error fetch weather:", error);
  }
}
