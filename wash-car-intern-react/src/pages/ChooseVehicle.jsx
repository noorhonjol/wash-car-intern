import {useRouteLoaderData}from "react-router-dom"
import CardVec from '../components/CardVec'
const ChooseVehicle = () => {
  const {data : vehicles}=useRouteLoaderData("selectvehicle");

  const alt="alt"
  return (
    <div className="bg-basic">
      <h2 className="font-bold text-lg p-5"> Step 1 : Choose your Vehicle.</h2>
      <div className="w-4/5 my-0 mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-7 sm:grid-cols-1 items-center justify-center h-screen">
        {vehicles.map((vehicle)=>{
          return <CardVec vehicleId={vehicle.id} key={vehicle.id} imgSrc={vehicle.image_url} imgAlt={alt} vehicleType={vehicle.vehicle_type}/>
        })
      }
      </div>
    </div>
  )
}

export default ChooseVehicle