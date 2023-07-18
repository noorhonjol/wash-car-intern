import { useState, memo } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function MapContainer() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCKIMFw5uOgRLBT2kacsZvFaKe1vVHa7M0"
    })

    const [marker, setMarker] = useState({});

    const handleMapClick = (event) => {
        const { latLng } = event;
        let newMarker=latLng.toJSON()
        setMarker(newMarker);
    };


    return isLoaded ? (
        <GoogleMap
            onClick={handleMapClick}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}>

                <Marker position={marker} />

        </GoogleMap>
    ) : <></>
}

export default memo(MapContainer)