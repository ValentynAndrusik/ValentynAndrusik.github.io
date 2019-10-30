async function getWeather(city = "Lviv") {
    return await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${city}&key=856f04db3dae40928356fab650022272`
    );
  }
 
  let input = document.getElementById("enteredCity")
  input.addEventListener('keydown', function(e) {
     if (e.keyCode === 13) {
      getCity();
     }
      }
  )
  let submitCity = document.getElementById("submit");
  submitCity.addEventListener("click", getCity);
  
  function getCity() {
    let city = document.getElementById("enteredCity").value;
    console.log(city);

    const paragraphsRange = new Range();
    const current = document.getElementById("current");
    const header = document.getElementById("header");
    paragraphsRange.selectNodeContents(current);
    paragraphsRange.deleteContents();
    paragraphsRange.selectNodeContents(header);
    paragraphsRange.deleteContents();
    
    const header2 = document.createElement("h2");

    getWeather(city)
      .then(response => response.json())
      .then(data => {
        console.log(data.data[0]);
        
        let path = data.data[0];
        header2.textContent = `Weather in ${path.city_name}, ${path.country_code}. Time zone - ${path.timezone}`;
        header.append(header2);
        console.log(path.weather.sunrise);
        current.innerHTML =`
        Temperature : ${path.temp} Celsius degree
        <br>Feels Like: ${path.app_temp} Celsius degree
        <br>Weather description: ${path.weather.description}
        <br>Sunrise time: ${path.sunrise} (HH:MM)
        <br>Pressure: ${path.wind_spd} mb
        <br>Wind speed: ${path.wind_spd} m/s
        <br>Wind direction: ${path.wind_dir} degrees
        <br>Verbal wind direction: ${path.wind_cdir_full} degrees
        <br>Relative humidity: ${path.rh} %
        <br>Cloud coverage: ${path.clouds} %`;
     })
     
  }
  
  
 