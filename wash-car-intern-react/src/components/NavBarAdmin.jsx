import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faUsers,
  faSprayCanSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const NavBarAdmin = () => {
  return (
    <aside
      id="default-sidebar"
      className=" z-40 w-64 h-screen sm:translate-x-0"
      aria-label="Sidebar">

      <div className="h-full px-3 py-4 overflow-y-auto bg-bblue">
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink to="/dashboard/listservices" className="flex items-center p-2 text-white rounded-lg  hover:bg-bblue">
              <FontAwesomeIcon icon={faSprayCanSparkles} />
              <span className="flex-1 ml-3 whitespace-nowrap">Services</span>
            </NavLink>
          </li>
          <li>
            <Link to="/dashboard/listvehicles" className="flex items-center p-2 text-white rounded-lg hover:bg-bblue">
              <FontAwesomeIcon icon={faCar} />
              <span className="flex-1 ml-3 whitespace-nowrap">Vehicles</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/worker" className="flex items-center p-2  text-white rounded-lg hover:bg-bblue">
              <FontAwesomeIcon icon={faUsers} />
              <span className="flex-1 ml-3 whitespace-nowrap">Worker</span>
            </Link>
          </li>

        </ul>
      </div>
    </aside>
  );
};

export default NavBarAdmin;
