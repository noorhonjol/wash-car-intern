import { Link } from "react-router-dom"
import HomeIcon from "../components/HomeIcon"
const picCard = [

  { "src": "speedCar.png", "alt": "Speed Pic", "label": "Speed" },
  { "src": "quality-icon.png", "alt": "quality Pic", "label": "High quality" },
  { "src": "R.png", "alt": " Accuracy Pic", "label": " Accuracy in work" },
]

const HomePage = () => {
  return (
    <section className="bg-basic dark:bg-gray-900">
      <div className=" gap-11 flex flex-col justify-center sm:h-screen h-screen lg:py-0">
        <div>
          <h3 className=" font-bold text-center text-gray-400 text-base leading-tight tracking-tight md:text-2xl ">
            Welcome to our vehicle washing website !
          </h3>
        </div>
          <img className="mt-10 h-40 w-50 mx-auto" src="hpCar.png" alt="Car" />
        <div className=" flex justify-center ">
          <Link 
          to="reservation/map"
           className=" text-white bg-bblue hover:bg-White-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-9 py-4 text-center md:mr-0">
            Go To Book
            </Link>
        </div>
        <div className=" flex flex-wrap items-center justify-center gap-11" >
          {
            picCard.map((picc,index) => {
              return <HomeIcon key={index} src={picc.src} alt={picc.alt} label={picc.label} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default HomePage