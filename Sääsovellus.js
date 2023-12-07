  function getCurrentLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;

              // Haetaan koordinaattien avulla käyttäjän lähin kaupunki

              const reverseGeocodeUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

              fetch(reverseGeocodeUrl)
                .then((response) => response.json())
                .then((locationData) => {
        
                  const cityName =
                    locationData.address.city 
                    locationData.address.town 
                    locationData.address.village ||
                    locationData.address.suburb;

                  // Tarkistaa kaupungin sään nimen mukaan

                  checkWeather(cityName);
                })
                .catch((error) => {
                  console.error(
                    "Error fetching reverse geocoding data:",
                    error
                  );
                });
            },
            (error) => {
              console.error("Error getting location:", error);
            }
          );
        } else {
          alert("Geolocation is not supported by your browser.");
        }
      }
    
sää();