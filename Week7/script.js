document.getElementById("search").addEventListener("click", getLocation);

async function getLocation() {
    console.log("getLocation fired!");
    clearData();
    let input = document.getElementById('location').value;
    const url = `https://nominatim.openstreetmap.org/search?q=${input}&format=jsonv2`;
    try {
        const response = await fetch(url);
        if(!response.ok){
            console.log(`Error: Server status is: ${response.status}`);
        }

        const json = await response.json();
        if (json == "") {
            "No search results found, please refine your search.";
        }
        else if (json.length > 1) {
            document.getElementById("locationName").innerHTML = "We found multiple results. Please add one of these to your search.";
            for (let j = 0; j < json.length; j++) {
                document.getElementById("locationName").innerHTML += `<p>${json[j].display_name}</p>`;
            }
        } 
        else {
            getWeather(json[0].lat, json[0].lon);
        };
    } catch (error) { 
        console.error(error.message);
    }
}

async function getWeather(lat, long) {
    console.log(`the lat and long is: ${lat} and ${long}`)
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,weather_code&temperature_unit=fahrenheit`;
    try {
        const response = await fetch(url);
        if(!response.ok){
            console.log(`Error: Server status is: ${response.status}`);
        }

        const json = await response.json();
        generateCard(json.daily, json.current, document.getElementById("location").value);
    } catch (error) { 
        console.error(error.message);
    }
}

function clearData() {
    document.getElementById("weatherCodeNow").innerHTML = "";
    document.getElementById("locationName").innerHTML = "";
    document.getElementById("weatherNow").innerHTML = "";
    document.getElementById("highlow").innerHTML = "";
}

function generateCard(daily, current, input) {
    document.getElementById("weatherCodeNow").innerHTML = generateEmoji(current.weather_code,);
    document.getElementById("locationName").innerHTML = input;
    document.getElementById("weatherNow").innerHTML = `${current.temperature_2m}°F`;
    for(let y = 0; y < 7; y++){
        document.getElementById("highlow").innerHTML += `<div><h5>${daily.time[y]}</h5><span>${generateEmoji(daily.weather_code[y])}</span><strong>High:</strong> ${daily.temperature_2m_max[y]}°F<br/><strong>Low:</strong> ${daily.temperature_2m_min[y]}</div>`;
    }
}

function generateEmoji(weatherCode){
    switch(weatherCode){
    case 0:
      return "☀️"; // Clear sky
    case 1:
    case 2:
    case 3:
      return "🌤️"; // Mainly clear, partly cloudy, and overcast
    case 45:
    case 48:
      return "🌫️"; // Fog and depositing rime fog
    case 51:
    case 53:
    case 55:
      return "🌦️"; // Drizzle: Light, moderate, and dense intensity
    case 56:
    case 57:
      return "🌧️"; // Freezing Drizzle: Light and dense intensity
    case 61:
    case 63:
    case 65:
      return "🌧️"; // Rain: Slight, moderate and heavy intensity
    case 66:
    case 67:
      return "🌨️"; // Freezing Rain: Light and heavy intensity
    case 71:
    case 73:
    case 75:
      return "❄️"; // Snow fall: Slight, moderate, and heavy intensity
    case 77:
      return "🌨️"; // Snow grains
    case 80:
    case 81:
    case 82:
      return "⛈️"; // Rain showers: Slight, moderate, and violent
    case 85:
    case 86:
      return "🌨️"; // Snow showers slight and heavy
    case 95:
      return "⛈️"; // Thunderstorm: Slight or moderate
    case 96:
    case 99:
      return "🌩️"; // Thunderstorm with slight and heavy hail
    default:
      return "🌡️"; // Unknown
    }
}