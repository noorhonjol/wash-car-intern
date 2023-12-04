import { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import {  useNavigate, createSearchParams } from "react-router-dom";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 32.221105,
  lng: 35.260749,
};
function MapContainer() {


  const [marker, setMarker] = useState(center);

  const navigate=useNavigate();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCdKpgSgWNwwAfh-_9EK6-vBEBFk-YAOXA",
  });

  const handleMapClick = (event) => {   
    const { latLng } = event;
    let newMarker = latLng.toJSON();  
    setMarker(newMarker);
  };

  const clickFunction = () => {
    navigate({pathname:"../choosevehicle",search:createSearchParams(marker).toString()});
  };
  return isLoaded ? (
    <>
      <GoogleMap

        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onClick={handleMapClick}
      >
        <Marker position={marker} />
      </GoogleMap>

      <button
        
        onClick={clickFunction}
        className=" absolute bottom-20 right-1/2  text-white bg-bblue hover:bg-White-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-12 py-6 text-center  md:mr-0"
      >
        Go To Book
      </button>



    </>
  ) : (
    <></>
  );
}

export default MapContainer;
