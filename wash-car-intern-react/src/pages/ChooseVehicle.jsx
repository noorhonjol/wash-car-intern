import { useState } from "react";
import CardVec from '../components/CardVec'
const ChooseVehicle = () => {
  const[vehicle,setvehicle]=useState([{"src":"car.png","alt":"carPic","type":"CAR"},
    {"src":"mator.png","alt":"interiorPic","type":"MOTOR"},
    {"src":"bus.png","alt":"busPic","type":"BUS"},
    {"src":"sha7n.png","alt":"truckPic","type":"TRUCK"},
])
  return (
    <div className="bg-basic">
      <h2 className="font-bold text-lg p-5"> Step 1 : Choose your Vehicle.</h2>
      <div className="w-4/5 my-0 mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-7 sm:grid-cols-1 items-center justify-center h-screen">
      {vehicle.map((e,i)=>{
        return <CardVec key={i} src={e.src} alt={e.alt} type={e.type}/>
      })
      }
    </div>
    </div>
  )
}

export default ChooseVehicle