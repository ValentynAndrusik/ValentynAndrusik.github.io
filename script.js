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
    let city = input.value;
    const range = new Range();
    const container = document.getElementById("container");
    const header = document.getElementById("header");
    const informationsAboutWeather = document.getElementById("informationsAboutWeather");
    const icon = document.getElementById("icon");
    
    
    range.selectNodeContents(informationsAboutWeather);
    range.deleteContents();
    range.selectNodeContents(header);
    range.deleteContents();
    range.selectNodeContents(icon);
    range.deleteContents();
    
    const header2 = document.createElement("h2");

    getWeather(city)
      // try{
      .then(response => response.json())
      // }
      // catch(err){
      //   alert("enter correct name");
      // }
      .then(data => {
        if(data.data){
          let path = data.data[0];
          let iconCode = path.weather.icon;
          const urlForIcon =`https://www.weatherbit.io/static/img/icons/${iconCode}.png`;
          const createIcon = document.createElement('img');
          container.setAttribute("class", "container")
          createIcon.src = urlForIcon;
          icon.appendChild(createIcon);

          console.log(data.data[0]);
          
          header2.textContent = `Weather in ${path.city_name}, ${path.country_code}. Time zone - ${path.timezone}`;
          header.append(header2);
          informationsAboutWeather.innerHTML =`
          <span class ="parameters">Weather description:</span> ${path.weather.description}
          <br><span class ="parameters">Temperature:</span> ${path.temp} Celsius degree
          <br><span class ="parameters">Feels Like:</span> ${path.app_temp} Celsius degree
          <br><span class ="parameters">Sunrise time:</span> ${path.sunrise} (HH:MM)
          <br><span class ="parameters">Pressure:</span> ${path.wind_spd} mb
          <br><span class ="parameters">Wind speed:</span> ${path.wind_spd} m/s
          <br><span class ="parameters">Wind direction:</span> ${path.wind_dir} degrees
          <br><span class ="parameters">Verbal wind direction:</span> ${path.wind_cdir_full} degrees
          <br><span class ="parameters">Relative humidity:</span> ${path.rh} %
          <br><span class ="parameters">Cloud coverage:</span> ${path.clouds} %`;
      } else {
        // header2.textContent = `Please enter city`;
        // header2.setAttribute("class", "error");
        // header.append(header2);
        alert(`Please enter city`);
      }
     })
     
  }
  
  
 