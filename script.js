const form = document.querySelector(".form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const getApi = async function () {
    const key = "7247fbd9950a38f368f15df395411d31";
    const city = document.querySelector(".input-data").value;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      );
      const data = await res.json();
      console.log(data);
      renderWeatherData(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  getApi();
});
function renderWeatherData(data) {
  const tempData = data.main.temp;
  const tempCal = (tempData - 273.15).toFixed(2);
  const htmlContent = `
  <h2>${data.name}</h2>
  <p>Temperature: ${tempCal}°C</p>
  <p>Weather: ${data.weather[0].description}</p>
  `;
  document.querySelector(".content").innerHTML = htmlContent;
}
