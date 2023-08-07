import { Navigate, useRouteLoaderData } from "react-router-dom";
import { rules } from "../ults/constants";
import DynamicTable from "../components/Table";
import EmptyTable from "../components/EmptyTable";
const Reservations=()=>{
    const {rule} = useRouteLoaderData("root");
    const {data:reservations}=useRouteLoaderData("orders");
    console.log(reservations)
    if(reservations.length){

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
                {rule===rules.workerRule&&transformedReservations?<DynamicTable columns={Object.keys(transformedReservations[0])} data={transformedReservations} actionsUrl={["reservation"]} url="reservation" />:<Navigate to="/"/>}
            </>
        )
    }else{
        return <EmptyTable/>
    }

}
export default Reservations;