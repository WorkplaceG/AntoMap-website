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

 
  const centerMap = { lat: 47.6587807, lng: -122.3344694 };

 	const mapOptions = {
		center: centerMap,
		zoom: 12,
		disableDefaultUI: true,
		styles: [
			{
				"featureType": "administrative",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#f3f3f3"
					}
				]
			},
			{
				"featureType": "landscape.natural",
				"elementType": "all",
				"stylers": [
					{
						"color": "#cccccc"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": "0"
					},
					{
						"lightness": "0"
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"weight": "0.49"
					},
					{
						"visibility": "on"
					},
					{
						"saturation": "0"
					},
					{
						"color": "#9a9a9a"
					},
					{
						"gamma": "1.55"
					},
					{
						"lightness": "0"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#c280a3"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					},
					{
						"color": "#a73636"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#cfd0d0"
					},
					{
						"visibility": "on"
					}
				]
			}
		]

	}

	/** 
	* Add map to div, and include above map options
	*/
	const map = new google.maps.Map(document.getElementById("google-map"), mapOptions);

	/** 
	* Create InfoWindow object 
	*/
	const infoWindow = new google.maps.InfoWindow({
		minWidth: 200,
		maxWidth: 200
	});

	/** 
	* Create bounds object
	*/
	const bounds = new google.maps.LatLngBounds();

	/** 
	* Loop through all markers
	*/
	for (let i = 0; i < markers.length; i++) 
	{

		/** 
		* Create new markers
		*/
		const marker = new google.maps.Marker({
			position: { lat: markers[i]['lat'], lng: markers[i]['lng'] },
			map: map,
			icon: fehMarker,
			// animation: google.maps.Animation.DROP
		});

		/** 
		* Function that will create new info windows with info from markers array/objects
		* and click events to open them
		*/
		function createInfoWindows() 
		{
			const infoWindowContent = `
				<div class="feh-content">
					<h3>${markers[i]['locationName']}</h3>
					<address>
						<p>${markers[i]['address']}</p>
					</address>
				<div>
			`;

			google.maps.event.addListener(marker, "click", function ()
			{
				infoWindow.setContent(infoWindowContent);
				infoWindow.open(map, marker);
			}); 
		}
		createInfoWindows();

		/** 
		* Recenter map when an info window is closed
		*/
		infoWindow.addListener('closeclick', function() {
			map.fitBounds(bounds);
		});

		/** 
		* Fit all of our markers on the map, neatly
		*/
		bounds.extend(new google.maps.LatLng(markers[i]['lat'], markers[i]['lng']));		
		map.fitBounds(bounds); 
   }	

}
