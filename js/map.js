//Function shows marks 4 locations on the map, with the centre showing the general Chernobyl/Pripyat area
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: { lat: 51.394626, lng: 30.07513 },
  });

  var labels = "ABCD";
  var locations = [
    { lat: 51.389435, lng: 30.099635 },
    /*Reactor 4*/
    { lat: 51.408113, lng: 30.055636 },
    /*Pripyat Amusement park*/
    { lat: 51.305685, lng: 30.066674 },
    /*Duga radar*/
    { lat: 51.403957, lng: 30.183603 },
    /*Red forest*/
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
