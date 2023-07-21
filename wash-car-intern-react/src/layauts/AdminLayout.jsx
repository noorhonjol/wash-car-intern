import { NavLink, Outlet } from "react-router-dom";
import NavBarAdmin from "../components/NavBarAdmin";
export default function () {
  return (
    <div className="flex w-full bg-basic ">
      <NavBarAdmin />
        <Outlet className="w-full " />
    </div>
  )
}
