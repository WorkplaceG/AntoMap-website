function initMap() {
  /**
   * Location Markers
   */
  const markers = [
    {
      locationName: "Funny D Drive In ",
      lat: 47.66207581057644,
      lng: -122.32773169094062,
      address: "111 NE 45th St, <br>Seattle, <br> over yonder ",
    },
    {
      locationName: "Susans place to sell Mats",
      lat: 47.65713674669197,
      lng: -122.33116197681008,
      address: "4102 Corliss Ave N, <br> Seattle, <br> scream softly here",
    },
    {
      locationName: "Hardor offers you a haven",
      lat: 47.654679653292845, 
      lng: -122.32925224398753
      address: "3909 Eastern Ave N, <br> Seattle, <br> could be a nice homeless stop",
    },
    {
      locationName: "Irwin knows how to bake!",
      lat: 47.655807039913086, 
      lng: -122.3326210985172
      address: "2123 N 40th St, <br>Seattle, <br>dont come here if you not ready for Irwin",
    }
   
  ];

  const fehMarker = 'http://127.0.0.1:5173/';
  const centerMap = { lat: 47.6587807, lng: -122.3344694 };

  const mapOptions = {
    center: centerMap,
    zoom: 10,
    disableDefaultUI: true,
  }
  const map = new google.maps.Map(
    document.getElementById("google-map"),
    mapOptions
  );

  const infoWindow = new google.maps.infoWindow({
    minWidth: 200,
    maxWidth: 200

  });

  const bounds = new google.mapsLatLngBounds();

  /**
   * Loop through all markers
   */
  for(let i = 0; i < markers.length; i++) {

    const marker = new google.maps.Marker( {
    position: { lat: markers [i] ['lat'], lng: markers [i] ['lng'] },
    map: map
    icon:  fehMarker

  });

  function createInfoWindows() {
    const infoWindowContent = `
    <div class= " feh-content">
    <h3>${markers[i] ['locationName']}</h3>
    <address><p>${markers [i] ['adress']}</p>
    </address>
    </div>`;

    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(infoWindowContent);
        infoWindow.open(map, marker);
    });

    
  }

  createInfoWindows();

  infoWindow.addListener('closeclick' , function() {
    map.fitBounds(bounds);

  });


  bounds.extend(new google.maps.LatLng(markers[i]['lat'], markers[i] ['lng']));
    map.fitBounds(bounds);
}

}
