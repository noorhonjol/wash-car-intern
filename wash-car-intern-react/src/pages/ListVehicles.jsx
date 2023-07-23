import { NavLink } from "react-router-dom";
import { React, useState, useEffect } from 'react'
import axios from 'axios';
import Table from '../components/Table'
import FetchData from '../helpers/FetchData';

const ListVehicles = () => {
    const [columnss, setColumns] = useState([]);
    const [datas, setData] = useState([]);

    useEffect(() => {
        // Fetch the API data here
        const endPoint = "vehicles";
        FetchData(endPoint)
            .then((response) => {
                setData(response.data);
                setColumns(response.columns);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
        <div className=" flex flex-col items-start mt-4 my-0 mx-auto ">
             <NavLink to="/dashboard/addvehicle" className="text-white bg-bblue hover:bg-White-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 " >
                Add New elements
            </NavLink>
            <Table columns={columnss} data={datas} />
        </div>
    )
}

export default ListVehicles
