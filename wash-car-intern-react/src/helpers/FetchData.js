import axios from 'axios';
import React from 'react'

const FetchData = (endPoint) => {
return axios.get(`http://127.0.0.1:8000/api/${endPoint}`)
.then((response) => {
    console.log(response)
    return {columns:Object.keys(response.data[0]),data:response.data}
})
.catch((error) => {
    console.error("Error fetching data:", error);
});
}
export default FetchData

