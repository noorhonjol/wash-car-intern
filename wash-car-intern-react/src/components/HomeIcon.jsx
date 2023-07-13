const HomeIcon = ({ src, alt, label }) => {
  return (
    <div className="text-center">
        <img className=" h-20 w-30 mx-auto" src={src} alt={alt} />
        <label className="text-base">{label}</label>
    </div>
  )
}

export default HomeIcon