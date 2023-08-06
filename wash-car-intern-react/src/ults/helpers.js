import axios from "axios";
import { errorCodes, messages, backendUrls } from "./constants";
import { redirect } from "react-router-dom";
const updateData=async(endPoint,newData)=>{
  try{
    const {token}=authInfo();
    console.log(endPoint,newData)
    const response=await axios.patch(`${backendUrls.apiUrl}/${endPoint}`,newData,
    {
      headers:{
      "Accept":"application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization:`Bearer ${token}`,
    }});
    return response.data;
  }catch(err){
    return err;
  }
}
const update=async(endPoint,newData)=>{
  try{
    const {token}=authInfo();
    console.log(endPoint,newData)
    const response=await axios.put(`${backendUrls.apiUrl}/${endPoint}`,newData,
    {
      headers:{
      "Accept":"application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization:`Bearer ${token}`,
    }});
    return response.data;
  }catch(err){
    return err;
  }
}

const confirmReservationAction=async({request})=>{
  try{
    const url = new URL(request.url);
    const searchTerm = url.searchParams;
    const serviceid=searchTerm.get("serviceid");
    const lat=searchTerm.get("lat");
    const lng=searchTerm.get("lng");
  
    const reservationData ={serviceid,lat,lng};
    await PostData("reservation",reservationData);
    return redirect('/') 
  }catch(err){
    return err;
  }
}
const PostData=async(endPoint,data)=>{
  try {
    const {token}=authInfo();
console.log(data)
    const response = await axios.post(`${backendUrls.apiUrl}/${endPoint}`,data,{

      headers:{
      "Accept":"application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization:`Bearer ${token}`,
    }
    });
    return { data: response.data };

  } catch (error) {
    console.log(error)
    return messages.unexpectedError;
  }
}
const FetchData = async (endPoint) => {
  try {
    const {token}=authInfo();

    const response = await axios.get(`${backendUrls.apiUrl}/${endPoint}`,{
      headers:{
      "Accept":"application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization:`Bearer ${token}`
      }
    });
    return { data: response.data };

  } catch (error) {
    console.log(error)
    return messages.unexpectedError;
  }
};

const loaderForServicesPage=async({request})=>{
  const url = new URL(request.url);
  const searchTerm = url.searchParams;
  const vehicleId=searchTerm.get("vehicleid");

  return await FetchData(`vehicle/${vehicleId}/services`);

}
const loaderForConfirmPage=async({request})=>{
  const url = new URL(request.url);
  const searchTerm = url.searchParams;
  const vehicleId=searchTerm.get("vehicleid");
  const serviceId=searchTerm.get("serviceid");

  
  const {data:vehicle}=await FetchData(`vehicle/${vehicleId}`);
  console.log(vehicle)
  const {data:service}=await FetchData(`service/${serviceId}`);
  
  return {service:service,vehicle:vehicle};
}
const authInfo = () => {
  return { rule: localStorage.getItem("rule"), token: localStorage.getItem("usertoken")};
}
const submitForm = async (userData, endPoint) => {
  try {
    const response = await fetch(`${backendUrls.apiUrl}/${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",

      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      if (response.status === errorCodes.unauthorized) {
        return messages.invalidCredentials;
      } else {
        return messages.unexpectedError;
      }
    }

    const responseData = await response.json();
    localStorage.setItem("usertoken", responseData.UserToken);
    localStorage.setItem("rule", responseData.UserInfo.role);
    return messages.successful;
  } 
  catch (error) {
    return messages.unexpectedError;
  }
};

export { FetchData, submitForm, authInfo,loaderForServicesPage,loaderForConfirmPage,PostData,confirmReservationAction ,updateData,update};
