document.getElementById('search').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityName = document.getElementById('city_name').value;

    if (!cityName) {
        return showAlert("Você precisa digitar uma cidade...");
    }

    const apiKey = '682c8449a1a616673867316644b310b8';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&Lang=pt_br`;

    const results = await fetch(apiUrl);
    const json = await results.json();

    if (json.cod === 200){
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min,
            description: json.weather[0].description,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            humidity: json.main.humidity
                
        })
    } else {
        showAlert("Não foi possível localizar...");
    }

});

function showInfo(json) {
    showAlert('');

    document.getElementById('weather').classList.add('show');

    document.getElementById('title').innerHTML = `${json.city}, ${json.country}`;
    document.getElementById('temp_value').innerHTML = `${json.temp.toFixed(1).toString().replace('.',',')} <sup>Cº</sup>`;
    document.getElementById('temp_description').innerHTML = `${json.description}`;
    document.getElementById('temp_img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);

    document.getElementById('temp_max').innerHTML = `${json.tempMax.toFixed(1).toString().replace('.',',')} <sup>Cº</sup>`;
    document.getElementById('temp_min').innerHTML = `${json.tempMin.toFixed(1).toString().replace('.',',')} <sup>Cº</sup>`;
    document.getElementById('humidity').innerHTML = `${json.humidity}`;
    document.getElementById('wind').innerHTML = `${json.windSpeed.toFixed(1)}km/h`;
}




function showAlert(msg) {
    document.getElementById('alert').innerHTML = msg;
}