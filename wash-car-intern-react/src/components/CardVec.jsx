const CardVec = ({src,alt,type}) => {
  return (
    <div className=" lg:h-3/5 flex flex-row rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row "> 
      <img
        className=" h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={src}
        alt={alt}
      />
      <div className=" p-6 mt-7 ml-10">
    <button className=" px-8 py-3 bg-bblue text-white rounded-full my-6 hover:bg-White-blue">{type}</button>
  </div>
  </div>
 
  )
}

export default CardVec