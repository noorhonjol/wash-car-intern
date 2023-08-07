import { useNavigate,useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Card = ({id,imageName,alt,type,description,price}) => {
  const navigate=useNavigate();
  const loc=useLocation()
  const ss=()=>{

    navigate({pathname:"../confirm",search:`${loc.search}&serviceid=${id}`});
    
  }
  return (
    <div className=" sm:h-11/12 md:h-11/12 h-1/5 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={`/${imageName}`}
        alt={alt}
      />
      <div className="flex flex-col p-6 justify-around	">
        <p className="mb-4 text-base text-neutral-600 ">
          {description}
        </p>
        <p className="text-lg font-bold text-neutral-500 ">
          {price}
        </p>
        <button className=" bg-bblue px-4 py-2 text-white rounded-full my-6 hover:bg-White-blue" onClick={ss}>{type}</button>
      </div>
    </div>
  );
};

export default Card;