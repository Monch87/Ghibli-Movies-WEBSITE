var map;
var service;
var infowindow;

function initMap() {
  var sydney = new google.maps.LatLng(40.422682750576506, -3.7072195579467304);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 15
  });

  var request = {
    query: "ghibli merchandising",
    fields: ["name", "geometry", "place_id"],
    location: sydney,
    radius: 30
  };

  var service = new google.maps.places.PlacesService(map);

  service.textSearch(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      //console.log(results);
      for (var i = 0; i < results.length; i++) {
        //console.log(results[i].name);
        getUserPosition(map);
        createMarker(
          results[i].geometry.location.lat(),
          results[i].geometry.location.lng(),
          results[i].name
        );
      }
    }
  });
}

function createMarker(lat, lng, title) {
  const position = { lat, lng };
  new google.maps.Marker({ position, map, title });
}

function getUserPosition(map) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(center);
    });
  }
}
