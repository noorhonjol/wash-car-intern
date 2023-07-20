import { NavLink , Outlet} from "react-router-dom";
import NavBarAdmin from "../components/NavBarAdmin";
export default function () {
    return (
      <div className="root-layout">
         <NavBarAdmin/>
          <main>
              <Outlet/>
          </main>
      </div>
    )
  }
  