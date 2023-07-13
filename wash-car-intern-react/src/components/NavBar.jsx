import { useState } from "react"
import { NavLink } from "react-router-dom"


const NavBar = () => {
  const[isLogIn,setIsLogIn]=useState(false);

  return (
<nav classn="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
  <NavLink to="/" className="flex items-center">
      <img src="logo.png" className="h-20 mr-2 w-30 " alt="4asleh Logo"/>
  </NavLink>
  <div className="flex md:order-2 ">
      {isLogIn?<button type="button" className="text-white bg-bblue hover:bg-White-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">LOG OUT</button>:
      <button type="button" className="text-white bg-bblue hover:bg-White-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">LOG IN</button>}
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
      <li>
        <NavLink to="/" className=" py-2 pl-3 pr-4 text-White-blue hover:text-bblue">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/tracker" className=" py-2 pl-3 pr-4 text-White-blue hover:text-bblue ">TRACK</NavLink>
      </li>
      <li>
        <NavLink to="/profile" className=" py-2 pl-3 pr-4 text-White-blue hover:text-bblue ">PROFILE</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default NavBar