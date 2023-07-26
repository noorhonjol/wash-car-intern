import {  Outlet } from "react-router-dom";
import NavBarAdmin from "../components/NavBarAdmin";
const AdminLayout= ()=> {
  return (
    <div className="flex w-full bg-basic ">
      <NavBarAdmin />
      <Outlet/>
    </div>
  )
}
export default AdminLayout