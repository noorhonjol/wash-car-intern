import { useState } from "react";
import Card from "../components/Card"


const Servies = () => {
    const[servies,setServies]=useState([{"src":"Standardwash.jpg","alt":"standardPic","type":"Standard vehicle wash","description":"This includes a basic exterior wash using water, soap, and a brush to remove regular dirt and contaminants.","price":"15$"},
    {"src":"interior.jpg","alt":"interiorPic","type":"Interior vehicle wash","description":"Focuses on cleaning and conditioning the car's seats, cleaning and polishing the dashboard, and other interior components.","price":"20$"},
    {"src":"Full.jpg","alt":"fullPic","type":"Full vehicle wash","description":"This includes cleaning all aspects of the vehicle both from the inside and outside.","price":"15$"},
    {"src":"Dry.jpg","alt":"dryPic","type":"Dry vehicle wash","description":"Special cleaning agents are used to remove dirt and contaminants without the use of water.","price":"15$"},

])

  return (
    <div className="bg-basic">
        <h2 className="font-bold text-lg p-5"> Step 2 : Choose your servies.</h2>
        <div className="w-4/5 my-0 mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  items-center justify-center h-screen">
      {servies.map((e,i)=>{
        return <Card key={i} src={e.src} alt={e.alt} type={e.type} description={e.description} price={e.price}/>
      })
      }
    </div>
    </div>
  )
}

export default Servies