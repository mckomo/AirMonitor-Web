import GoogleMapsLoader from 'google-maps';

const mountMap = (google, params) => {
  const map = new google.maps.Map(params.wrapper, {
    center: params.center,
    zoom: params.zoom
  });

  params.markers.forEach(params => {
    const position = {
      lat: params.get('latitude'),
      lng: params.get('longitude'),
    };

    const marker = new google.maps.Marker({
      position: position,
      map: map,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <h4>${params.get('name')}</h4>
        <strong>Kod:</strong> ${params.get('code')}`
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  });
};

export function loadGoogleMap(params) {
  GoogleMapsLoader.load(google => {
    mountMap(google, params);
  });
}