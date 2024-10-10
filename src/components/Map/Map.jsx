import React from 'react'
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";


const containerStyle = {
  width: '800px',
  height: '600px'
};

const center = {
 // lat: -3.745,
 // lng: -38.523
 //lat: -33.8600, 
 //lng: 151.2090 
 lat: 48.852737, 
 lng: 2.350699 
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
   
  })

  const [ , setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        defaultCenter={center}
        defaultZoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)