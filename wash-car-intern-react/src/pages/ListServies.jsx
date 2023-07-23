
import {React,useState,useEffect} from 'react'
import axios from 'axios';
import Table from '../components/Table'
import FetchData from '../helpers/FetchData';


const ListServies = () => {
  const [columnss, setColumns] = useState([]);
    const [datas, setData] = useState([]);

    useEffect(() => {
        // Fetch the API data here
        const endPoint = "services"; 
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
  <div>
    <Table columns={columnss} data={datas} />
  </div>
  )
}

export default ListServies
