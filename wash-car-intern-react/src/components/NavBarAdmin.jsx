import React from 'react'

const NavBarAdmin = () => {
  return (
    <div>
      <nav className="lg:hidden py-6 px-6 ">
      </nav>
      <div className="hidden lg:block navbar-menu relative z-50">
        <nav className=" left-0 bottom-0 flex flex-col w-3/4 lg:w-72 md:w-72 xl:w-96 sm:max-w-xs pt-6 pb-8 bg-basic overflow-y-auto h-screen">
          <div class="px-4 pb-6 ">
            <ul class="mb-8 text-sm font-medium ">
              <li>
                <a class="flex items-center pl-3 py-3 pr-4 text-dark-blue bg-bblue rounded" href="#">
                  <span >Home</span>
                </a>
              </li>
              <li>
                <a class="flex items-center pl-3 py-3 pr-4 text-dark-blue  hover:bg-White-blue rounded" href="#">
                  <span>Vehicles</span>
                </a>
              </li>
              <li>
                <a class="flex items-center pl-3 py-3 pr-4 text-dark-blue  hover:bg-White-blue rounded" href="#">
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a class="flex items-center pl-3 py-3 pr-4 text-dark-blue  hover:bg-White-blue rounded" href="#">
                  <span>Worker</span>
                </a>
              </li>
              <li>
                <a class="flex items-center pl-3 py-3 pr-4 text-dark-blue hover:bg-White-blue rounded" href="#">
                  <span>Profile</span>
                </a>
              </li>
            </ul>
            <div class="pt-8">
              <a class="flex items-center pl-3 py-3 pr-2  text-dark-blue  hover:bg-White-blue  rounded" href="#">
                <span>Log Out</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBarAdmin