   function getCurrentLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;

              // Use the coordinates to fetch the nearest city
              const reverseGeocodeUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

              fetch(reverseGeocodeUrl)
                .then((response) => response.json())
                .then((locationData) => {
                  // Extract the city name from the reverse geocoding response
                  const cityName =
                    locationData.address.city 
                    locationData.address.town 
                    locationData.address.village ||
                    locationData.address.suburb;

                  // Use the city name to fetch weather data
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