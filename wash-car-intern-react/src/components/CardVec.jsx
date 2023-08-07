import {useNavigate,useLocation} from "react-router-dom"
// eslint-disable-next-line react/prop-types
const CardVec = ({imgSrc,imgAlt,vehicleType,vehicleId}) => {

  const navigate=useNavigate();
  const loc=useLocation()
  const ss=()=>{

    navigate({pathname:"../services",search:`${loc.search}&vehicleid=${vehicleId}`});
    
  }
  return (
    <div className=" lg:h-1/5 flex flex-row rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row ">       
      <img
        className=" h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={`/${imgSrc}`}
        alt={imgAlt}/>

      <div className=" p-6 mt-7 ml-10">
    <button onClick={ss} className="px-8 py-3 bg-bblue text-white rounded-full my-6 hover:bg-White-blue">{vehicleType}</button>
  </div>
  </div>
  )
}

export default CardVec