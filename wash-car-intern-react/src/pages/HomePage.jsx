import HomeIcon from "../components/HomeIcon"
import NavBar from "../components/NavBar"
const picCard = [

  { "src": "speedCar.png", "alt": "Speed Pic", "label": "Speed" },
  { "src": "quality-icon.png", "alt": "quality Pic", "label": "High quality" },
  { "src": "R.png", "alt": " Accuracy Pic", "label": " Accuracy in work" },
]

const HomePage = () => {
  return (
    <section className="bg-basic dark:bg-gray-900">
      <div className=" gap-11 flex flex-col justify-center sm:h-screen md:h-screen lg:py-0">
        <div>
          <h3 className=" font-bold text-dark-blue text-center text-gray-400 text-base leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Welcome to our vehicle washing website !
          </h3>
        </div>
          <img className="mt-10 h-40 w-50 mx-auto" src="hpCar.png" alt="Car" />
        <div className=" flex justify-center ">
          <button type="button" className=" text-white bg-bblue hover:bg-White-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-9 py-4 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go To Book </button>
        </div>
        <div className=" flex flex-wrap items-center justify-center gap-11" >
          {
            picCard.map((picc) => {
              return <HomeIcon src={picc.src} alt={picc.alt} label={picc.label} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default HomePage