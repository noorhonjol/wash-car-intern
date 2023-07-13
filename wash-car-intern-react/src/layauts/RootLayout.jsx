import { NavLink , Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";

export default function () {
  return (
    <div className="root-layout">
       <NavBar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
