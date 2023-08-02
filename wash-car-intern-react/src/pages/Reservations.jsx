import { Navigate, useRouteLoaderData } from "react-router-dom";
import { rules } from "../ults/constants";
import DynamicTable from "../components/Table";
const Reservations=()=>{
    const {rule} = useRouteLoaderData("root");
    const {data:reservations}=useRouteLoaderData("orders");
    const transformedReservations = reservations.map((reservation) => {
        const { customer, service,vehicle,id, ...rest } = reservation;
        return {
            "id":id,
            "customer name": `${customer.first_name} ${customer.last_name}`,
            "customer phone": customer.phone_number,
            vehicle_type:vehicle.vehicle_type,
            service_name: service.service_name,
            "service price":service.price,
            ...rest
        };
      });
    return(
        <>
            {rule===rules.workerRule?<DynamicTable columns={Object.keys(transformedReservations[0])} data={transformedReservations} action="details" url="reservation" />:<Navigate to="/"/>}
        </>
    )

}
export default Reservations;