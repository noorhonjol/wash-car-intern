import Card from "../components/Card"

import { useLoaderData } from "react-router-dom";


const Servies = () => {
  const {data:services}=useLoaderData("selectservices");

  return (
    <div className="bg-basic">
        <h2 className="font-bold text-lg p-5 mt-20"> Step 2 : Choose your servies.</h2>
        <div className="w-4/5 my-0 mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  items-center justify-center h-screen">
      {services.map((service)=>{
        return <Card key={service.id} id={service.id} imageName={service.image_url} alt="zefy" type={service.service_name} description={service.description} price={service.price}/>
      })
      }
    </div>
    </div>
  )
}

export default Servies