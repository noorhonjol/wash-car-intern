import { useState, memo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import {  useNavigate, createSearchParams } from "react-router-dom";
import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
const containerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 32.221105,
  lng: 35.260749,
};
function MapContainer() {


  const [showAlert, setShowAlert] = useState(false);
  const [marker, setMarker] = useState({});

  const navigate=useNavigate();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCKIMFw5uOgRLBT2kacsZvFaKe1vVHa7M0",
  });
  const handleClose = () => {
    setShowAlert(false);
  };

  const handleMapClick = (event) => {
    
    const { latLng } = event;
    let newMarker = latLng.toJSON();
    
    setMarker(newMarker);
  };

  const clickFunction = () => {
    if (Object.keys(marker).length) {
      navigate({pathname:"../choosevehicle",search:createSearchParams(marker).toString()});
    } else {
      setShowAlert(true);
    }
  };
  return isLoaded ? (
    <>
      <GoogleMap
        onClick={handleMapClick}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <Marker position={marker} />
      </GoogleMap>

      <button
        
        onClick={clickFunction}
        className=" absolute bottom-1/4 right-1/2  text-white bg-bblue hover:bg-White-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-9 py-4 text-center md:mr-0"
      >
        Go To Book
      </button>

      <Dialog
        open={showAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Alert"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            you should select your postion
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ok</Button>
        </DialogActions>
      </Dialog>

    </>
  ) : (
    <></>
  );
}

export default memo(MapContainer);
