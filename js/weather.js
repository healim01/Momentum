const API_KEY = "434f863823f4faa77e10d6893d0d3b21";


function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather div:first-child");
        const city = document.querySelector("#weather div:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
        city.innerText = data.name;
    });
}
function onGeoError(){
    alert("I can't find where are you!");
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);