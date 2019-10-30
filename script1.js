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
//     lat: Latitude (Degrees).
// lon: Longitude (Degrees).
// sunrise: Sunrise time (HH:MM).
// sunset: Sunset time (HH:MM).
// timezone: Local IANA Timezone.
// station: Source station ID.
// ob_time: Last observation time (YYYY-MM-DD HH:MM).
// datetime: Current cycle hour (YYYY-MM-DD:HH).
// ts: Last observation time (Unix timestamp).
// city_name: City name.
// country_code: Country abbreviation.
// state_code: State abbreviation/code.
// pres: Pressure (mb).
// slp: Sea level pressure (mb).
// wind_spd: Wind speed (Default m/s).
// wind_dir: Wind direction (degrees).
// wind_cdir: Abbreviated wind direction.
// wind_cdir_full: Verbal wind direction.
// temp: Temperature (default Celcius).
// app_temp: Apparent/"Feels Like" temperature (default Celcius).
// rh: Relative humidity (%).
// dewpt: Dew point (default Celcius).
// clouds: Cloud coverage (%).
// pod: Part of the day (d = day / n = night).
// weather: {
// icon:Weather icon code.
// code:Weather code.
// description: Text weather description.
// }
// vis: Visibility (default KM).
// precip: Liquid equivalent precipitation rate (default mm/hr).
// snow: Snowfall (default mm/hr).
// uv: UV Index (0-11+).
// aqi: Air Quality Index [US - EPA standard 0 - +500]
// dhi: Diffuse horizontal solar irradiance (W/m^2) [Clear Sky]
// dni: Direct normal solar irradiance (W/m^2) [Clear Sky]
// ghi: Global horizontal solar irradiance (W/m^2) [Clear Sky]
// solar_rad: Estimated Solar Radiation (W/m^2).
// elev_angle: Solar elevation angle (degrees).
// h_angle: Solar hour angle (degrees).
// ]
      
    
    
    getWeather(city)
      .then(response => response.json())
      .then(data => {
        console.log(data.data[0]);
        
        let path = data.data[0];
        header2.textContent = `Weather in ${path.city_name}, ${path.country_code}. Time zone - ${path.timezone}`;
        header.append(header2);
        current.innerHTML =`
        Temperature : ${path.temp} Celsius degree
        <br>Feels Like: ${path.app_temp} Celsius degree

        <br>Weather description: ${path.weather.description}
        <br>Pressure: ${path.wind_spd} mb
        <br>Wind speed: ${path.wind_spd} m/s
        <br>Wind direction: ${path.wind_dir} degrees
        <br>Verbal wind direction: ${path.wind_cdir_full} degrees
        <br>Relative humidity: ${path.rh} %
        <br>Cloud coverage: ${path.clouds} %`
        
        ;
        // app_temp: Apparent/"Feels Like" temperature (default Celcius).
       // sunrise: Sunrise time (HH:MM).
       //pres: Pressure (mb).
        // wind_spd: Wind speed (Default m/s).
        // wind_dir: Wind direction (degrees).
        // wind_cdir_full: Verbal wind direction.

        // rh: Relative humidity (%).
        // clouds: Cloud coverage (%).
        // weather: {
// icon:Weather icon code.
// code:Weather code.
// description: Text weather description.
// }
      });
  }
  
  
 