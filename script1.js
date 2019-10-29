async function getWeather(city = "Lviv") {
    return await fetch(
      `https://api.weatherbit.io/v2.0/current?city=lviv&key=856f04db3dae40928356fab650022272`
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
  
    // const paragraphsRange = new Range();
  
    // const current = document.getElementById("current");
    // const request = document.getElementById("request");
  
    // paragraphsRange.selectNodeContents(current);
    // paragraphsRange.deleteContents();
    // paragraphsRange.selectNodeContents(request);
    // paragraphsRange.deleteContents();
    let i = 0;
  
    getWeather(city)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        for (keyData in data) {
          if (keyData === "request") {
            const paragraph = document.createElement("p");
            
            paragraph.textContent = `Weather in ${data[keyData].query}`;
            request.append(paragraph)
            
  
          }
           else if (keyData === "current") {
            const icon = document.createElement("img");
            icon.setAttribute('href', data[keyData].weather_icons[0]);
            console.log(data[keyData].weather_icons[0]);
            current.append(icon);
            for (keysInsideKeyData in data[keyData]) {
              const paragraph = document.createElement("p");
              paragraph.textContent = `${arr[i]}: ${data[keyData][keysInsideKeyData]}`;
              current.append(paragraph);
              i++;
            }
          }
        }
      });
  }
  
  
 