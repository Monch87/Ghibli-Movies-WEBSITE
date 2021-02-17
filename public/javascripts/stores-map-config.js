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
      for (let i = 0; i < results.length; i++) {
        const photoURL =
          results[i].photos && results[i].photos[0]
            ? results[i].photos[0].getUrl({ maxHeight: 100 })
            : "https://i.pinimg.com/originals/a4/fa/8c/a4fa8c0588f96c91989308c2448b095a.png";

        displayDetails(
          results[i].name,
          results[i].formatted_address,
          results[i].place_id,
          photoURL
        );

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

function displayDetails(name, address, place_id, photoURL) {
  const resultHMTL = `<a href="https://www.google.com/maps/place/?q=place_id:${place_id}" target="_blank" rel="noopener noreferrer">

  <div class="row">
  <div class="col-4 col-md-12 col-lg-4 my-auto store-img">
    <img src="${photoURL}" alt="">
  </div>
  <div class="col-8 col-md-12 col-lg-8">
      <p>${name}</p>
      <p>${address}</p>
  </div>
</div>
  
  </a>
  
<hr>`;
  document.querySelector(".search-results").innerHTML += resultHMTL;
}
