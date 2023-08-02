import { useRouteLoaderData } from "react-router-dom";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Steps from "../components/Steps";

const containerStyle = {
  width: "90vw",
  height: "70vh",
};


const ReservationDetails = () => {
  const { data: details } = useRouteLoaderData("details");
  const { rule } = useRouteLoaderData("root");

  let { latitude, longitude } = details;
  latitude = parseFloat(latitude);
  longitude = parseFloat(longitude);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCdKpgSgWNwwAfh-_9EK6-vBEBFk-YAOXA",
    
  });
  
  return isLoaded ? (
    <div className="container mx-auto mt-12">
        <div className="flex flex-col items-center gap-16">

            <GoogleMap mapContainerStyle={containerStyle} center={{lat:latitude,lng:longitude}} zoom={17} >
                
                <Marker position={{ lat: latitude, lng: longitude }} />
            </GoogleMap>

            <Steps actualStatus={details.status} rule={rule}/>
        </div>
    </div>

  ) : (
    <div>waiting</div>
  );

};
export default ReservationDetails;
