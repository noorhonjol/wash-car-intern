import {  Outlet } from "react-router-dom";
import NavBarAdmin from "../components/NavBarAdmin";
import { Navigate, useRouteLoaderData } from "react-router-dom";
import { rules } from "../ults/constants";
const AdminLayout= ()=> {
  const{rule}= useRouteLoaderData("root");
  return (
    rule === rules.AdminRule?
      <div className="flex w-full bg-basic ">
        <NavBarAdmin />
        <Outlet/>
      </div>
      :<Navigate to="/"/>

    
  )
}
export default AdminLayout