import {APIProvider, Map } from '@vis.gl/react-google-maps';

const Gmap = () => {
  const defaultPosition = {lat: 42.114800, lng: 3.144766};

  return (
  <APIProvider apiKey={import.meta.env.VITE_REACT_GOOGLE_MAPS_API_KEY}>
    <Map
      style={{width: '100%', height: '100%'}}
      defaultCenter={defaultPosition}
      defaultZoom={16}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    >
      {/* <Marker
        position={defaultPosition}
      >
        <div style={{color: 'red', fontSize: 20}}>📍</div>
      </Marker> */}
    </Map>
  </APIProvider>
)};

export default Gmap;