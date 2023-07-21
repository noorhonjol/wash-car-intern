import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar , faHouse , faUsers , faUser , faRightFromBracket ,faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons'

const NavBarAdmin = () => {
  return (

<aside id="default-sidebar" class=" z-40 w-64 h-screen sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-bblue">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-bblue">
            <FontAwesomeIcon icon={faHouse} />
               <span className="ml-3">Home</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-white rounded-lg  hover:bg-bblue">
            <FontAwesomeIcon icon={faSprayCanSparkles}/>
               <span className="flex-1 ml-3 whitespace-nowrap">Services</span>
            </a>
         </li>
         <li>

            <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-bblue">
            <FontAwesomeIcon icon={faCar} />
               <span className="flex-1 ml-3 whitespace-nowrap">Vehicles</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2  text-white rounded-lg hover:bg-bblue">
            <FontAwesomeIcon icon={faUsers} />
               <span className="flex-1 ml-3 whitespace-nowrap">Worker</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2  text-white rounded-lg  hover:bg-bblue">
            <FontAwesomeIcon icon={faUser} />
               <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-white rounded-lg  hover:bg-bblue">
            <FontAwesomeIcon icon={faRightFromBracket} />
               <span className="flex-1 ml-3 whitespace-nowrap ">Log Out </span>
            </a>
         </li>
        
      </ul>
   </div>
</aside>
  )
}

export default NavBarAdmin