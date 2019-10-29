async function getWeather(city = "Lviv") {
  return await fetch(
    `http://api.weatherstack.com/current?access_key=128e9f062ce7ce0e464f0847488e6ce7&query=${city}`
  );
}

// let arr = ["Observation time : ", "temperature : ", ""];
let arr = [
  "Observation time",
  "Temperature",
  "Weather code",
  "Weather icons",
  "Weather descriptions",
  "Wind speed",
  "Wind degree",
  "Wind dir",
  "Pressure",
  "Precip",
  "Humidity",
  "Cloudcover",
  "Feelslike",
  "Uv index",
  "Visibility",
  "Is day"
];

let submitCity = document.getElementById("submit");
submitCity.addEventListener("click", getCity);

function getCity() {
  let city = document.getElementById("enteredCity").value;
  console.log(city);

  // const container = document.getElementById("container");
  const paragraphsRange = new Range();

  const current = document.getElementById("current");
  const request = document.getElementById("request");

  paragraphsRange.selectNodeContents(current);
  paragraphsRange.deleteContents();
  paragraphsRange.selectNodeContents(request);
  paragraphsRange.deleteContents();
  let i = 0;

  getWeather(city)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      for (keyData in data) {
        console.log(typeof keyData);
        if (keyData === "request") {
          for (keysInsideKeyData in data[keyData]) {
            const paragraph = document.createElement("p");
            paragraph.textContent = `${keysInsideKeyData}: ${data[keyData][keysInsideKeyData]}`;
            request.append(paragraph);
          }
        }
         else if (keyData === "current") {
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


// getWeather(city)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       for (keyData in data) {
//         for (keysInsideKeyData in data[keyData]) {
//           const paragraph = document.createElement("p");
//           paragraph.textContent = `${keysInsideKeyData}: ${data[keyData][keysInsideKeyData]}`;

//           container.append(paragraph);
//         }
//       }
//     });
