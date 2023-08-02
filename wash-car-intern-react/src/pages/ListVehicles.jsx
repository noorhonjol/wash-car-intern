import { useLoaderData } from "react-router-dom";
import Table from '../components/Table'
import EmptyTable from "../components/EmptyTable";
const ListVehicles = () => {

    const {data} =useLoaderData("vehicles");

    return (
        <div className=" flex flex-col items-start mt-4 my-0 mx-auto ">
        
            {data.length?<Table columns={Object.keys(data[0])} data={data} action="delete" actionUrl="delete"/>:<EmptyTable link="addvehicle"/>}
        </div>
    )
}

export default ListVehicles
