let paragraphForResponse = document.getElementById("errorMessage");
(function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        paragraphForResponse.innerHTML = "Geolocation is not supported by this browser.";
    }
  })();
  
  function showPosition(position) {
    console.log(position);
    paragraphForResponse.innerHTML =
      `Latitude: ${position.coords.latitude} 
      <br>Longitude: ${position.coords.longitude}`;
  }