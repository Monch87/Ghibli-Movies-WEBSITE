function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  }
}

function createMarker(lat, lng, title, map) {
  const position = { lat, lng };
  new google.maps.Marker({ position, map, title });
}

function success(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const myLocation = new google.maps.LatLng(lat, lng);

  const mapOptions = {
    center: myLocation,
    zoom: 11.5
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  searchPlaces(myLocation, map);
}

function searchPlaces(center, map) {
  const request = {
    query: "ghibli merchandising",
    fields: ["name", "geometry", "place_id"],
    location: center,
    radius: 30
  };

  const service = new google.maps.places.PlacesService(map);

  service.textSearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        console.log(results[i].name);
        createMarker(
          results[i].geometry.location.lat(),
          results[i].geometry.location.lng(),
          results[i].name,
          map
        );
      }
    }
  });
}
