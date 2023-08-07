import BarChart from "../components/BarChart";
import {  useRouteLoaderData } from 'react-router-dom';


const HomeDashboard = () => {
  const { data } = useRouteLoaderData("homedashboard")
  const serviceNames = data.services_reservations_count.map(item => item.service_name);
  const reservationsCounts = data.services_reservations_count.map(item => item.reservations_count);
  const vehiclesNames = data.vehicles_services_count.map(item => item.vehicle_type);
  const servicescount = data.vehicles_services_count.map(item => item.services_count);
  const status = data.status_count.map(item => item.status);
  const statuscount = data.status_count.map(item => item.count);
  return(
  <div className="flex h-screen items-center justify-center flex-wrap">
    <BarChart labelsNames={serviceNames} dataValues={reservationsCounts} labeltext="Type of Reservations"/>
    <BarChart labelsNames={vehiclesNames} dataValues={servicescount} labeltext="Services Count"/>
    <BarChart labelsNames={status} dataValues={statuscount} labeltext="Status Count"/>

</div>
  )
}
export default HomeDashboard;